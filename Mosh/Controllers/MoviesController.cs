using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Mosh.Models;
using Mosh.ViewModels;

namespace Mosh.Controllers
{
    public class MoviesController : Controller
    {
        // GET: Movies
        public ActionResult Random()
        {
            var movie = new Movie() { Name = "Shrek!" };
            var customers = new List<Customer>
            {
                new Customer{Name ="Customer1"},
                new Customer{Name ="Customer2"}

            };
            var ViewModel = new RandomMovieViewModel
            {
                Movie = movie,
               Customers = customers
            };
            return View(ViewModel);
        }
    }
}