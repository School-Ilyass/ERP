using ERPSystem.Data; // For AppDbContext
using ERPSystem.DTOs;
using ERPSystem.Helpers; // For JwtHelper
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
                return Unauthorized("Invalid email or password.");
            }

            // Verify the password (assuming plain text for now)
            if (user.Password != loginDto.Password)
            {
                return Unauthorized("Invalid email or password.");
            }

            // Generate the JWT token
            var token = _jwtHelper.GenerateToken(user.Email, user.Role.ToString());

            // Return the token in the response
            return Ok(new { Token = token });
        }
    }
}
