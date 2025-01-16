using System.Security.Claims;
using ERPSystem.Data; // For AppDbContext
using ERPSystem.DTOs;
using ERPSystem.Helpers; // For JwtHelper
using ERPSystem.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ERPSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly JwtHelper _jwtHelper;

        public UsersController(AppDbContext context, JwtHelper jwtHelper)
        {
            _context = context;
            _jwtHelper = jwtHelper;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto loginDto)
        {
            // Validate the request data
            if (string.IsNullOrEmpty(loginDto.Email) || string.IsNullOrEmpty(loginDto.Password))
            {
                return BadRequest("Email and password are required.");
            }

            // Check if the user exists in the database
            var user = _context.Users.SingleOrDefault(u => u.Email == loginDto.Email);
            if (user == null)
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }

            // Verify the password (assuming plain text for now)
            if (user.Password != loginDto.Password)
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }

            // Generate the JWT token
            var token = _jwtHelper.GenerateToken(user.Id, user.Email, user.Role.ToString());

            return Ok(new
            {
                token,
                user = new
                {
                    user.Id,
                    user.FirstName,
                    user.LastName,
                    user.Role
                }
            });
        }

        [HttpGet("dashboard")]
        [Authorize]
        public IActionResult GetDashboardData()
        {
            // Extract user claims from the token
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (userId == null)
            {
                return Unauthorized(new { message = "Invalid token or user information" });
            }

            // Parse the userId to integer
            int userIdInt = int.Parse(userId);

            // Fetch the Inbox for the logged-in user
            var inbox = _context.Inboxes.SingleOrDefault(i => i.UserId == userIdInt);
            if (inbox == null)
            {
                return NotFound(new { message = "Inbox not found for the user." });
            }

            // Fetch and combine messages and notifications
            var latestItems = _context.MessageInboxes
                .Where(mi => mi.InboxId == inbox.Id)
                .Select(mi => new
                {
                    Type = "Message",
                    Id = mi.Message.Id,
                    SubjectOrType = mi.Message.Subject, // Subject for messages
                    Date = mi.Message.Timestamp,
                    IsRead = mi.Message.IsRead
                })
                .Union(
                    _context.Notifications
                        .Where(n => n.InboxId == inbox.Id)
                        .Select(n => new
                        {
                            Type = "Notification",
                            Id = n.Id,
                            SubjectOrType = n.Type.ToString(), // Type for notifications
                            Date = n.Timestamp,
                            IsRead = n.IsRead
                        })
                )
                .OrderByDescending(item => item.Date) // Order combined items by date
                .Take(4) // Take the latest 4 items
                .ToList();

            // Return the result
            return Ok(latestItems);
        }
    }
}
