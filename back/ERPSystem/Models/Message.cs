using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ERPSystem.Models
{
    public class Message
    {
        [Key]
        public int Id { get; set; } // Unique identifier

        [Required]
        public int SenderId { get; set; } // Foreign key to the sender (User)

        [ForeignKey("SenderId")]
        public User Sender { get; set; } // Navigation property for the sender

        [Required]
        [MaxLength(100)]
        public string Subject { get; set; } // Message subject

        [Required]
        public string Body { get; set; } // Message body content

        [Required]
        public DateTime Timestamp { get; set; } // When the message was sent

        public bool IsRead { get; set; } // If the message has been read

        // Navigation property for linking table
        public List<MessageInbox> MessageInboxes { get; set; } = new List<MessageInbox>();
    }
}
