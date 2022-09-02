<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DropZone.aspx.cs" Inherits="Pavan.Aspx.DropZone" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="../Content/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/dropzone.min.css" integrity="sha512-jU/7UFiaW5UBGODEopEqnbIAHOI8fO6T99m7Tsmqs2gkdujByJfkCbbfPSN4Wlqlb9TGnsuC0YgUgWkRBK7B9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/dropzone.min.js" integrity="sha512-U2WE1ktpMTuRBPoCFDzomoIorbOyUv0sP8B+INA3EzNAhehbzED1rOJg6bCqPf/Tuposxb5ja/MAUnC8THSbLQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
    <form id="form1" runat="server">
   <%--     <div id="dZUpload" class="dropzone">
         <div class="dz-default dz-message"></div>
</div>--%>
        <div>
             <div class="col-md-4">
        <label class="form-label">File Upload  </label>
        <div class="dropzone" id="dropzoneForm">
        <div class="fallback">
      
        </div>
    </div>
        <label id="lbldropzonecount" style="display: none">0</label>
    &nbsp;  &nbsp;  &nbsp;  &nbsp;
        <span id="msgattachment" style="color: Red">Note : File Type allowed: .jpeg Max Files:1, Max size: 10MB</span>
        </div>
            </div>
    </form>
    <script type="text/javascript">
        
        $(function () {
            AssignDropzone();
                  function AssignDropzone() {
    Dropzone.options.dropzoneForm = {
        //  acceptedFiles: "application/pdf",
        maxFilesize: 10, // MB
        maxFiles: 2,
        url: "BulkSandIndentbyJPFileUpload.ashx",
        init: function () {
            this.on("maxfilesexceeded", function (data) {
                var _this = this;
                alert("Please upload only one file.");
                _this.removeFile(data);
                // var res = eval('(' + data.xhr.responseText + ')');
            });
            this.on("sending", function (file, xhr, formData, data) {
                // debugger;
                // alert(file.size);// here we getting in bytes
                var comparesize = ((file.size) / 1000000);
                var d = new Date();
                var month = d.getMonth() + 1;
                var day = d.getDate();
                var outputforamtdate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + d.getFullYear();
                //raising validation for file type
                var x = file.name;
                var ar_name = x.split('.');
                if (ar_name != null) {
                    if (ar_name.length == "2") {
                        if ((ar_name[1].toLowerCase() == "jpg") ||
                        (ar_name[1].toLowerCase() == "jpeg")
                        ) {
                            alert("You are uploading " + file.name + " ,size: " + comparesize.toFixed(2) + " MB, Date: " + outputforamtdate);
                            if (Number(comparesize) > 10) {
                                alert("Max Filesize exceeded");
                                this.removeFile(file);
                            }
                            // this.removeFile(file);
                            formData.append("filesize", file.size);
                        }
                        else {
                            alert("Please upload only  .jpeg/.jpg");
                            // fupphofile.focus();
                            this.removeFile(file);
                            return false;
                        }
                    }
                    else {
                        alert("Invalid document for uploading");
                        this.removeFile(file);
                        //fupphofile.focus();
                        return false;
                    }
                }
            });
            this.on("addedfile", function (file) {
                if (file.type == 'image/jpeg') { //check if its jpeg or not
                    // Create the remove button
                    var removeButton = Dropzone.createElement("Remove file");
                    var intialfilecount = Number($('#lbldropzonecount').val());
                    $('#lbldropzonecount').val(Number(intialfilecount) + 1);
                    // Capture the Dropzone instance as closure.
                    var _this = this;
                    // Listen to the click event
                    removeButton.addEventListener("click", function (e) {
                        debugger;
                        var filenamestr = file.name; var serverresponse = '';
                        var acceptancesatte = file.accepted;
                        if (acceptancesatte == false) {//file which is not added  at server path
                            _this.removeFile(file);
                        }
                        else {
                            serverresponse = file.xhr.response;
                            var serverresponseText = file.xhr.responseText;
                            // console.log('serverresponse ' + serverresponse + "," + "serverresponseText" + serverresponseText);
                        }
                        // Make sure the button click doesn't submit the form:
                        e.preventDefault();
                        e.stopPropagation();
                        // Remove the file preview.
                        // _this.removeFile(file);
                        // If you want to the delete the file on the server as well,
                        // you can do the AJAX request here.
                        //ajax start
                        $.ajax({
                            type: "POST",
                            url: "BulkSandIndentWisebyJP.aspx/DeletePhotofiles",
                            data: JSON.stringify({ filename: serverresponse }),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            async: false,
                            success: function (data) {
                                //  alert('success' + data.d.length);
                                // debugger;
                                var catdata = JSON.stringify(data);
                                // console.log('catdata is ' + catdata + "    ,   " + data.d);
                                if (data.d == true) {
                                    _this.removeFile(file);
                                    var intialfilecount = Number($('#lbldropzonecount').val());
                                    $('#lbldropzonecount').val(Number(intialfilecount) - 1);
                                    //var _ref;
                                    //return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
                                }
                                else {
                                    // $('#divcasedt').hide();
                                }
                            },
                            failure: function (response) {
                                alert(response.d);
                            },
                            error: function (xhr, errorType, exception) {
                                var responseText = '';
                                //debugger;
                                try {
                                    responseText = jQuery.parseJSON(xhr.responseText);
                                    alert('error message' + responseText.Message);
                                } catch (e) {
                                    responseText = xhr.responseText;
                                    alert(responseText);
                                }
                            }
                        });
                        //ajax end
                    });
                    // Add the button to the file preview element.
                    file.previewElement.appendChild(removeButton);
                } //if end
                else {
                    alert('Please upload only jpeg files');
                    var _this = this;
                    _this.removeFile(file);
                    return;
                }
            });
        }
    };
}

        })



        //$(document).ready(function () {

        //    Dropzone.autoDiscover = false;
        //    //Simple Dropzonejs
        //    $("#dZUpload").dropzone({
        //        url: "hn_SimpeFileUploader.ashx",
        //        addRemoveLinks: true,
        //        success: function (file, response) {
        //            var imgName = response;
        //            file.previewElement.classList.add("dz-success");
        //            console.log("Successfully uploaded :"+ imgName);
        //        },
        //        error: function (file, response) {
        //            file.previewElement.classList.add("dz-error");
        //        }
        //    });
        //});




        
    </script>
