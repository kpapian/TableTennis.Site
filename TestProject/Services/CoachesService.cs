using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using TestProject.IServices;
using TestProject.Models;

namespace TestProject.Services
{
    public class CoachesService: ICoachesService
    {
        private readonly IEnumerable<Coach> _coaches;

        /// <summary>
        ///     Initializes a new instance of the <see cref="CoachesService" /> class.
        /// </summary>
        /// <param name="hostingEnvironment">The hosting environment.</param>
        public CoachesService(IHostingEnvironment hostingEnvironment)
        {
            string json = File.ReadAllText(Path.Combine(hostingEnvironment.ContentRootPath, "Data\\Coaches.json"));
            _coaches = JsonConvert.DeserializeObject<List<Coach>>(json);
        }

        public Task<IEnumerable<Coach>> GetCoachesInformation()
        {
            return Task.FromResult(_coaches);
        }
    }
}
