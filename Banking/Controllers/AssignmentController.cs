using Banking.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Banking.Controllers
{
    public class AssignmentController : Controller
    {
        // GET: Assignment
        public ActionResult AssignmentDates()
        {
            return View();
        }
        public ActionResult AssignmentReport()
        {
            return View();
        }
        [HttpPost]
        public JsonResult GetAssignmentReportData()
        {
            var jsonResult = "";
            Sample obj = new Sample();
            var result = obj.GetAssignmentData();
            jsonResult = JsonConvert.SerializeObject(result);
            jsonResult.Replace(@"\", string.Empty);
            return Json(jsonResult);
        }

        [HttpPost]
        public JsonResult GetWeekMstr()
        {
            var jsonResult = "";
            Sample obj = new Sample();
            var result = obj.GetWeekMstr();
            jsonResult = JsonConvert.SerializeObject(result);
            jsonResult.Replace(@"\", string.Empty);
            return Json(jsonResult);
        }
    }
}