using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using ERPSystem.Enums;

namespace ERPSystem.Models
{
    public class Notification
    {
        [Key]
        public int Id { get; set; } // Unique identifier for the notification

        [Required]
        public int InboxId { get; set; } // Foreign key to Inbox

        [ForeignKey("InboxId")]
        public Inbox Inbox { get; set; } // Navigation property for Inbox

        [Required]
        public NotificationType Type { get; set; } // Type of notification (e.g., "Payment", "SystemAlert")

        [Required]
        [MaxLength(200)]
        public string Message { get; set; } // Content of the notification

        [Required]
        public DateTime Timestamp { get; set; } // Date and time the notification was generated

        [Required]
        public bool IsRead { get; set; } // Indicates if the notification has been read
    }
}
