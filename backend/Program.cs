using Kanban.Backend.Data;
using Kanban.Backend.Repositories;
using Kanban.Backend.Models;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);


// Ensure Kestrel listens on a known port 5000 (dev)
builder.WebHost.UseUrls("http://localhost:5000");

// Add EF Core InMemory
builder.Services.AddDbContext<KanbanDbContext>(options =>
    options.UseInMemoryDatabase("KanbanDb"));

builder.Services.AddScoped<ITaskRepository, TaskRepository>();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

// Add services to the container.
builder.Services.AddControllers();

// Allow CORS from frontend dev server
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();
// Seed some initial data
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<KanbanDbContext>();

    if (!db.Tasks.Any())
    {
        db.Tasks.AddRange(new[]
        {
            new TaskItem {
                Title = "Set up project",
                Description = "Create solution and projects",
                Status = KanbanTaskStatus.ToDo,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new TaskItem {
                Title = "Implement API",
                Description = "Implement controllers and repository",
                Status = KanbanTaskStatus.InProgress,
                CreatedAt = DateTime.UtcNow.AddHours(-3),
                UpdatedAt = DateTime.UtcNow.AddHours(-1)
            },
            new TaskItem {
                Title = "Write frontend",
                Description = "React components and drag/drop",
                Status = KanbanTaskStatus.Done,
                CreatedAt = DateTime.UtcNow.AddDays(-1),
                UpdatedAt = DateTime.UtcNow
            }
        });

        db.SaveChanges();
        Console.WriteLine($"Seeded {db.Tasks.Count()} tasks.");
    }
}
//if (app.Environment.IsDevelopment())
//{
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Kanban API V1");
    c.RoutePrefix = string.Empty; // makes Swagger at root URL
});
//}
app.Run();
