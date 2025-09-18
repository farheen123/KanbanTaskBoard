using Kanban.Backend.Data;
using Kanban.Backend.Models;
using Microsoft.EntityFrameworkCore;
namespace Kanban.Backend.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        private readonly KanbanDbContext _context;
        public TaskRepository(KanbanDbContext context)
        {
            _context = context;
        }
        public async Task<TaskItem> CreateAsync(TaskItem item)
        {
            _context.Tasks.Add(item);
            await _context.SaveChangesAsync();
            return item;
        }
        public async Task DeleteAsync(Guid id)
        {
            var entity = await _context.Tasks.FindAsync(id);
            if (entity == null) return;
            _context.Tasks.Remove(entity);
            await _context.SaveChangesAsync();
        }
        public async Task<IEnumerable<TaskItem>> GetAllAsync()
        {
            return await _context.Tasks.OrderBy(t => t.CreatedAt).ToListAsync();
        }
        public async Task<TaskItem?> GetByIdAsync(Guid id)
        {
            return await _context.Tasks.FindAsync(id);
        }
        public async Task UpdateAsync(TaskItem item)
        {
            _context.Tasks.Update(item);
            await _context.SaveChangesAsync();
        }
    }
}
