using MOSH.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MOSH.ViewModels
{
    public class NewMovieViewModel
    {
        public IEnumerable<Genre> Genres { get; set; }
        public Movie movie { get; set; }
    }
}