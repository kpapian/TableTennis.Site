using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TestProject.IServices;
using TestProject.Models;
using TestProject.Utils;

namespace TestProject.Services
{
    public class LocalCheckoutRepository : ICheckoutService
    {
        /// <summary>
        /// Add order
        /// </summary>
        /// <param name="orderData">UserDataDto model</param>
        /// <returns>Returns task</returns>
        public async Task<string> CreateOrder(Order orderData)
        {
            string id = Guid.NewGuid().ToString();
            string order = JsonConvert.SerializeObject(orderData);
            string orderPath = Path.Combine(PathConstants.OrderJsonPathes, $"order_{id}.json");

            byte[] orderBytes = System.Text.Encoding.UTF8.GetBytes(order);

            using (FileStream fs = File.Create(orderPath, orderBytes.Length))
            {
                await fs.WriteAsync(orderBytes);
            }

            return id;
        }
    }
}
