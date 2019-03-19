using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using TestProject.IServices;
using TestProject.Models;
using TestProject.Utils;

namespace TestProject.Services
{
    public class LocalCoachesRepository: ICoachesService
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        /// <summary>
        ///     Initializes a new instance of the <see cref="LocalCoachesRepository" /> class.
        /// </summary>
        /// <param name="hostingEnvironment">The hosting environment.</param>
        public LocalCoachesRepository(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public Task<IEnumerable<Coach>> GetCoachesInformation()
        {
            string path = Path.Combine(_hostingEnvironment.ContentRootPath, PathConstants.CoachesJsonPath);
            return path.Deserialize<IEnumerable<Coach>>(path);
        }
    }
}
