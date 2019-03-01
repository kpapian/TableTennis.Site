using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestProject.Controllers
{
    /// <summary>
    ///     Returns coaches information list
    /// </summary>
    [Route("api/coaches")]
    [ApiController]
    public class CoachesController: ControllerBase
    {

        public CoachesController()
        {

        }
    }
}
