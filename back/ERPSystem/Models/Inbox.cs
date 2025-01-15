using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ERPSystem.Models
{
    public class Inbox
    {
        [Key]
        public int Id { get; set; } // Unique identifier for the inbox

        [Required]
        public int UserId { get; set; } // Foreign key to User

        // Navigation property for User
        [ForeignKey("UserId")]
        public User User { get; set; }

        public List<MessageInbox> MessageInboxes { get; set; } = new List<MessageInbox>();

        // Collection of notifications in the inbox
        public List<Notification> Notifications { get; set; } = new List<Notification>();
    }
}
