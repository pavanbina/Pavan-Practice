using Pavan.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Web;
using System.Web.Mvc;

namespace Pavan.Controllers
{
    public class PracticeController : Controller
    {
        // GET: JqueryDataTable
        public ActionResult JqueryDataTable()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Ajax()
        {
            Employee emp = new Employee();
            List<EmployeeViewModel> customerList = emp.GetEmployees();
            return Json(customerList);

        }

        public ActionResult DragDrop()

        {

            return View();

        }

        public ActionResult Uploade()

        {

            bool isSavedSuccessfully = true;

            string fname = "";

            try

            {

                foreach (string filename in Request.Files)

                {

                    HttpPostedFileBase file = Request.Files[filename];

                    fname = file.FileName;

                    if (file != null && file.ContentLength > 0)

                    {

                        var path = Path.Combine(Server.MapPath("D:\\UploadFiles"));

                        string pathstring = Path.Combine(path.ToString());

                        string filename1 = Guid.NewGuid() + Path.GetExtension(file.FileName);

                        bool isexist = Directory.Exists(pathstring);

                        if (!isexist)

                        {

                            Directory.CreateDirectory(pathstring);

                        }

                        string uploadpath = string.Format("{0}\\{1}", pathstring, filename1);

                        file.SaveAs(uploadpath);

                    }

                }

            }

            catch (Exception)

            {

                isSavedSuccessfully = false;

            }

            if (isSavedSuccessfully)

            {

                return Json(new

                {

                    Message = fname

                });

            }

            else

            {

                return Json(new

                {

                    Message = "Error in Saving file"

                });

            }

        }

        public ActionResult Drag()
        {
            return View();
        }

        public ActionResult Upload()
        {
            bool isSavedSuccessfully = true;
            string fName = "";
            try
            {
                foreach (string fileName in Request.Files)
                {
                    HttpPostedFileBase file = Request.Files[fileName];
                    fName = file.FileName;
                    if (file != null && file.ContentLength > 0)
                    {
                        var path = Path.Combine(@"D:\UploadFiles\");
                        // var files = Directory.GetFiles(@"E:\ftproot\sales");

                        string pathString = System.IO.Path.Combine(path.ToString());
                        var fileName1 = Path.GetFileName(file.FileName);
                        bool isExists = System.IO.Directory.Exists(pathString);
                        if (!isExists) System.IO.Directory.CreateDirectory(pathString);
                        var uploadpath = string.Format("{0}\\{1}", pathString, file.FileName);
                        file.SaveAs(uploadpath);
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            if (isSavedSuccessfully)
            {
                return Json(new
                {
                    Message = fName
                });
            }
            else
            {
                return Json(new
                {
                    Message = "Error in saving file"
                });
            }

        }

        public ActionResult MVCForm()
        {
            return View();
        }

        public ActionResult BootstrapTable()
        {
            return View();
        }

        public ActionResult DynamicBootStrapTable()
        {
            return View();
        }

        public ActionResult JsPdf()
        {
            return View();
        }

        public ActionResult Fileuploadsql()
        {
            return View();
        }

        public ActionResult DynamicBootstrapGrid()
        {
            return View();
        }

        public ActionResult MorphingDiv()
        {
            return View();
        }




    }
}