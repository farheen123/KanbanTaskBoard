using System.ComponentModel.DataAnnotations;
namespace Kanban.Backend.Models
{
  public class TaskItem
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public KanbanTaskStatus Status { get; set; } = KanbanTaskStatus.ToDo;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
