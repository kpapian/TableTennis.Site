using Microsoft.AspNetCore.Hosting;
using System.IO;
using System.Threading.Tasks;
using TestProject.IServices;

namespace TestProject.Services
{
    public class AboutService: IAboutService
    {
        private readonly string _aboutHtmlContent;

        /// <summary>
        ///     Initializes a new instance of the <see cref="AboutService" /> class.
        /// </summary>
        /// <param name="hostingEnvironment">The hosting environment.</param>
        public AboutService(IHostingEnvironment hostingEnvironment)
        {
            string filePath = Path.Combine(hostingEnvironment.ContentRootPath, "Data", "about.html");
            _aboutHtmlContent = File.ReadAllText(filePath);
        }

        public Task<string> GetAboutHtmlContent()
        {
            return Task.FromResult(_aboutHtmlContent);
        }
    }
}
