

var bindtasble = $('#table'),
    $remove = $('#remove'),
    selections = [];

$(function () {
    $(".select2").select2();
    GetDepartmentMSTR();
    var resultobj = {};
    var DepID = "";

    resultobj.DepID = DepID;


    GetChangeRequests(resultobj);



    $("#ddldeprt").change(function () {


        var ddldeprt = $("#ddldeprt");
        var resultobj = {};

        var DepID = "";



        if ($.trim(ddldeprt.val()) == "00") {

        }
        else {
            DepID = $("#ddldeprt").val();
        }

        resultobj.DepID = DepID;


        GetChangeRequests(resultobj);
    });


});




function GetChangeRequests(resultobj) {


    var tablecolumns_array = [
        [

            { title: 'S.No.', field: 'SNo', align: 'center', valign: 'middle', sortable: true, visible: true },
            //                                      {title: 'Change Request', field: 'ChangeRequestID', align: 'center', valign: 'middle', sortable: true, visible: true, events: operateEvents, formatter: Linkformater_ChangeRequest },
            { title: 'Employee ID', field: 'EmpID', align: 'left', valign: 'middle', sortable: true, visible: true },
            { title: 'Employee<br/> Name ', field: 'EmpName', align: 'left', valign: 'middle', sortable: true, visible: true },
            { title: 'DDOCode ', field: 'SalaryDDOCode', align: 'left', valign: 'middle', sortable: true, visible: true },

            { title: 'Position Name  ', field: 'PresentPostCategory', align: 'left', valign: 'middle', sortable: true, visible: true },

            //                                     {title: 'Total Man <br/> Days', field: 'Total_Mandays', align: 'center', valign: 'middle', sortable: true, visible: true, events: operateEvents, formatter: Linkformater_mandaysdrill },
            { title: ' EMP Present<br/> Status  ', field: 'EmpPresentWorkStatus', align: 'left', valign: 'middle', sortable: true, visible: true },

            { title: ' Action ', field: '', align: 'center', valign: 'middle', sortable: true, visible: true, events: operateEvents, formatter: Linkformater_ViewEmp },
            { title: 'ESR Data<br/> Entry Status', field: '', align: 'left', valign: 'middle', sortable: true, visible: true },
            { title: 'ESR Copy', field: '', align: 'left', valign: 'middle', sortable: true, visible: true },
            { title: 'DDO Biometric<br/> Confirmation', field: '', align: 'left', valign: 'middle', sortable: true, visible: true }



        ]

    ];

    initTable(bindtasble, "Employees Report", "Employees Report", tablecolumns_array);
    GetChangeRequests_FromDB(resultobj);

}

function GetChangeRequests_FromDB(resultobj) {//fun start
    var CR_report = [];


    var Result = Ajaxfunctioncall("ViewUnderEmployees.aspx", "GetUnderEmployeeDetails_Admin", "dailyobjjson", resultobj);

    if (Result != '') {

        if (Result.d.length > 0) {

            var result_dt = JSON.parse(Result.d);
            CR_report = result_dt;



        }



    }




    bindtasble.bootstrapTable('load', CR_report);







} //fun end

/////////////////////////------------------------------******************************************--------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//for table binding functions start


