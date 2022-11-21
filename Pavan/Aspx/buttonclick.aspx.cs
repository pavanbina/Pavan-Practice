using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pavan.Aspx
{
    public partial class buttonclick : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            lbl1.Text = "";
        }
        protected void Btn_SerialNumber(object sender, EventArgs e)
        {

            //call function inside of javascript
            lbl1.Text = "Button Clicked";
        }
    }
}