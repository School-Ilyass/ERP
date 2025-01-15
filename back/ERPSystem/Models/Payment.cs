using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using ERPSystem.Enums;

namespace ERPSystem.Models
{
    public class Payment
    {
        [Key]
        public int Id { get; set; } // Unique identifier for the payment

        [Required]
        public int UserId { get; set; } // Foreign key to the user who received the payment

        [ForeignKey("UserId")]
        public User User { get; set; } // Navigation property for the user

        [Required]
        [DataType(DataType.Currency)]
        public decimal Amount { get; set; } // Payment amount

        [Required]
        public DateTime PaymentDate { get; set; } // Date the payment was made

        [Required]
        public PaymentType Type { get; set; } // Type of payment (e.g., "Salary", "Bonus")

        [MaxLength(200)]
        public string Description { get; set; } // Optional details about the payment
    }
}
