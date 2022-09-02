
var bindtasble = $('#tbl');
$remove = $('#remove');
selections = [];


$(function () {
    $(".select2").select2();
    //  alert($("td:eq(0)").html());
    GetVendorWisePriceDetails();
    GetWeekMaster();
})



function GetVendorWisePriceDetails() {


    var tablecolumns_array = [
        [
            //WeekId	WeekName	COA	COA_DueInDays	DSA	DSA_DueInDays	NSA	NSA_DueInDays	OS	OS_DueInDays	PCS	PCS_DueInDays

            //{ title: 'Week', field: 'WeekId', align: 'center', valign: 'middle', sortable: true },
            { title: 'Week<br/>Name', field: 'WeekName', align: 'left', valign: 'middle', sortable: true, visible: true },
            { title: 'COA', field: 'COA', align: 'left', valign: 'middle', sortable: true, },
            { title: 'COA<br/>due', field: 'COA_DueInDays', align: 'left', valign: 'middle', sortable: true, },
            { title: 'DSA', field: 'DSA', align: 'left', valign: 'middle', sortable: true, },
            { title: 'DSA<br/> due ', field: 'DSA_DueInDays', align: 'left', valign: 'middle', sortable: true, visible: true },
            { title: 'NSA', field: 'NSA', align: 'left', valign: 'middle', sortable: true, visible: true },
            { title: 'NSA<br/>due', field: 'NSA_DueInDays', align: 'left', valign: 'middle', visible: true, },
            { title: 'OS', field: 'OS', align: 'left', valign: 'middle', sortable: true, visible: true },
            { title: 'OS<br/>due', field: 'OS_DueInDays', align: 'left', valign: 'middle', sortable: true, visible: true },
            { title: 'PCS', field: 'PCS', align: 'left', valign: 'middle', sortable: true, visible: true },
            { title: 'PCS<br/>due', field: 'PCS_DueInDays', align: 'left', valign: 'middle', sortable: true, visible: true },
        ]

    ];

    initTable(bindtasble, "Assignment Due Dates", "Assignment Due Dates", tablecolumns_array);

    GetVendorWisePriceDetails_FromDB();

}

function GetVendorWisePriceDetails_FromDB() {//fun start
    var CR_report = [];
    //debugger;
    var Result = Ajaxfunctioncall_WithOutParams("GetAssignmentReportData", "Assignment");


    if (Result != '') {

        if (Result.length > 0) {
            var result_dt = JSON.parse(Result);
            CR_report = result_dt;
            bindtasble.bootstrapTable('load', CR_report);

             
        }
        else {
            bindtasble.bootstrapTable('load', CR_report);
        }

    }
    else {
        bindtasble.bootstrapTable('load', CR_report);
    }




}
//----------------------------------------------------------------------------------


function initTable(bindtable, file_name, worksheet_name, column_array) {

    bindtable.bootstrapTable({

        exportOptions: {
            escape: false,
            fileName: file_name
            , worksheetName: worksheet_name
        },
        // exportDataType:$(this).val(),
        // exportTypes:['excel','pdf'],
        toolbar: "#toolbar",
        search: true,
        showRefresh: true,
        showToggle: true,
        showColumns: true,
        showExport: true,
        //        detailView: true,
        //        detailFormatter: "detailFormatter",
        minimumCountColumns: 2,
        showPaginationSwitch: true,
        pagination: true,
        idField: "id",
        pageSize: 6,
        pageList: "[5,10, 25, 50, 100, ALL]",
        showFooter: false,
        height: getHeight(),
        columns: column_array

    });



    // sometimes footer render error.
    setTimeout(function () {
        bindtable.bootstrapTable('resetView');
    }, 200);
    bindtable.on('check.bs.table uncheck.bs.table ' +
        'check-all.bs.table uncheck-all.bs.table', function () {
            $remove.prop('disabled', !bindtable.bootstrapTable('getSelections').length);

            //debugger;
            // save your data, here just save the current page
            selections = getIdSelections();
            // push or splice the selections if you want to save all data selections
        });
    bindtable.on('expand-row.bs.table', function (e, index, row, $detail) {
        //if (index % 2 == 1) {
        //    $detail.html('Loading from ajax request...');
        //    $.get('LICENSE', function (res) {
        //        $detail.html(res.replace(/\n/g, '<br>'));
        //    });
        //}
    });
    bindtable.on('all.bs.table', function (e, name, args) {
        console.log(name, args);
    });
    $remove.click(function () {
        //   debugger;
        BootstrapDialog.confirm('Are you sure you want to Delete this selected rows?', function (result) {
            if (result) {

                var ids = getIdSelections();
                for (var i = 0; i < ids.length; i++) {
                    var Deletestatus = DeleteEmployees(JSON.stringify(ids[i]));
                    if (Number(Deletestatus) > 0) {
                        //alert('success');
                        bindtable.bootstrapTable('remove', {
                            field: 'SNO',
                            values: ids
                        });
                    }
                    bindtable.bootstrapTable('load', EmployeeData());
                    bindtable.prop('disabled', true);
                }

            }
        });



    });
    $(window).resize(function () {
        bindtable.bootstrapTable('resetView', {
            height: getHeight()
        });
    });





}

function getHeight() {
    //return $(window).height() - $('h1').outerHeight(true);
    return 610;
    //for default table height
}

function getIdSelections() {
    return $.map($table.bootstrapTable('getSelections'), function (row) {
        return row.SNO
    });
}



function detailFormatter(index, row) {
    //alert('You Expand, row: ' + JSON.stringify(row));
    var resultobj = {};

    resultobj.ItemType_Id = row.ItemType_Id;
    var tblcontent = BindItemModal(resultobj);

    return tblcontent;
}


//for table binding functions end
/////////////////////////////////////////////////////////////////////////////////////////////////////**************************************\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\








function Ajaxfunctioncall_WithOutParams(pagename, methodname) {
    var retresponse = '';
    var urlmethod = "/" + methodname; //  '/SaveValues'; 
    //ajax fun start
    $.ajax({
        type: "POST",
        url: pagename + urlmethod, // '/SaveEvent',
        // data: JSON.stringify({ inputparamJSON: inputobj }),
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () {
            //  Checklogoutsession();
        },
        success: function (data) {
            //    debugger;
            var msg = data.d;
            // alert('Your Request Successfully'); 
            retresponse = data;
        },
        error: function (xhr, errorType, exception) {
            var responseText;
            try {
                responseText = jQuery.parseJSON(xhr.responseText);
                alert('error message' + responseText.Message);
            } catch (e) {
                responseText = xhr.responseText;
                alert(responseText);
            }
        }
    });

    //ajax fun end


    return retresponse;
}


function GetWeekMaster() {//fun start
    var Result = Ajaxfunctioncall_WithOutParams("GetWeekMstr", "Assignment");


    var yourValue = '00'; // 'Default';
    $("#ddlweek").empty();
    $("<option value='00' selected>Choose</option>").appendTo("#ddlweek");
    if (Result != '[]') {
        //alert("length=" + Result.d.length + Result.d.ItemType_Name);

        var roomdata = JSON.parse(Result);

        $.each(roomdata, function (key, value) {
            // debugger;
            $("#ddlweek").append($("<option></option>").val(value.WeekId).html(value.WeekName));
        });
        $('#ddlweek option[value="' + yourValue + '"]').attr('selected', 'selected');
        //        $("<option value='999' selected>Others</option>").appendTo("#ddlcurttype");
        $("#ddlweek").select2("val", yourValue);
    }
    else {
        $("#ddlweek").select2("val", "00");


    }

} //fun end