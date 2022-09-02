﻿
using iTextSharp.text;
using iTextSharp.text.html.simpleparser;
using iTextSharp.text.pdf;
using System;
//using iTextSharp.html.simpleparser;
using System.IO;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
//using iTextSharp.tool.xml;
//using System.Reflection.Metadata;

namespace Banking
{
    public partial class pdf : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //var pdfinput = Request.QueryString["pdfinput"];
            //if (pdfinput != null)
            try
            {
                var jsonString = string.Empty;
                var authorName = string.Empty;
                HttpContext.Current.Request.InputStream.Position = 0;
                using (var inputStream = new StreamReader(Request.InputStream))
                {
                    jsonString = inputStream.ReadToEnd();
                    
                }
                if (jsonString != string.Empty)
                {
                    authorName = jsonString.Substring(0, 11);
                }
                if (jsonString != string.Empty && authorName!="__VIEWSTATE")
                {
                    string path = @"D:\DotNet Practice\Uploads\";
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                    string filename = "Test.pdf";
                    string filepath = path + filename;

                    if (File.Exists(filepath))
                    {
                        filepath = path + "Test" + DateTime.Now.ToString("yyyyMMdd_hhmmss") + ".pdf";
                    }
                    else { }
                    var byteArray = Convert.FromBase64String(jsonString);
                    //Get your desired path for saving file
                    File.WriteAllBytes(filepath, byteArray);
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
            
            
           
            

        }

        [WebMethod]
        public static string SavingJSPdf(string json)
        {
            var jsonString = string.Empty;
            var jsondata = json;
            HttpContext.Current.Request.InputStream.Position = 0;
            using (var inputStream = new StreamReader(HttpContext.Current.Request.InputStream))
            {
                jsonString = inputStream.ReadToEnd();
            }
            var byteArray = Convert.FromBase64String(jsonString);
            //Get your desired path for saving file
            File.WriteAllBytes(@"D:\DotNet Practice\Uploads\Test.pdf", byteArray);
            return jsonString;
        }

        public void ConvertTopdf()
        {
            string attachment = "attachment; filename=" + "PDFTest" + ".pdf";
            Response.ClearContent();
            Response.AddHeader("content-disposition", attachment);
            Response.ContentType = "application/pdf";
            StringWriter s_tw = new StringWriter();
            HtmlTextWriter h_textw = new HtmlTextWriter(s_tw);
            h_textw.AddStyleAttribute("font-size", "12pt");
            h_textw.AddStyleAttribute("color", "Black");
            printpdf.RenderControl(h_textw);//Name of the Panel  
            Document doc = new Document();
            doc = new Document(PageSize.A4, 50, 50, 50, 50);
            //FontFactory.GetFont("Verdana", 80,iTextSharp.text.Color.RED);
            PdfWriter.GetInstance(doc, Response.OutputStream);
            doc.Open();
            StringReader s_tr = new StringReader(s_tw.ToString());
            HTMLWorker html_worker = new HTMLWorker(doc);
            // XMLWorkerHelper.GetInstance().ParseXHtml(writer, pdfDoc, sr)
            html_worker.Parse(s_tr);
            doc.Close();
            Response.Write(doc);
            saveaspdf();
            Response.End();

        }

        public void saveaspdf()
        {
            //string path = Server.MapPath("~/APONLINE Work/");
            string path = "D:/APONLINE Work/Uploads/";
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            string filename = "Test.pdf";
            string filepath = path + filename;
            //  DateTime dt = DateTime.Now.ToString("yyyyMMdd_hhmmss");

            if (File.Exists(filepath))
            {
                filepath = path + "Test" + DateTime.Now.ToString("yyyyMMdd_hhmmss") + ".pdf";
            }
            else { }
            //path = Path.Combine(dir, fileName + " " + i + fileExt);

            FileStream file = new FileStream(filepath, FileMode.Create, FileAccess.Write);
            StringWriter s_tw = new StringWriter();
            HtmlTextWriter h_textw = new HtmlTextWriter(s_tw);
            printpdf.RenderControl(h_textw);
            StringReader s_tr = new StringReader(s_tw.ToString());
            Document doc = new Document();
            doc = new Document(PageSize.A4, 50, 50, 50, 50);
            HTMLWorker html_worker = new HTMLWorker(doc);
            MemoryStream ms = new MemoryStream();
            PdfWriter.GetInstance(doc, file);
            doc.Open();
            html_worker.Parse(s_tr);
            doc.Close();
            file.Close();
        }
        //public override void VerifyRenderingInServerForm(Control control)
        //{
        //    //base.VerifyRenderingInServerForm(control);
        //}

        protected void print_Click(object sender, EventArgs e)
        {
            ConvertTopdf();
            //Server.Transfer("Excel.aspx");
           // Response.Redirect("Excel.aspx");
        }
    }
}