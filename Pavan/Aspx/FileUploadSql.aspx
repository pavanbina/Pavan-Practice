<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FileUploadSql.aspx.cs" Inherits="Pavan.Aspx.FileUploadSql" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container">
            <asp:FileUpload ID="FileUpload1" runat="server" onchange="checkextension()" />
            <asp:Button ID="btnUpload" runat="server" Text="Upload" OnClick="Upload" />
            <hr />
            <asp:GridView ID="GridView1" runat="server" HeaderStyle-BackColor="#3AC0F2" HeaderStyle-ForeColor="White"
                RowStyle-BackColor="#A1DCF2" AlternatingRowStyle-BackColor="White" AlternatingRowStyle-ForeColor="#000"
                AutoGenerateColumns="false">
                <Columns>
                    <asp:BoundField DataField="Name" HeaderText="File Name" />
                    <asp:TemplateField ItemStyle-HorizontalAlign="Center">
                        <ItemTemplate>
                            <asp:LinkButton ID="lnkDownload" runat="server" Text="Download" OnClick="DownloadFile"
                                CommandArgument='<%# Eval("Id") %>'></asp:LinkButton>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
        </div>
        <script src="../Content/Scripts/jquery-3.6.0.js"></script>
        <script type="text/javascript">
            function checkextension() {
                var file = document.querySelector("#FileUpload1");
                if (/\.(pdf)$/i.test(file.files[0].name) === false) {
                    alert("Only Pdf Allowed!");
                    $("#FileUpload1").val("");
                    $("#FileUpload1").focus();
                    return false;
                }
            }
            
            $(function () {
              
                $("#btnUpload").click(function () {
                    var fup = $("#FileUpload1");
                    if (fup.val() == "" || fup.val() == null) {
                        alert("Please Select File Upload");
                        fup.focus();
                        return false;
                    }
                    else {
                        checkextension();
                    }
                    //else {
                    //    var ext = fup.val().split('.').pop().toLowerCase();
                    //    if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
                    //        alert('please select jpg');
                    //        fup.focus();
                    //        return false;
                    //    }
                    //}

                })
     

            })

        </script>
    </form>
</body>
</html>
