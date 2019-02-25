using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestProject.IServices;

namespace TestProject.Controllers
{
    /// <summary>
    ///     Returns about HTML content
    /// </summary>
    [Route("api/about")]
    [ApiController]
    public class AboutController : ControllerBase
    {
        private readonly IAboutService _about;


        /// <summary>
        ///     Initializes a new instance of the <see cref="AboutController" /> class.
        /// </summary>
        /// <param name="about">About interface.</param>
        public AboutController(IAboutService about)
        {
            _about = about;
        }

        /// <summary>
        ///     Returns About HTML content or empty string if HTML file not found
        ///     GET api/about.
        /// </summary>
        /// <returns>HTML content of about as a string</returns>
        [HttpGet]
        public async Task<IActionResult> GetAboutHtmlAsync()
        {
            return Ok(await _about.GetAboutHtmlContent());
        }
    }
}
