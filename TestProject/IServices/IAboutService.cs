using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestProject.IServices
{
    /// <summary>
    ///     Provides APIs for about data.
    /// </summary>
    public interface IAboutService
    {
        /// <summary>
        ///     Gets the content of the about HTML.
        /// </summary>
        /// <returns>HTML content of about as a string.</returns>
        Task<string> GetAboutHtmlContent();
    }
}
