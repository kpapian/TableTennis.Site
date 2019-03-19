using System.Collections.Generic;
using System.Threading.Tasks;
using TestProject.Models;

namespace TestProject.IServices
{
    /// <summary>
    ///     Provides APIs for equipment data.
    /// </summary>
    public interface IEquipmentService
    {
        /// <summary>
        ///     Gets equipment list.
        /// </summary>
        /// <returns>Equipments as a list.</returns>
        Task<IEnumerable<Equipment>> GetEquipmentList();
    }
}
