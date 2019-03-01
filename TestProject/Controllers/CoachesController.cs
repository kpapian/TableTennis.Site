using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestProject.IServices;

namespace TestProject.Controllers
{
    /// <summary>
    ///     Returns coaches list
    /// </summary>
    [Route("api/coaches")]
    [ApiController]
    public class CoachesController: ControllerBase
    {
        private readonly ICoachesService _coaches;

        /// <summary>
        ///     Initializes a new instance of the <see cref="CoachesController" /> class.
        /// </summary>
        /// <param name="coaches">Coaches interface.</param>
        public CoachesController(ICoachesService coaches)
        {
            _coaches = coaches;
        }

        /// <summary>
        ///     Returns Coaches list
        ///     GET api/coaches.
        /// </summary>
        /// <returns>Coaches list with info as a Coach model</returns>
        [HttpGet]
        public async Task<IActionResult> GetCoachesInfoAsync()
        {
            return Ok(await _coaches.GetCoachesInformation());
        }
    }
}
