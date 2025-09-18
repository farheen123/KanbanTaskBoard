using Kanban.Backend.Models;

namespace Kanban.Backend.Repositories
{
    public interface ITaskRepository
    {
        Task<IEnumerable<TaskItem>> GetAllAsync();
        Task<TaskItem?> GetByIdAsync(Guid id);
        Task<TaskItem> CreateAsync(TaskItem item);
        Task UpdateAsync(TaskItem item);
        Task DeleteAsync(Guid id);
    }
}
