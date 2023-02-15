<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FileUpload.aspx.cs" Inherits="Banking.FileUpload" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>File upload</title>
    <!-- CSS only -->

    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" integrity="sha512-nMNlpuaDPrqlEls3IX/Q56H36qvBASwb3ipuo3MxeWbsQB1881ox0cRv7UPTgBlriqoynt35KjEwgGUeUXIPnw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
  <%--<link rel="stylesheet" href="https://resources/demos/style.css"/>--%>
  
    <style type="text/css">
        .form-check-input {
            margin-left: 0;
            float: none;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container" style="background-color: cadetblue">
             <div class="widget">
            <div class="panel" style="background-color: cadetblue;padding: 20px;">
                <div class="panel-heading" style="text-align: center; padding: 0px">
                    <h1>File Upload</h1>
                    <hr />
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-6">
                           
                            <fieldset>
                                <legend>Please Select File Type</legend>
                                <%--<label class="form-check-label" for="filetype">Please Select File Type</label>
                                <br />--%>
                                <input type="radio" class="form-check-input" id="pdf" name="filetype" value="pdf" />
                                <label class="form-check-label" for="radio1">.pdf</label>
                                <input type="radio" class="form-check-input" id="jpeg" name="filetype" value="jpeg" />
                                <label class="form-check-label" for="radio2">.jpeg</label>
                                <input type="radio" class="form-check-input" id="jpg" name="filetype" value="jpg" />
                                <label class="form-check-label" for="radio2">.jpg</label>
                                <input type="radio" class="form-check-input" id="png" name="filetype" value="png" />
                                <label class="form-check-label">.png</label>
                                <input type="radio" class="form-check-input" id="doc" name="filetype" value="doc" />
                                <label class="form-check-label">.doc</label>
                                <input type="radio" class="form-check-input" id="docx" name="filetype" value="docx" />
                                <label class="form-check-label" for="radio2">.docx</label>
                                <input type="radio" class="form-check-input" id="xlsx" name="filetype" value="xlsx" />
                                <label class="form-check-label">.xlsx</label>
                                <input type="radio" class="form-check-input" id="xls" name="filetype" value="xls" />
                                <label class="form-check-label" for="radio2">.xls</label>
                                <input type="radio" class="form-check-input" id="all" name="filetype" value="pdf,jpeg,jpg,png,doc,docx,xlsx,xls" />
                                <label class="form-check-label" for="radio2">All</label>
                            </fieldset>

                        </div>
                        <div class="col-md-3">
                            <div class="form-group">

                                <label>Please Select File Size</label>
                                <select class="form-control select2 personalSelectClass" id="ddlsize" style="width: 50%">
                                    <option value="00">Select</option>
                                    <option value="1">1MB</option>
                                    <option value="2">2MB</option>
                                    <option value="3">3MB</option>
                                    <option value="4">4MB</option>
                                    <option value="5">5MB</option>
                                    <option value="10">10MB</option>
                                    <option value="20">20MB</option>
                                    <option value="50">50MB</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <fieldset>
                                <legend>Please Select File</legend>
                               <%-- <label class="form-check-label" for="filetype">Please select single/multiple</label>
                                <br />--%>
                                <input type="radio" class="form-check-input" id="single" name="many" value="single" />
                                <label class="form-check-label" for="radio1">Single</label>

                                <input type="radio" class="form-check-input" id="multiple" name="many" value="multiple" />
                                <label class="form-check-label" for="radio2">Multiple</label>
                            </fieldset>
                        </div>

                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-md-6">
                            <asp:FileUpload ID="FileUpLoad1" AllowMultiple="true" runat="server" CssClass="form-control file"  />
                        </div>
                        <div class="col-md-6">
                            <asp:Button ID="UploadBtn" Text="Upload File" OnClick="UploadBtn_Click" runat="server" Width="105px" CssClass="btn btn-success" />
                             <asp:Button ID="btndiscard" Text="Discard" runat="server" Width="105px" CssClass="btn btn-danger" />
                        </div>
                    </div>
                    <hr />
                    <div class="row" style="padding-left: 15px;">
                        <asp:Label ID="Label1" runat="server"></asp:Label>
                    </div>
                </div>
            </div>
                 </div>
        </div>
        <div class="container" id="preview" style="margin: 40px auto; height: 400px; width: 800px; overflow-x: auto; overflow-y: auto; border: 1px solid black; display: none">
            <h2 style="text-align: center">Preview</h2>
        </div>
        <div class="container" id="previewpdf" style="margin: 40px auto; height: 400px; width: 800px; overflow-x: auto; overflow-y: auto; border: 1px solid black; display: none">
            <h2 style="text-align: center">Preview</h2>
            <canvas id="pdfViewer"></canvas>
        </div>
    </form> <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
    <script type="text/javascript">
        $(function () {
            $("input").checkboxradio();
        });

       

    </script>
    <%--<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>--%>
    <script src="https://mozilla.github.io/pdf.js/build/pdf.js"></script>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js" integrity="sha512-2ImtlRlf2VVmiGZsjm9bEyhjGW4dU7B6TNwh/hx/iSByxNENtj3WVE6o/9Lj4TJeVXPi4bnOIMXFIJJAeufa0A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
   <script src="fileupload.js"></script>
    
  
    <script type="text/javascript">
        $(function () {
            // $("select").select2();
            let nofiles = $('input[name="many"]:checked').val();
           // alert(nofiles);
            var fileTypes = ['jpg', 'jpeg', 'png'];  //acceptable file types
           
           // if (nofiles == "single") {
                $("input:file").change(function (evt) {
                    var parentEl = $(this).parent();
                    var tgt = evt.target || window.event.srcElement,
                        files = tgt.files;

                    // FileReader support
                    if (FileReader && files && files.length) {
                        var fr = new FileReader();
                        var extension = files[0].name.split('.').pop().toLowerCase();
                        fr.onload = function (e) {
                            success = fileTypes.indexOf(extension) > -1;
                            if (success)
                                $("#preview").show();
                            $("#preview").append('<img src="' + fr.result + '" class="preview"/>');
                        }
                        fr.onloadend = function (e) {
                            console.debug("Load End");
                        }
                        fr.readAsDataURL(files[0]);
                    }
                });
          //  }



        })
    </script>
    <script type="text/javascript">
      
    </script>
     
</body>
</html>
