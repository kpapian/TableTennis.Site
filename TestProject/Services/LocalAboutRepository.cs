using Microsoft.AspNetCore.Hosting;
using System.IO;
using System.Threading.Tasks;
using TestProject.IServices;
using TestProject.Utils;

namespace TestProject.Services
{
    public class LocalAboutRepository: IAboutService
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        /// <summary>
        ///     Initializes a new instance of the <see cref="LocalAboutRepository" /> class.
        /// </summary>
        /// <param name="hostingEnvironment">The hosting environment.</param>
        public LocalAboutRepository(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public Task<string> GetAboutHtmlContent()
        {
            string filePath = Path.Combine(_hostingEnvironment.ContentRootPath, PathConstants.RelativeAboutHtmlPath);
            return File.ReadAllTextAsync(filePath);
        }
    }
}