function initTable(bindtable, file_name, worksheet_name, column_array) {

    bindtable.bootstrapTable({

        exportOptions: {
            escape: false,
            fileName: file_name
            , worksheetName: worksheet_name
        },
        // exportDataType:$(this).val(),
        //  exportTypes:['excel','pdf'],
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


function operateFormatter(value, row, index) {

    var statusid = (row.STATUS_ID);

    return [
        //'<a class="like" href="javascript:void(0)" title="Like">',
        //'<i class="glyphicon glyphicon-heart"></i>',
        //'</a>  ',
        //'<a class="save" href="javascript:void(0)" title="save">',
        //'<i class="glyphicon glyphicon-saved"></i>',
        //'</a>  ',

        '<a class="Edit" href="javascript:void(0)" title="Edit">',
        '<i class="glyphicon glyphicon-edit"></i>',
        '</a>  '

        ,
        '<a class="remove" href="javascript:void(0)" title="Remove">',
        '<i class="glyphicon glyphicon-remove"></i>',
        '</a>'
    ].join('');

}







window.operateEvents = {
    'click .like': function (e, value, row, index) {
        alert('You click like action, row: ' + JSON.stringify(row));
    },

    'click .reqhistory': function (e, value, row, index) {

        //        var CLUSTERID = row.Cluster_ID; var VILLAGEID = row.Village_ID; var EMPLOYEEID = row.Emp_ID;
        //        var FROMDATE = row.From_date; var TODATE = row.To_date; var FLAG = "T";

        //        var encrstring = "CLUSTERID=" + CLUSTERID + "&VILLAGEID=" + VILLAGEID + "&EMPLOYEEID=" + EMPLOYEEID + "&FROMDATE=" + FROMDATE + "&TODATE=" + TODATE + "&FLAG=" + FLAG;
        //        var encripted_Params = GetEncripted_String(encrstring);
        //        var pageurl = "EmployeeWiseAttendanceDrillReport.aspx?" + encripted_Params;

        //        window.open(pageurl, '_self');



        var encrstring = "CRREquestid=" + $.trim(row.ChangeRequestID);
        var encripted_Params = GetEncripted_String(encrstring);
        //        var pageurl = "EmployeeWiseAttendanceDrillReport.aspx?" + encripted_Params;
        var pageurl = "ESRCRAddress_Admin.aspx?" + encripted_Params
        $("#iframepopup").attr("src", pageurl);


        $("#spevntnamereq").text(row.ChangeRequestType);

        $("#mymodalreqhistory").modal("show");

    },

    'click .viewempesr': function (e, value, row, index) {
        var encrstring = "PrEmpid=" + $.trim(row.EmpID);
        var encripted_Params = GetEncripted_String(encrstring);
        //very imp
        $.session.set('search_EMPID', row.EmpID);
        $.session.set('search_EMPName', row.EmpName);

        //  alert($.session.get('search_EMPID'));
        // alert($.session.get('search_EMPName'));
        var pageurl = "../ESRAdmin/srevents.aspx?" + encripted_Params;

        window.open(pageurl, '_self');


    }

};

function Linkformater_attendance(value, row, index) {

    var chekstatus = row.Attendance_Status;


    if ($.trim(chekstatus) == "A") {
        return { checked: false }
        // return '<input type="checkbox"  class="btn btn-success setattendance"/> ';
    }
    else {
        return { checked: true }
        // return '<input type="checkbox" checked="true" class="btn btn-success setattendance"/> ';
    }
}




function Linkformater_statusview(value, row, index) {
    //<i class="glyphicon glyphicon-eye-open"></i>

    return '<a class="statusview" href="javascript:void(0)" title="Status" name="2">' + value + ' </a>  ';

}

function Linkformater_ChangeRequest(value, row, index) {


    return '<a class="btn btn-warning reqhistory" href="javascript:void(0)" title="Status" name="2"> Action</a>  ';

}

function Linkformater_ViewEmp(value, row, index) {


    return '<a class="btn btn-warning viewempesr" href="javascript:void(0)" title="Action" name="2"> Action</a>  ';

}


//Linkformater_presentdays

//for table binding functions end
/////////////////////////////////////////////////////////////////////////////////////////////////////**************************************\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\







function GetDepartmentMSTR() {//fun start
    var Result = Ajaxfunctioncall_WithOutParams("../ESR/DefaultMasters.aspx", "GetdivisionMstr");


    var yourValue = '00'; // 'Default';
    $("#ddldeprt").empty();
    $("<option value='00' selected>All</option>").appendTo("#ddldeprt");
    if (Result != '[]') {
        //alert("length=" + Result.d.length + Result.d.ItemType_Name);

        var roomdata = JSON.parse(Result.d);

        $.each(roomdata, function (key, value) {
            // debugger;
            $("#ddldeprt").append($("<option></option>").val(value.ParentDepID).html(value.ParentDep));
        });
        $('#ddldeprt option[value="' + yourValue + '"]').attr('selected', 'selected');
        //        $("<option value='999' selected>Others</option>").appendTo("#ddlcurttype");
        $("#ddldeprt").select2("val", yourValue);
    }
    else {
        $("#ddldeprt").select2("val", "00");


    }

} //fun end






function GetEncripted_String(Encripted_parms) {


    var decriptedstring = "";


    var Result = Ajaxfunctioncall_singelparam("../ESR/DefaultMasters.aspx", "GetEncriptString", "dailyobjjson", Encripted_parms);


    if (Result.length > 0) {
        decriptedstring = (Result);


    }



    return decriptedstring;
}
