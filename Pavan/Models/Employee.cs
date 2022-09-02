using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Web;
using System.Web.Script.Serialization;

namespace Pavan.Models
{
    public class Employee
    {
        string cs = ConfigurationManager.ConnectionStrings["MyConnectionString"].ConnectionString;
        public List<EmployeeViewModel> GetEmployees()
        {

            List<EmployeeViewModel> emp = new List<EmployeeViewModel>();
            using (SqlConnection con = new SqlConnection(cs))
            {


                SqlCommand cmd = new SqlCommand("SP_GetEmployees", con);
                con.Open();
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter sda = new SqlDataAdapter(cmd);
                DataTable dt = new DataTable();
                sda.Fill(dt);
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    EmployeeViewModel employee = new EmployeeViewModel
                    {
                        Sno = dt.Rows[i]["SNO"].ToString(),
                        EmployeeId = (int)(dt.Rows[i]["EmployeeId"]),
                        LastName = dt.Rows[i]["LastName"].ToString(),
                        FirstName = dt.Rows[i]["FirstName"].ToString(),
                        Role = dt.Rows[i]["Role"].ToString(),
                        Address = dt.Rows[i]["Address"].ToString(),
                        City = dt.Rows[i]["City"].ToString(),
                        District = dt.Rows[i]["District"].ToString(),
                        Country = dt.Rows[i]["Country"].ToString()
                    };
                    emp.Add(employee);
                }
                  
                //using (SqlDataReader rdr = cmd.ExecuteReader())
                //{
                //    while (rdr.Read())
                //    {
                //        EmployeeViewModel employee = new EmployeeViewModel
                //        {
                //            EmployeeId = (int)rdr["EmployeeId"],
                //            LastName = rdr["LastName"].ToString(),
                //            FirstName = rdr["FirstName"].ToString(),
                //            Role = rdr["Role"].ToString(),
                //            Address = rdr["Address"].ToString(),
                //            City = rdr["City"].ToString(),
                //            District = rdr["District"].ToString(),
                //            Country = rdr["Country"].ToString()
                //        };
                //        emp.Add(employee);

                //    }
                //}

            }
            return emp;
        }
    }
}