</body>
</html>


<%-- public void ProcessRequest(HttpContext context)
        {
            try
            {
                DataTable dtfiles = (DataTable)context.Session["SandUploads"];
                context.Response.ContentType = "text/plain";
                // string item_name=dtfiles
                string dirFullPath = ConfigurationManager.AppSettings["HCLDocSavePath"] + "\\BulkSandTollFee\\";
                string dirurlpath = ConfigurationManager.AppSettings["HCLDocuurlpath"] + "/BulkSandTollFee/";
                var Saved_filename = "";
                // string dirFullPath = HttpContext.Current.Server.MapPath("~/MediaUploader/");
                string[] files;
                int numFiles;
                if (Directory.Exists(dirFullPath))
                {
                }
                else
                {
                    Directory.CreateDirectory(dirFullPath);
                }
                files = System.IO.Directory.GetFiles(dirFullPath);
                numFiles = files.Length;
                numFiles = numFiles + 1;
                string str_image = "";
                foreach (string s in context.Request.Files)
                {
                    HttpPostedFile file = context.Request.Files[s];
                    string fileName = file.FileName;
                  //  Saved_filename = Path.GetFileNameWithoutExtension(fileName) + "_";
                    string fileExtension = file.ContentType;
                    if (!string.IsNullOrEmpty(fileName))
                    {
                        fileExtension = Path.GetExtension(fileName);
                        str_image = "TollCharges_" + numFiles.ToString() + fileExtension;
                        string pathToSave = dirFullPath + str_image;
                        string urlpath = dirurlpath + str_image;
                        //file.SaveAs(pathToSave);
                        if (File.Exists(pathToSave))
                        {
                            //files = System.IO.Directory.GetFiles(dirFullPath);
                            //numFiles = files.Length;
                            //numFiles = numFiles + 1;
                            //str_image = Saved_filename + numFiles.ToString() + fileExtension;
                            //pathToSave = dirFullPath + str_image;
                            try
                            {
                                file.SaveAs(pathToSave);
                                DataRow dr = dtfiles.NewRow();
                                dr["File_Name"] = str_image;
                                dr["File_Path"] = urlpath;
                                dr["ServerFileName"] = str_image;
                                dtfiles.Rows.Add(dr);
                                context.Session["SandUploads"] = dtfiles;
                            }
                            catch (Exception ex)
                            {
                            }
                        }
                        else
                        {
                            try
                            {
                                file.SaveAs(pathToSave);
                                DataRow dr = dtfiles.NewRow();
                                dr["File_Name"] = str_image;
                                dr["File_Path"] = urlpath;
                                dr["ServerFileName"] = str_image;
                                dtfiles.Rows.Add(dr);
                                context.Session["SandUploads"] = dtfiles;
                            }
                            catch (Exception ex)
                            {
                            }
                        }
                    }
                }
                context.Response.Write(str_image);
            }
            catch (IOException ioex)
            {
                throw ioex;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool IsReusable
        {
            get
            {
                return false;
            }
        }






         [WebMethod(EnableSession = true)]
        public static bool DeletePhotofiles(string filename)
        {
            string serverfilename = filename.Trim();
            bool result = false;
            DataTable dtfilesnames = new DataTable();
            dtfilesnames = (DataTable)HttpContext.Current.Session["SandUploads"];
            if (dtfilesnames.Rows.Count > 0)
            {
                foreach (DataRow dr in dtfilesnames.Rows)
                {
                    if (serverfilename.ToUpper() == dr["ServerFileName"].ToString().ToUpper())
                    {
                        try
                        {
                            dtfilesnames.Rows.Remove(dr);
                            result = true;
                            if (HttpContext.Current.Session["PortalUser"] != null)
                            {
                                //activity
                                //Vendor objdal = new Vendor();
                                //objdal.Loginid = HttpContext.Current.Session["LoginUserName"].ToString();
                                //objdal.Activity = "Delete uploaded document vendor Payment " + serverfilename.ToUpper();
                                //objdal.IPAddress = CommonUtility.getclientIP();
                                //objdal.PageUrl = HttpContext.Current.Request.Url.AbsoluteUri;
                                //objdal.PageName = "Vendor Payment";
                                //objdal.SaveActivityLog();
                            }
                            break;
                        }
                        catch (Exception ex)
                        {
                        }
                    }
                }
                HttpContext.Current.Session["SandUploads"] = dtfilesnames;
            }
            return result;
        }--%>