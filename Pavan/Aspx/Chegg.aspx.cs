using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pavan.Aspx
{
    public partial class Chegg : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        public int tax(int x)
        {
            //int t = x / 100 * 10;
            int t = (x * 10) / 100;

            return t;
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            int a, b, c, t;
            a = Convert.ToInt16(TextBox1.Text); // number of hours
            b = 10;
            if (CheckBox1.Checked == true)
            {
                c = a * 20;
            }
            // if (a <= 8)
            else if (a <= 8)
            {
                c = a * b;
            }
            else
            {
                //  c = 8 * b + (a - 8 * 15);
                c = (8 * b) + ((a - 8) * 15);
            }
            c = c - tax(c);
            Label1.Text = "Your Salary is " + Convert.ToString(c) + " $";
        }

    }
}