using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestProject.IServices;

namespace TestProject.Controllers
{
    /// <summary>
    ///     Returns equipment list
    /// </summary>
    [Route("api/equipment")]
    [ApiController]
    public class EquipmentController: ControllerBase
    {
        private readonly IEquipmentService _equipment;

        /// <summary>
        ///     Initializes a new instance of the <see cref="EquipmentController" /> class.
        /// </summary>
        /// <param name="coaches">Equipment interface.</param>
        public EquipmentController(IEquipmentService equipment)
        {
            _equipment = equipment;
        }

        /// <summary>
        ///     Returns Equipment list
        ///     GET api/equipment.
        /// </summary>
        /// <returns>Equipment list with info as a Equipment model</returns>
        [HttpGet]
        public async Task<IActionResult> GetEquipmentListAsync()
        {
            return Ok(await _equipment.GetEquipmentList());
        }
    }
}
