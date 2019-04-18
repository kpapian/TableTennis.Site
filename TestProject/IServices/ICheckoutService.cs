using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestProject.Models;

namespace TestProject.IServices
{
    /// <summary>
    ///     Provides APIs for adding order.
    /// </summary>
    public interface ICheckoutService
    {
        /// <summary>
        /// Add new order
        /// </summary>
        /// <param name="orderData">Order model</param>
        /// <returns>Returns task</returns>
        Task<string> CreateOrder(Order orderData);
    }
}
