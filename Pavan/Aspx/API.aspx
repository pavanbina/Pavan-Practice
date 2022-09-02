<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="API.aspx.cs" Inherits="Pavan.Aspx.API" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container">
            <div class="row">
                <asp:TextBox ID="txtbenid" runat="server"></asp:TextBox>
                <asp:Button runat="server" Text="submit" ID="btnsubmit" OnClick="btnsubmit_Click" />
            </div>
            <div class="row">
                <asp:Label ID="lblresponse" runat="server"></asp:Label>
               
            </div>
        </div>
    </form>
</body>
</html>
