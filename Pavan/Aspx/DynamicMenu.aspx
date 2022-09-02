<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DynamicMenu.aspx.cs" Inherits="Pavan.Views.Aspx.DynamicMenu" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
   <form id="form1" runat="server">
    <div>
        <ul id="menu"></ul>
    </div>
</form>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.9/jquery-ui.js"></script>
<link rel="stylesheet" type="text/css" href="https://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.9/themes/blitzer/jquery-ui.css" />
<script type="text/javascript">
    $(function () {
        $('ul').menu();
        $.ajax({
            url: 'DynamicMenu.aspx/GetParentMenu',
            method: 'GET',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                $.each(data.d, function () {
                    var li = $('<li value="' + this.Id + '">' + this.MenuText + '</li>');
                    if (!this.Active) {
                        li.addClass('ui-state-disabled');
                    }
                    li.appendTo($('#menu'));
                });
            }
        });
 
        $('body').on('mouseenter', 'ul li', function () {
            var menu = $(this);
            $.ajax({
                url: 'DynamicMenu.aspx/GetChildMenu',
                method: 'GET',
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                data: { parent: $(this).attr('value') },
                success: function (data) {
                    var ul = $('<ul></ul>').empty();
                    $.each(data.d, function () {
                        var li = $('<li value="' + this.Id + '">' + this.MenuText + '</li>');
                        if (!this.Active) {
                            li.addClass('ui-state-disabled');
                        }
                        li.appendTo($(ul));
                    });
                    $(ul).appendTo($(menu));
                }
            });
        });
 
        $('body').on('mouseleave', 'ul li', function () {
            $(this).find('ul').remove();
        });
    });
</script>
</body>
</html>
