using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pavan.Models
{
    public class EmployeeViewModel
    {
        public string Sno { get; set; }
        public int EmployeeId { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Role { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string District { get; set; }
        public string Country { get; set; }
    }
}