<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DropDown.aspx.cs" Inherits="Pavan.Aspx.DropDown" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="../Content/Scripts/jquery-3.6.0.min.js"></script>
    <script src="../Content/Scripts/bootstrap.min.js"></script>
    <link href="../Content/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
        <div class="container">
            <asp:DropDownList ID="ddl1" runat="server">
                <asp:ListItem Value="0"> abc </asp:ListItem>
                <asp:ListItem Value="1"> xyz </asp:ListItem>
            </asp:DropDownList>

            <asp:DropDownList ID="ddl2" runat="server">
                <asp:ListItem Value="0"> abc </asp:ListItem>
                <asp:ListItem Value="1"> xyz </asp:ListItem>
            </asp:DropDownList>
        </div>
         <script type="text/javascript">
             
             $(function () {
                 alert("hii");
            $("#ddl1").change(function () {
                if ($("#ddl1").val() == 1) {
                    $("#ddl2").prop("disabled", true);
                }
                else
                    $("#ddl2").prop("disabled", false);
            });
             });
             

         </script>
    </form>
</body>
</html>
