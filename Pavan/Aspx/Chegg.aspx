<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Chegg.aspx.cs" Inherits="Pavan.Aspx.Chegg" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Label runat="server">Enter Number of Hours</asp:Label>
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            <asp:CheckBox ID="CheckBox1" Text="Weekend" runat="server" />
            <br />
            <asp:Button ID="Button1" Text="Calculate" runat="server" OnClick="Button1_Click" />
            <br />
            <asp:Label ID="Label1" runat="server"></asp:Label>
        </div>
    </form>
</body>
</html>
