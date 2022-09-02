using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Web.Script.Serialization;
using System.Data;

namespace Pavan.Aspx
{
    public partial class API : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Write("HI");
           // GetBenficiaryStageDetails_FromAPCFSS(benid);
        }
        //static void Main(string[] args)
        //{
        //    //028105NPI0969883
        //    DataAccess objdt = new DataAccess();
        //    DataTable dt = objdt.GetBenData();
        //    Console.WriteLine($"{dt.Rows.Count} Records from DB");
        //    int i = 0;
        //    foreach (DataRow row in dt.Rows)
        //    {
        //        i++;
        //        var benid = row["BEN_ID"].ToString();
        //        Console.WriteLine($"Processing {i}th record; Benef_ID:-{benid}");
        //        GetBenficiaryStageDetails_FromAPCFSS(benid);
        //    }
        //    Console.ReadKey();
        //}
        public  void GetBenficiaryStageDetails_FromAPCFSS(string benid)
        {
            try
            {
                string JsonVlaues = benid;
                #region webapistart
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls | (SecurityProtocolType)768 | (SecurityProtocolType)3072;
                HttpWebRequest webRequest;
                string requestparameters = JsonVlaues;
                //APSHCL url
                //webRequest = (HttpWebRequest)WebRequest.Create("https://apshcl.apcfss.in/getBenExpDetails?benId=" + benid);
                //YJC Housing URL
                webRequest = (HttpWebRequest)WebRequest.Create("https://yjchousing.apcfss.in/ApshclApi/getBenExpDetails?benId=" + benid);
                webRequest.Method = "POST";
                webRequest.ContentType = "application/json";
                byte[] bytearray = Encoding.UTF8.GetBytes(requestparameters);
                webRequest.ContentLength = bytearray.Length;
                //  webRequest.KeepAlive = true;
                webRequest.Credentials = new NetworkCredential("apshcl", "apshcl");
                using (Stream requestStream = webRequest.GetRequestStream())
                {
                    requestStream.Write(bytearray, 0, bytearray.Length);
                    requestStream.Close();
                }
                using (WebResponse response = webRequest.GetResponse())
                {
                    using (Stream responseStream = response.GetResponseStream())
                    {
                        StreamReader rdr = new StreamReader(responseStream, Encoding.UTF8);
                        String Json = rdr.ReadToEnd();
                        if (Json.Length > 0)
                        {
                           // DataAccess objdt = new DataAccess();
                            var data = JArray.Parse(Json);
                            int succ_cunt = 0;
                            if (data[0]["beneficiaryData"].ToString() != "[]")
                            {
                                var restoken = data[0]["responseToken"].ToString();
                                var expenditure = data[0]["beneficiaryData"][0]["expenditure"].ToString();
                                if (expenditure == "" || expenditure == null)
                                {
                                    expenditure = "0";
                                }
                                else
                                {
                                    expenditure = data[0]["beneficiaryData"][0]["expenditure"].ToString();
                                }
                                var Amount = data[0]["beneficiaryData"][0]["unit_cost"].ToString();
                                if (Amount == "" || Amount == null)
                                {
                                    Amount = "0";
                                }
                                else
                                {
                                    Amount = data[0]["beneficiaryData"][0]["unit_cost"].ToString();
                                }
                                var today = DateTime.Now.ToString();
                               // Console.WriteLine($"Expenditure: {expenditure}");
                                lblresponse.Text = expenditure;

                                //  DataTable dti = objdt.InsertAPCFSSBenData(benid, expenditure, restoken, Amount);
                                // Console.WriteLine($"Expenditure: {expenditure}");
                                //if (dti.Rows.Count > 0)
                                //{
                                //    string ID = dti.Rows[0]["ID"].ToString().Trim();
                                //    string msg = dti.Rows[0]["Msg"].ToString().Trim();
                                //    if (ID == "1")
                                //    {
                                //        succ_cunt = succ_cunt + 1;
                                //        Console.WriteLine($"Received response and updated in DB");
                                //    }
                                //}
                                //Console.ReadKey();
                            }
                            else
                            {
                                var res = data[0]["responseMsg"];
                                var restoken = data[0]["responseToken"].ToString();
                                if (restoken == "0")
                                {
                                    string expenditure = "0";
                                    string amount = "0";
                                    //Console.WriteLine($"Expenditure: {expenditure}");
                                    lblresponse.Text = expenditure;

                                    //  DataTable dti = objdt.InsertAPCFSSBenData(benid, expenditure, restoken, amount);
                                    //if (dti.Rows.Count > 0)
                                    //{
                                    //    string ID = dti.Rows[0]["ID"].ToString().Trim();
                                    //    string msg = dti.Rows[0]["Msg"].ToString().Trim();
                                    //    if (ID == "1")
                                    //    {
                                    //        succ_cunt = succ_cunt + 1;
                                    //        Console.WriteLine($"Received response and updated in DB");
                                    //    }
                                    //}
                                    // Console.WriteLine($"Error: {res}");
                                }
                                else if (restoken == "1")
                                {
                                    string expenditure = "0";
                                    string amount = "0";
                                    // Console.WriteLine($"Expenditure: {expenditure}");
                                    lblresponse.Text = expenditure;

                                    //DataTable dti = objdt.InsertAPCFSSBenData(benid, expenditure, restoken, amount);
                                    //if (dti.Rows.Count > 0)
                                    //{
                                    //    string ID = dti.Rows[0]["ID"].ToString().Trim();
                                    //    string msg = dti.Rows[0]["Msg"].ToString().Trim();
                                    //    if (ID == "1")
                                    //    {
                                    //        succ_cunt = succ_cunt + 1;
                                    //        Console.WriteLine($"Received response and updated in DB");
                                    //    }

                                    //}
                                    //  Console.WriteLine($"Error: {res}");

                                }
                            }
                        }
                        else
                        {
                            lblresponse.Text = "NO Data";
                            Console.WriteLine("No Data Found from CFSS");
                        }
                    }//respo
                }//req
                #endregion
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception=" + ex.Message.ToString().Trim());
                lblresponse.Text = ex.Message;
                // Console.ReadKey();
            }
        }

        protected void btnsubmit_Click(object sender, EventArgs e)
        {
            var benid = txtbenid.Text;
            GetBenficiaryStageDetails_FromAPCFSS(benid);
        }
    }
}

  

