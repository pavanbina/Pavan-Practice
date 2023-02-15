﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MOSH.Models
{
    public class Movie
    {
        [Required]
        public int Id { get; set; }
        [Required]
        [StringLength(255)]
        public string Name { get; set; }
        public Genre Genre { get; set; }
        public int GenreId { get; set; }

        public DateTime ReleaseDate { get; set; }
        public DateTime DateAdded { get; set; }
        public int StockIn { get; set; }
    }
}