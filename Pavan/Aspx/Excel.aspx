<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Excel.aspx.cs" Inherits="Banking.Excel" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <%--<link href="Content/Bootstrap/bootstrap.css" rel="stylesheet" />--%>
    <link href="../Content/bootstrap.min.css" rel="stylesheet" />
    <link href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css" rel="stylesheet"/>
    <style type="text/css">
         th, td {
  border-style: solid;
}
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container"> 
          <input type="file" id="excelfile" />  
   <input type="button" id="viewfile" value="Export To Table" onclick="ExportToTable()" />  
      <br />  
      <br />  
   <table id="exceltable" >  
</table> 
            <div id="result" style="border: 1px solid gray;margin: 45px;height: auto;width: auto;float:left; padding: 1%;display:none;">
</div>
        </div>
    </form>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <%--<script type="text/javascript" src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js" defer="defer" ></script>--%>
    <%--<script src="jquery-1.10.2.min.js" type="text/javascript"></script>--%>  
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.5/xlsx.full.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.7.7/xlsx.core.min.js"></script>  
<%--<script src="https://cdnjs.cloudflare.com/ajax/libs/xls/0.7.4-a/xls.core.min.js"></script>--%> 
<%--<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.5/jszip.js"></script>--%>
    <%--<script src="https://cdnjs.cloudflare.com/ajax/libs/table-to-json/1.0.0/jquery.tabletojson.min.js" integrity="sha512-kq3madMG50UJqYNMbXKO3loD85v8Mtv6kFqj7U9MMpLXHGNO87v0I26anynXAuERIM08MHNof1SDaasfw9hXjg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>--%>
    <%--<script src="Scripts/TableToJson.js"></script>--%>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/table-to-json/1.0.0/jquery.tabletojson.min.js" integrity="sha512-kq3madMG50UJqYNMbXKO3loD85v8Mtv6kFqj7U9MMpLXHGNO87v0I26anynXAuERIM08MHNof1SDaasfw9hXjg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script type="text/javascript">
        jQuery(function () {
            //jQuery("#exceltable").DataTable();
            $("#excelfile").change(function () {
                var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xlsx|.xls)$/;
                /*Checks whether the file is a valid excel file*/
                if (regex.test($("#excelfile").val().toLowerCase())) {
                    var xlsxflag = false; /*Flag for checking whether excel is .xls format or .xlsx format*/
                    if ($("#excelfile").val().toLowerCase().indexOf(".xlsx") > 0) {
                        xlsxflag = true;
                    }
                    /*Checks whether the browser supports HTML5*/
                    if (typeof (FileReader) != "undefined") {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var data = e.target.result;
                            /*Converts the excel data in to object*/
                            if (xlsxflag) {
                                var workbook = XLSX.read(data, { type: 'binary' });
                            }
                            else {
                                var workbook = XLS.read(data, { type: 'binary' });
                            }
                            /*Gets all the sheetnames of excel in to a variable*/
                            var sheet_name_list = workbook.SheetNames;

                            var cnt = 0; /*This is used for restricting the script to consider only first sheet of excel*/
                            sheet_name_list.forEach(function (y) { /*Iterate through all sheets*/
                                /*Convert the cell value to Json*/
                                if (xlsxflag) {
                                    var exceljson = XLSX.utils.sheet_to_json(workbook.Sheets[y]);
                                }
                                else {
                                    var exceljson = XLS.utils.sheet_to_row_object_array(workbook.Sheets[y]);
                                }
                                if (exceljson.length > 0 && cnt == 0) {
                                    BindTable(exceljson, '#exceltable');
                                    cnt++;
                                }
                                $.each(exceljson, function (key, value) {
                                    var res = exceljson[key]["Indent Number"];
                                    if (res === undefined) {
                                        //var t = 1;
                                        //var s = key + t;
                                        //alert("Excel of column Indent Number having  row" + s + "is" + exceljson[key]["Indent Number"]);
                                    }
                                    else {

                                    }

                                })

                            });
                            $('#exceltable').show();
                            //makeJsonFromTable('exceltable');
                            //console.log( JSON.stringify(makeJsonFromTable('exceltable')));
                            $('#result').append(JSON.stringify(makeJsonFromTable('exceltable')));
                            $('#result').show();
                            var re = JSON.stringify(makeJsonFromTable('exceltable'));
                            alert(re);

                            console.log(re);
                        }
                        if (xlsxflag) {/*If excel file is .xlsx extension than creates a Array Buffer from excel*/
                            reader.readAsArrayBuffer($("#excelfile")[0].files[0]);
                        }
                        else {
                            reader.readAsBinaryString($("#excelfile")[0].files[0]);
                        }
                    }
                    else {
                        alert("Sorry! Your browser does not support HTML5!");
                    }
                }
                else {
                    alert("Please upload a valid Excel file!");
                }
            });
        })
       
        function ExportToTable() {
         
        }
        function BindTable(jsondata, exceltable) {/*Function used to convert the JSON array to Html Table*/
            var columns = BindTableHeader(jsondata, exceltable); /*Gets all the column headings of Excel*/
            for (var i = 0; i < jsondata.length; i++) {
                var row$ = $('<tr/>');
                for (var colIndex = 0; colIndex < columns.length; colIndex++) {
                    var cellValue = jsondata[i][columns[colIndex]];
                    if (cellValue == null)
                        cellValue = "";
                    row$.append($('<td/>').html(cellValue));
                }
                $(exceltable).append(row$);
            }
        }
        function BindTableHeader(jsondata, exceltable) {/*Function used to get all column names from JSON and bind the html table header*/
            var columnSet = [];
            var headerTr$ = $('<thead/>');

            for (var i = 0; i < jsondata.length; i++) {
                var rowHash = jsondata[i];
                for (var key in rowHash) {
                    if (rowHash.hasOwnProperty(key)) {
                        if ($.inArray(key, columnSet) == -1) {/*Adding each unique column names to a variable array*/
                            columnSet.push(key);
                            headerTr$.append($('<th/>').html(key));
                        }
                    }
                }
            }
            $(exceltable).append(headerTr$);
            return columnSet;
        }
    </script>
</body>
</html>
