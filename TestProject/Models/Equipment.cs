using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestProject.Models
{
    /// <summary>
    /// Describe Equipment entity
    /// </summary>
    public class Equipment
    {
        /// <summary>
        /// Gets or sets Id of equipment model
        /// </summary>
        public Int32 Id { get; set; }

        /// <summary>
        /// Gets or sets the EquipmentName of equipment model
        /// </summary>
        public String EquipmentName { get; set; }

        /// <summary>
        /// Gets or sets the price of equipment model
        /// </summary>
        public Decimal Price { get; set; }

        /// <summary>
        /// Gets or sets the ImageReference of equipment model
        /// </summary>
        public String ImageReference { get; set; }

        /// <summary>
        /// Gets or sets the ImageReference of equipment model
        /// </summary>
        public Int32 Quantity { get; set; }
    }
}
