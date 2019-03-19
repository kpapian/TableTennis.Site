using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using TestProject.IServices;
using TestProject.Models;
using TestProject.Utils;

namespace TestProject.Services
{
    public class LocalEquipmentRepository: IEquipmentService
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        /// <summary>
        ///     Initializes a new instance of the <see cref="LocalCoachesRepository" /> class.
        /// </summary>
        /// <param name="hostingEnvironment">The hosting environment.</param>
        public LocalEquipmentRepository(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public Task<IEnumerable<Equipment>> GetEquipmentList()
        {
            string path = Path.Combine(_hostingEnvironment.ContentRootPath, PathConstants.EquipmentJsonPath);
            return path.Deserialize<IEnumerable<Equipment>>(path);
        }
    }
}
