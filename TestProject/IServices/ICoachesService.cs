using System.Collections.Generic;
using System.Threading.Tasks;
using TestProject.Models;

namespace TestProject.IServices
{
    /// <summary>
    ///     Provides APIs for coaches data.
    /// </summary>
    public interface ICoachesService
    {
        /// <summary>
        ///     Gets coaches information.
        /// </summary>
        /// <returns>Coaches information.</returns>
        Task<IEnumerable<Coach>> GetCoachesInformation();
    }
}
