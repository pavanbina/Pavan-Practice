
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using iTextSharp.text;
using iTextSharp.text.pdf;

//using iTextSharp.html.simpleparser;
using System.IO;
using iTextSharp.text.html.simpleparser;
using iTextSharp.tool.xml;

namespace Banking
{
    public partial class pdf : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //try

            //{

            //    string strHtml = string.Empty;

            //    string htmlFileName = "D:/DotNet%20Practice/Banking%20Project/Banking/HTML/pre.html";
            //        //Server.MapPath("~") + "HTML\\"+"pre.html";

            //    string pdfFileName = Request.PhysicalApplicationPath + "\\HTML\\" + "Test.pdf";

            //    FileStream fsHTMLDocument = new FileStream(htmlFileName, FileMode.Open, FileAccess.Read);

            //    StreamReader srHTMLDocument = new StreamReader(fsHTMLDocument);

            //    strHtml = srHTMLDocument.ReadToEnd();

            //    srHTMLDocument.Close();

            //    strHtml = strHtml.Replace("\r\n", "");

            //    strHtml = strHtml.Replace("\0", "");

            //    using (Stream fs = new FileStream(Request.PhysicalApplicationPath+ "HTML\\" + "Test.pdf", FileMode.Create))

            //    {

            //        using (Document doc = new Document(PageSize.A4))

            //        {

            //            PdfWriter writer = PdfWriter.GetInstance(doc, fs);

            //            doc.Open();

            //            using (StringReader sr = new StringReader(strHtml))

            //            {

            //                XMLWorkerHelper.GetInstance().ParseXHtml(writer, doc, sr);

            //            }

            //            doc.Close();

            //            Response.ContentType = "application/pdf";

            //            Response.AddHeader("content-disposition", "attachment;filename=sample.pdf");

            //            Response.Cache.SetCacheability(HttpCacheability.NoCache);

            //            Response.Write(doc);

            //        }

            //    }

            //}

            //catch (Exception ex)

            //{

            //    Response.Write(ex.Message);

            //}
        }
       
       
        public void convertTopdf()
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
            convertTopdf();
        }
    }
}