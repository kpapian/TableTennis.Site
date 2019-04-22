using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using TestProject.IServices;
using TestProject.Models;

namespace TestProject.Controllers
{
    /// <summary>
    ///     Create customer order
    /// </summary>
    [Route("api/checkout")]
    [ApiController]
    public class CheckoutController : ControllerBase
    {
        private readonly ICheckoutService _checkout;

        /// <summary>
        ///     Initializes a new instance of the <see cref="CheckoutController" /> class.
        /// </summary>
        /// <param name="checkout">Checkout interface.</param>
        public CheckoutController(ICheckoutService checkout)
        {
            _checkout = checkout;
        }

        [HttpPost("order")]
        public async Task<IActionResult> CreateOrderAsync(
            [Required] [FromBody] Order orderData)
        {
            if (orderData == null)
            {
                return this.BadRequest();
            }

            return Ok(await this._checkout.CreateOrder(orderData));
        }
    }
}
