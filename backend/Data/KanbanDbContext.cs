using Microsoft.EntityFrameworkCore;
using Kanban.Backend.Models;

namespace Kanban.Backend.Data
{
    public class KanbanDbContext : DbContext
    {
        public KanbanDbContext(DbContextOptions<KanbanDbContext> options) : base(options) { }

        public DbSet<TaskItem> Tasks { get; set; }
    }
}