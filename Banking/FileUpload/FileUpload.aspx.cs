using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Banking
{
    public partial class FileUpload : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void UploadBtn_Click(object sender, EventArgs e)
        {

            if (FileUpLoad1.HasFile)

            {
                foreach (HttpPostedFile uploadedFile in FileUpLoad1.PostedFiles)
                {
                    string targetFolder = @"E:\myuploads\";
                    string targetPath = Path.Combine(targetFolder, FileUpLoad1.FileName);
                    uploadedFile.SaveAs(targetPath);

                    // FileUpLoad1.SaveAs(@"E:\myuploads\" + FileUpLoad1.FileName);
                    //Label1.Text += String.Format("{0}<br />", uploadedFile.FileName);
                   
                        ScriptManager.RegisterStartupScript(this, this.GetType(), "script", "alert('File Uploaded Successfully');", false);
                    
                }
            }
            else
            {
                ScriptManager.RegisterStartupScript(this, this.GetType(), "script", "alert('File Upload Failed');", false);
            }
        }
    }
}