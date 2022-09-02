using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace Pavan.Models
{
    public class Login
    {
        string cs = ConfigurationManager.ConnectionStrings["MyConnectionString"].ConnectionString;
        public DataTable SignUp(signuparams obj)
        {

            SqlConnection con = new SqlConnection(cs);
            DataTable dthistory = new DataTable();
            try
            {
                SqlCommand cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "signupproc";
                cmd.Parameters.AddWithValue("@username", obj.username);
                cmd.Parameters.AddWithValue("@email", obj.email);
                cmd.Parameters.AddWithValue("@pwd", obj.pwd);
                cmd.Connection = con;
                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dthistory);
                return dthistory;
            }
            catch (SqlException sqx)
            {
                throw sqx;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
            }


        }

        public DataTable LogIn(loginparams obj)
        {

            SqlConnection con = new SqlConnection(cs);
            DataTable dthistory = new DataTable();
            try
            {
                SqlCommand cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "Loginproc";
                cmd.Parameters.AddWithValue("@email", obj.email);
                cmd.Connection = con;
                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dthistory);
                return dthistory;
            }
            catch (SqlException sqx)
            {
                throw sqx;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
            }


        }
    }
    public class signuparams
    {
        public string username { get; set; }
        public string  email { get; set; }
        public string  pwd { get; set; }
    }

    public class loginparams
    {
        public string email { get; set; }
        public string pwd { get; set; }
    }
}