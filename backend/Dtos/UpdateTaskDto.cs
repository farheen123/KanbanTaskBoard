using System.ComponentModel.DataAnnotations;

namespace Kanban.Backend.Dtos
{
    public class UpdateTaskDto
    {
        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public TaskStatus Status { get; set; }
    }
}
