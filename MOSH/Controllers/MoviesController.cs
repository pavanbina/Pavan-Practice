using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MOSH.Models;
using MOSH.ViewModels;

namespace MOSH.Controllers
{
    public class MoviesController : Controller
    {
        private MyDBContext _dbContext;
        public MoviesController()
        {
            _dbContext = new MyDBContext();
        }
        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
        }
        // GET: Movies
    
        public ActionResult Index()
        {
            var movie = _dbContext.Movies.ToList();
            return View(movie);
        }
        public ActionResult AddMovie()
        {
            var membershiptypes = _dbContext.Movies.ToList();
            return View(membershiptypes);
        }
        public ActionResult Details(int id)
        {
            var movie = _dbContext.Movies.SingleOrDefault(m => m.Id == id);
            if(movie == null)
            {
                return HttpNotFound();
            }
            else
            {
                return View(movie);
            }
        }
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