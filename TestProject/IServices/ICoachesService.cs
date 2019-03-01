using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
        /// <returns>Coaches information as a structure.</returns>
        Task<string> GetCoachesInformation();
    }
}
