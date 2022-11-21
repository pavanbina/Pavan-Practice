<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="buttonclick.aspx.cs" Inherits="Pavan.Aspx.buttonclick" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />

</head>
<body>
    <form id="form1" runat="server">
        <div class="container">
            <asp:TextBox ID="serial_number" runat="server"></asp:TextBox>
            <asp:Button CssClass="btn btn-success" ID="s_serial_number1" runat="server" Text="Submit" OnClick="Btn_SerialNumber" />
            <asp:Label ID="lbl1" runat="server"></asp:Label>



        </div>
    </form>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>

    <script>

        $(document).ready(function () {
            $('#serial_number').change(function () {
                if ($(this).val() == "") {
                    //do nothing
                }
                else {
                    alert("you have now exited the input field");// will be used to check the values inside the input fiel
                    $('#s_serial_number1').trigger('click');

                }
            });
        });

    </script>
</body>
</html>
