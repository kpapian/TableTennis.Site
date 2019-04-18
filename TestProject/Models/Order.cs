using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestProject.Models
{
    public class Order
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Country { get; set; }
        public string Zip { get; set; }
        public string PaymentType { get; set; }
        public string CardNumber { get; set; }        
        public string ExpirationDate { get; set; }
        public string CVV { get; set; }
    }
}
