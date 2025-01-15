using ERPSystem.Models;
using Microsoft.EntityFrameworkCore;
namespace ERPSystem.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Inbox> Inboxes { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<Payment> Payments { get; set; }

        // DbSet for the linking table
        public DbSet<MessageInbox> MessageInboxes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure enums to be stored as strings
            modelBuilder.Entity<User>()
                .Property(u => u.Gender)
                .HasConversion<string>();

            modelBuilder.Entity<User>()
                .Property(u => u.Role)
                .HasConversion<string>();

            modelBuilder.Entity<Notification>()
                .Property(n => n.Type)
                .HasConversion<string>();

            modelBuilder.Entity<Payment>()
                .Property(p => p.Type)
                .HasConversion<string>();

            // Configure User ↔ Inbox (One-to-One)
            modelBuilder.Entity<User>()
                .HasOne(u => u.Inbox)
                .WithOne(i => i.User)
                .HasForeignKey<Inbox>(i => i.UserId)
                .OnDelete(DeleteBehavior.Cascade); // Deleting a user deletes their inbox

            // Configure Message ↔ Sender (Many-to-One)
            modelBuilder.Entity<Message>()
                .HasOne(m => m.Sender)
                .WithMany()
                .HasForeignKey(m => m.SenderId)
                .OnDelete(DeleteBehavior.Restrict); // Prevent deletion of sender from deleting messages

            // Configure Message ↔ Recipient(s) (Many-to-Many via MessageInbox)
            modelBuilder.Entity<MessageInbox>()
                .HasOne(mi => mi.Message)
                .WithMany(m => m.MessageInboxes)
                .HasForeignKey(mi => mi.MessageId);

            modelBuilder.Entity<MessageInbox>()
                .HasOne(mi => mi.Inbox)
                .WithMany(i => i.MessageInboxes)
                .HasForeignKey(mi => mi.InboxId);

            // Configure Inbox ↔ Notifications (One-to-Many)
            modelBuilder.Entity<Notification>()
                .HasOne(n => n.Inbox)
                .WithMany(i => i.Notifications)
                .HasForeignKey(n => n.InboxId)
                .OnDelete(DeleteBehavior.Cascade); // Deleting an inbox deletes its notifications

            base.OnModelCreating(modelBuilder);
        }
    }
}
