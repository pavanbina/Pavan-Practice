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
    public class Sample
    {
        string cs = ConfigurationManager.ConnectionStrings["MyConnectionStringSastra"].ConnectionString;
        public DataTable GetAssignmentData()
        {

            SqlConnection con = new SqlConnection(cs);
            DataTable dthistory = new DataTable();
            try
            {
                SqlCommand cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "Pr_Get_Assessment_Due_Dates";

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

        public DataTable GetWeekMstr()
        {

            SqlConnection con = new SqlConnection(cs);
            DataTable dthistory = new DataTable();
            try
            {
                SqlCommand cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "WeekMasterData";

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

        [WebMethod]
        public static string GetAssignmentDataforReport()
        {
            string jsonResult = "";

            try
            {
                string createdby = string.Empty;


                Sample obj = new Sample();

                DataTable dtindentlist_AE = obj.GetAssignmentData();
                if (dtindentlist_AE.Rows.Count > 0)
                {
                    jsonResult = JsonConvert.SerializeObject(dtindentlist_AE);
                    jsonResult.Replace(@"\", string.Empty);
                }
                //
                //  }
                //else
                //{

                //}

            }
            catch (Exception ex)
            {
                jsonResult = JsonConvert.SerializeObject(ex.Message.ToString());
                jsonResult.Replace(@"\", string.Empty);
            }
            return jsonResult;
        }
    }
}