using System.ComponentModel.DataAnnotations;
using ERPSystem.Enums;
namespace ERPSystem.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; } // Unique identifier for the user

        [Required]
        [MaxLength(100)]
        public string Name { get; set; } // Full name of the user

        [Required]
        [EmailAddress]
        [MaxLength(100)]
        public string Email { get; set; } // Email address for login

        [Required]
        [StringLength(50, MinimumLength = 8)]
        public string Password { get; set; } // Encrypted password

        [Required]
        public Gender Gender { get; set; }

        [DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; } // User's date of birth

        [Phone]
        public string PhoneNumber { get; set; } // Contact number

        [Url]
        public string? ProfilePictureUrl { get; set; } // URL to the user's profile picture

        [Required]
        public DateTime CreatedAt { get; set; } // Date and time the account was created

        public DateTime? LastLogin { get; set; } // Timestamp of the last login (nullable)

        [Required]
        public bool IsActive { get; set; } // Indicates if the account is active

        [Required]
        public Role Role { get; set; } // Role (e.g., Admin, HR, Employee)

        [Required]
        [MaxLength(100)]
        public string Position { get; set; } // Position or title in the enterprise (e.g., Manager, Developer)

        [Required]
        [DataType(DataType.Currency)]
        public decimal Salary { get; set; } // Salary of the user

        // Relationships
        public Inbox Inbox { get; set; } // One-to-One relationship with Inbox

        // One-to-Many relationship with Payment
        public List<Payment> Payments { get; set; } = new List<Payment>();
    }
}
