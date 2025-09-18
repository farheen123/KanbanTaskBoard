using System.ComponentModel.DataAnnotations;
using Kanban.Backend.Models;
using TaskStatus = Kanban.Backend.Models.KanbanTaskStatus;
namespace Kanban.Backend.Dtos
{
    public class CreateTaskDto
    {
        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }

        public KanbanTaskStatus Status { get; set; } = KanbanTaskStatus.ToDo;
    }
}
