using Newtonsoft.Json;
using Pavan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace Pavan.Controllers
{
    public class LoginController:Controller
    {
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult SampleForm()
        {
            return View();
        }
        public ActionResult FormControls()
        {
            return View();
        }
        [HttpPost]
        public ActionResult SignUp(signuparams inputparamJSON)
        {
            try
            {
                var jsonResult = "";
                JavaScriptSerializer js = new JavaScriptSerializer();
                string json = js.Serialize(inputparamJSON);
                signuparams objparams = new JavaScriptSerializer().Deserialize<signuparams>(json);
                Login obj = new Login();
                var result = obj.SignUp(objparams);
                if (result.Rows.Count > 0)
                {
                    var successmsg = result.Rows[0]["msg"].ToString();
                    var id = result.Rows[0]["id"].ToString();
                    jsonResult = JsonConvert.SerializeObject(id);
                    jsonResult.Replace(@"\", string.Empty);
                }
                else
                {
                    //var successmsg = "Insertion Failed";
                    var id = "2";
                    jsonResult = JsonConvert.SerializeObject(id);
                    jsonResult.Replace(@"\", string.Empty);
                }
                return Json(jsonResult);
            }
            catch (Exception ex)
            {
                var js = "";
                throw ex;
                js = JsonConvert.SerializeObject(ex);
                js.Replace(@"\", string.Empty);
            }
            
        }
        [AllowAnonymous]
        [HttpPost]
        public ActionResult Login(loginparams inputparamJSON)
        {
            try
            {
                var jsonResult = "";
                JavaScriptSerializer js = new JavaScriptSerializer();
                string json = js.Serialize(inputparamJSON);
                loginparams objparams = new JavaScriptSerializer().Deserialize<loginparams>(json);
                Login obj = new Login();
                var result = obj.LogIn(objparams);
                if (result.Rows.Count > 0)
                {
                    var email = result.Rows[0]["email"].ToString().Trim();
                    var pwd = result.Rows[0]["pwd"].ToString().Trim();
                    var objemail = objparams.email.ToString().Trim();
                    var objpwd = objparams.pwd.ToString().Trim();
                    if ((objemail != email) || (objpwd!= pwd))
                    {
                        var successmsg = "2";
                        jsonResult = JsonConvert.SerializeObject(successmsg);
                        jsonResult.Replace(@"\", string.Empty);
                        //return this.RedirectToAction("Login", "Login");
                       // return Json(jsonResult);
                    }
                    else
                    {
                      
                        var successmsg = "1";
                        jsonResult = JsonConvert.SerializeObject(successmsg);
                        jsonResult.Replace(@"\", string.Empty);
                        //return this.RedirectToAction("Welcome");
                        //return Json(jsonResult);
                    }
                }
                else
                {
                    var successmsg = "2";
                    jsonResult = JsonConvert.SerializeObject(successmsg);
                    jsonResult.Replace(@"\", string.Empty);
                    //return this.RedirectToAction("Login", "Login");
                }
               // return this.RedirectToAction("Login", "Login");
                return Json(jsonResult); 
                // return RedirectToAction("Welcome", "Login");
            }
            catch (Exception ex)
            {
                var js = string.Empty;
                throw ex;
                js = JsonConvert.SerializeObject(ex);
                js.Replace(@"\", string.Empty);
            }

        }

        public ActionResult Welcome()
        {
            return View();
        }
    }
}