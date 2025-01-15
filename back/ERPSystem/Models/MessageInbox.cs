using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ERPSystem.Models
{
    public class MessageInbox
    {
        [Key]
        public int Id { get; set; } // Unique identifier for the linking entry

        [Required]
        public int MessageId { get; set; } // Foreign key to Message

        [ForeignKey("MessageId")]
        public Message Message { get; set; } // Navigation property for Message

        [Required]
        public int InboxId { get; set; } // Foreign key to Inbox (Recipient)

        [ForeignKey("InboxId")]
        public Inbox Inbox { get; set; } // Navigation property for Inbox
    }
}
