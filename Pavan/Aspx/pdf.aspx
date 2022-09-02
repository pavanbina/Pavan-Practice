<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="pdf.aspx.cs" Inherits="Banking.pdf" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="../Content/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
        <div class="container" style="padding:20px;">
            <asp:Button runat="server" ID="print" Text="Print" OnClick="print_Click"/>
            <asp:Panel ID="printpdf" runat="server">
            <pre style="margin:10px;padding:40px;white-space: pre-line;">
              <img src="../Content/Images/download.jpg" />
                <h1 style="text-align:center">Form-C1</h1>
(See Rule 15)
Confirmation Letter


1.	Sri/Smt.                                        S/o                             resident of                                        with ID
               Number                                 has participated in the Auction process for grant of privilege of
               Bar in                                          (Local body) held on                                    .

2.	 He/she has quoted a lease amount of Rs.                                        Which is accepted by the
                Auctioning authority and he/she shall sign in the Confirmation register.

3.	He/she shall pay the Lease amount on the day of auction/within twenty four hours
               From the date of this confirmation letter.

4.	This confirmation letter is only an intimation of acceptance of the bid amount quoted
               By the participant and does not confer any right for grant of Lease/Licence unless
               He/she fulfils the conditions laid down under the Andhra Pradesh Excise (Lease of
               right of Selling by Bar, Grant and Conditions of Licence) Rules, 2022.


                                                                                                                            Auctioning Authority


               (This is a system generated document and does not require any signature)

            </pre>
                </asp:Panel>
        </div>
    </form>
    <script src="../Content/Scripts/jquery-3.6.0.min.js"></script>
    <%--<script src="../Content/Scripts/pdfmake/pdfmake.min.js"></script>--%>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" integrity="sha512-qZvrmS2ekKPF2mSznTQsxqPgnpkI4DNTlrdUmTzrDgektczlKNRRhy5X5AAOnx5S09ydFYWWNSfcEqDTTHgtNA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" integrity="sha512-BNaRQnYJYiPSqHHDb58B0yaPfCu+Wgds8Gp/gU33kqBtgNS4tSPHuGibyoeqMV/TJlSKda6FXzoEyYGjTe+vXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script type="text/javascript">
//const { error } = require("console");

        $(function () {
           // CreatePDFfromHTML("Test");
        });
        //function CreatePDFfromHTML() {
        //    var doc = new jsPDF('landscape');
        //    var u = $(".container").toDataURL("image/png", 1.0);
        //    doc.addImage(u, 'JPEG', 20, 20, 250, 150);
        //    var base64pdf = btoa(doc.output());
        //    $.ajax({
        //        url: 'pdf.aspx',
        //        type: 'post',
        //        async: false,
        //        contentType: 'application/json; charset=utf-8',
        //        data: base64pdf,
        //        dataType: 'json'
        //    });
        //}
        function CreatePDFfromHTML(filename) {
            var HTML_Width = $(".container").width();
            var HTML_Height = $(".container").height();
            var top_left_margin = 0;
            var PDF_Width = HTML_Width + (top_left_margin * 2);
            var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
            var canvas_image_width = HTML_Width;
            var canvas_image_height = HTML_Height;

            var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

            html2canvas($(".container")[0], { useCORS: true }).then(function (canvas) {
                var imgData = canvas.toDataURL("image/jpeg", 1.0);
                var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
                /* var pdf = new jsPDF('l', 'in', 'a4');*/
                pdf.internal.scaleFactor = 30;
                pdf.addImage(imgData, 'JPEG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
                for (var i = 1; i <= totalPDFPages; i++) {
                    pdf.addPage(PDF_Width, PDF_Height);
                    pdf.addImage(imgData, 'JPEG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
                }
                pdf.save(filename);
                var base64pdf = btoa(pdf.output());
                $.ajax({
                    url: 'pdf.aspx',
                    type: 'post',
                    async: true,
                    contentType: 'application/json; charset=utf-8',
                    data: base64pdf,
                    dataType: 'json',
                    success: function (result) {
                        alert(result.d);
                    },
                    error: function (err) {
                        alert(error);
                    }
                });
                //var pdf = new jsPDF('l', 'in', 'a4');
                //pdf.internal.scaleFactor = 30;
                //pdf.addHTML($('#print-area')[0], function () {
                //    pdf.save(calendarName);
                //});
            });

        }
    </script>
</body>
</html>
