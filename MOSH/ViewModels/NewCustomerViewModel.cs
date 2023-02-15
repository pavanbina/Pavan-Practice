using MOSH.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MOSH.ViewModels
{
    public class NewCustomerViewModel
    {
        public IEnumerable<MembershipType> MembershipTypes { get; set; }
        public Customer customer { get; set; }
    }
}