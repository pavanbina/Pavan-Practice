using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pavan.Aspx
{
    public partial class Crop : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void Upload(object sender, EventArgs e)
        {
            string base64 = Request.Form["imgCropped"];
            byte[] bytes = Convert.FromBase64String(base64.Split(',')[1]);
            using (FileStream stream = new FileStream(Server.MapPath("~/Images/Cropped.png"), FileMode.Create))
            {
                stream.Write(bytes, 0, bytes.Length);
                stream.Flush();
            }
           // ClientScript.RegisterStartupScript(this.GetType(), "Response", "Successfully Uploaded", true);
        }
    }
}