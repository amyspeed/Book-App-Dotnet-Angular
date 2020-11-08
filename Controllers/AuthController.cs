using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Book_App.Data;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Book_App.Controllers
{
    [Route("api/auth")]
    public class AuthController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;

        public AuthController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] Credentials credentials)
        {
            var user = new IdentityUser { UserName = credentials.Email, Email = credentials.Email };
            var result = await _userManager.CreateAsync(user, credentials.Password);

            if(!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }

            await _signInManager.SignInAsync(user, isPersistent: false);

            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("This is the secret"));
            var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);

            var jwt = new JwtSecurityToken(signingCredentials: signingCredentials);
            return Ok(new JwtSecurityTokenHandler().WriteToken(jwt));
        }
    }
}