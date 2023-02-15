using MOSH.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using System.Data.Entity.Infrastructure.MappingViews;
using MOSH.ViewModels;

namespace MOSH.Controllers
{
    public class CustomersController : Controller
    {
        private MyDBContext _context;
        public CustomersController()
        {
            _context = new MyDBContext();
        }
        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
        }
        // GET: Customers
        public ActionResult Index()
        {
            //var customers=GetCustomers();
            //return View(customers);
            var customers = _context.Customers.Include(c => c.MembershipType).ToList();
            return View(customers);
        }
        public ActionResult CustomerForm()
        {
            var membershiptypes = _context.MembershipTypes.ToList();
            var viewModel = new NewCustomerViewModel
            {
                MembershipTypes = membershiptypes
            };
            return View(viewModel);
        }
        public ActionResult Edit(int id)
        {
            var customer = _context.Customers.SingleOrDefault(c => c.Id == id);
            if (customer == null)
            {
                return HttpNotFound();
            }
            else
            {
                var viewModel = new NewCustomerViewModel
                {
                    customer = customer,
                    MembershipTypes = _context.MembershipTypes.ToList()
                };
            return View("CustomerForm",viewModel);
            }
        }

        [HttpPost]
        public ActionResult Save(Customer customer)
        {
            if (customer.Id == 0)
            {
                _context.Customers.Add(customer);
            }
            else
            {
                var customerInDb=_context.Customers.Single(c=>c.Id==customer.Id);
                customerInDb.Name=customer.Name;
                customerInDb.DOB = customer.DOB;
                customerInDb.MembershipTypeId = customer.MembershipTypeId;
                customerInDb.IsSubscribedtoNewsLetter = customer.IsSubscribedtoNewsLetter;
               
            }
            //_context.Customers.Add(customer);
            _context.SaveChanges();
            return RedirectToAction("Index","Customers");
        }
        public ActionResult Details(int id)
        {
            //var customer=GetCustomers().SingleOrDefault(c=>c.Id==id);
            var customer = _context.Customers.Include(c => c.MembershipType).SingleOrDefault(c => c.Id == id);
            if (customer == null)
            {
                return HttpNotFound();
            }
            else
            {
                return View(customer);
            }
        }
        private IEnumerable<Customer> GetCustomers()
        {
          return new List<Customer>
          {
              new Customer{Id=1, Name="Pavan"},
              new Customer{Id=2, Name="Sai"}
          };
        }
    }
}