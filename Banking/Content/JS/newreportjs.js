
var bindtasble = $('#table');
$remove = $('#remove');
selections = [];

$(function () {
    try {
        var pageURL = $(location).attr('href'); //get current url     //additemmodal.aspx?ReqID= 001 &pageurl=report    

        var spliturl = pageURL.split("?enc=");
        if (spliturl.length > 1) {//additemmodal.aspx  ReqID= 001&pageurl=report         

            var Encripted_parms = spliturl[1]; //ReqID= 001&pageurl=report       

            //now decript it

            var Decripted_parms = GetDecripted_String(Encripted_parms);
            if (Decripted_parms.length > 0) {

                var parmaslist = Decripted_parms.split('&'); //ReqID= 001   


                var IndentID = $.trim(parmaslist[0].split('=')[1]);

                $("#lblindentno").text(IndentID);
                // alert($("#lblindentno").text());

                GetGodownWiseDepoMaster_Toraiseindents(IndentID);

            }

        }
    }
    catch (Error) {

        alert("Please contact your technical Team" + Error);
        return false;
    }
});

$(document).ready(function () {
    //bindtasble.on('click-row.bs.table', function () {

    //    //$(this).DateRecieved = "04/02/2022";
    //    //alert("ahi");


    //});

    //  BindSingleDatepicker_maxdateiscurdate($(".reciveddate"));
    $(".reciveddate").bind('copy paste', function (e) { e.preventDefault(); });


    $("#btnsave").click(function () {

        var gentindents_list = [];
        var totl_indentsdata = bindtasble.bootstrapTable("getData");
        var selattnd_dtls = bindtasble.bootstrapTable("getSelections");
        if (selattnd_dtls.length > 0) {
            var validaterow = 0;

            for (var i = 0; i < selattnd_dtls.length; i++) {

                if (selattnd_dtls[i].ReceivedQty > 0) {
                    // alert("datereci=" + selattnd_dtls[i].DateRecieved);
                    if (selattnd_dtls[i].Recieved_Date !== null) {
                        var getnindentobj = {};
                        getnindentobj.JP_Delivery_Id = selattnd_dtls[i].JPDeliveryId;
                        getnindentobj.ReceivedQuantity = Number(selattnd_dtls[i].ReceivedQty);
                        getnindentobj.Received_Date_Godown = (selattnd_dtls[i].Recieved_Date);
                        getnindentobj.GDNTollAmount = Number(selattnd_dtls[i].GDNApproved_TollCharges);
                        getnindentobj.GDNKhataAmount = Number(selattnd_dtls[i].GDNApproved_KhataCharges);

                        //
                        //GDNApproved_TollCharges
                        gentindents_list.push(getnindentobj);
                    }
                    else {


                        var pr_rowno = Number(selattnd_dtls[i].SNo);
                        var txtreceivedate__cntrl = $("#txtrecievedate_" + pr_rowno);


                        if (txtreceivedate__cntrl.val() == "") {
                            alert("Please Select Received Date");
                            txtreceivedate__cntrl.focus();
                            return false;
                        }
                        else {

                        }

                    }
                }

                else {


                    var pr_rowno = Number(selattnd_dtls[i].SNo);
                    var txtqnty__cntrl = $("#txtqnty_" + pr_rowno);
                    var regex = /^\d*\.?\d*$/;
                    // var quantity = selattnd_dtls[i].GeneratedQuntity;
                    //  if (regex.test(quantity)) {

                    if (!(regex.test(txtqnty__cntrl.val()))) {
                        alert("Please Enter Valid Decimal Value having only One decimal point is allowed");
                        txtqnty__cntrl.focus();
                        return false;
                    }

                    else if (txtqnty__cntrl.val() == "" || "0") {
                        alert("Please Enter Quantity");
                        txtqnty__cntrl.focus();
                        return false;
                    }

                    else {

                    }

                }
            }

            var resultobj = {};
            resultobj.objgodown = gentindents_list;


            SaveGeneratedBULKIndent_bygodown(resultobj);



        }

        else {
            alert("Please select atleast one indent");
            return false;
        }



    });

    //$(".reciveddate").change(function (e,row) {

    //    alert("hai"+$(this).val());
    //    var pr_tr = $(this).closest('tr');
    //   // row.DateRecieved = $(this).val();

    //  //  alert(row.DateRecieved);
    //  //  var DateRecieved
    //  //  row.DateRecieved

    //});
    //$(".reciveddate1").on('change-row.bs.table', function (e, row, $element) {
    //    alert("hai" + $(this).val());
    //});

});
function GetGodownWiseDepoMaster_Toraiseindents(IndentID) {


    var tablecolumns_array = [
        [
            //SNo	IndentNumber	IndentDate	Layout	SandDumpName	JPDeliveryId	JPDeliverDate	LorryNo	WayBillNo	ReachId	DistanceInKM	Qty_Delivered	ReceivedQty
            //IndentNumber	IndentDate	JP_Delivery_Id	JPDeliveredDate	JPDeliveredQty
            //JP_Delivery_Id	JP_Deliver_Date	Qty_Delivered	LorryNo	WayBillNo
            { title: 'Action', field: '', checkbox: true, align: 'center', valign: 'middle', visible: true },

            { title: 'S.No', field: 'SNo', align: 'center', valign: 'middle', sortable: true, visible: true, width: '' },
            { title: 'Indent Number', field: 'IndentNumber', align: 'left', valign: 'middle', sortable: true, visible: true, width: '' },
            { title: 'Indent Date', field: 'IndentDate', align: 'left', valign: 'middle', sortable: true, visible: true, width: '', },
            //     { title: 'Layout', field: 'Layout', align: 'left', valign: 'middle', sortable: true, visible: true, width: '', },
            //    { title: 'Sand Dump Name', field: 'SandDumpName', align: 'left', valign: 'middle', sortable: true, visible: true, width: '', },
            { title: 'JP_Delivery_Id', field: 'JPDeliveryId', align: 'left', valign: 'middle', sortable: true, visible: false, width: '' },
            { title: 'Lorry Number', field: 'LorryNo', align: 'left', valign: 'middle', sortable: true, visible: true, width: '', },
            { title: 'Way Bill <br/>Number ', field: 'WayBillNo', align: 'left', valign: 'middle', sortable: true, visible: true, width: '', },
            { title: 'Reach point', field: 'ReachId', align: 'left', valign: 'middle', sortable: true, visible: true },
            { title: 'Distance <br/>in KM', field: 'DistanceInKM', align: 'right', valign: 'middle', sortable: true, visible: true, footerFormatter: footformtr_totaltxt },
            //{ title: 'Delivery Date', field: 'JPDeliveredDate', align: 'left', valign: 'middle', sortable: true, visible: true, width: '', footerFormatter: footformtr_totaltxt },
            { title: 'Quantity<br/> Delivered<br/>[MT]', field: 'Qty_Delivered', align: 'right', valign: 'middle', sortable: true, visible: true, width: '100px', footerFormatter: footformtr_totalAmount },
            { title: 'Delivered <br/> Date', field: 'JP_Deliver_Date', align: 'left', valign: 'middle', visible: true },
            //JPKattaCharges
            { title: ' Toll<br/>Charges', field: 'JP_TollCharges', align: 'right', valign: 'middle', visible: true, footerFormatter: footformtr_totalAmount },
            { title: 'Khata <br/> Charges', field: 'JPKattaCharges', align: 'right', valign: 'middle', sortable: true, visible: true, footerFormatter: footformtr_totalAmount },

            { title: 'Recieved <br/>Quantity', field: 'ReceivedQty', align: 'right', valign: 'middle', visible: true, formatter: Linkformater_qnttyentry, events: operateEvents, footerFormatter: footformtr_totalAmount },
            { title: 'Recieved<br/> Date', field: 'Recieved_Date', align: 'right', valign: 'middle', visible: true, formatter: Linkformater_recievedate, events: operateEvents, },
            { title: 'Confirmed<br/> Toll<br/>Charges', field: 'GDNApproved_TollCharges', align: 'right', valign: 'middle', visible: true, formatter: Linkformater_gdntollcharges, events: operateEvents, footerFormatter: footformtr_totalAmount },
            { title: 'Confirmed<br/> Khata<br/>Charges', field: 'GDNApproved_KhataCharges', align: 'right', valign: 'middle', visible: true, formatter: Linkformater_gdnKhataCharges, events: operateEvents, footerFormatter: footformtr_totalAmount }
        ]

    ];

    initTable(bindtasble, "Bulk Sand Indent Wise Details", "Bulk Sand Indent Wise Details", tablecolumns_array);

    GetGodownWiseDepoMaster_Toraiseindents_FromDB(IndentID);

}


function GetGodownWiseDepoMaster_Toraiseindents_FromDB(IndentID) {//fun start
    var CR_report = [];
    //debugger;
    var Result = Ajaxfunctioncall_singelparam("BulkSandIndentWisebyGodown.aspx", "GetBulkSand_GoDownIndentWise", "dailyobjjson", IndentID);
    //var Result = Ajaxfunctioncall_WithOutParams("BulkSandIndentRaisedbyPD.aspx", "GetBulkSand_PDs");

    if (Result != '') {



        if (Result.length > 0) {
            var CR_report = JSON.parse(Result);
            //$.each(CR_report, function (index, value) {
            //    var Recieved_Date = $.datepicker.formatDate('yy-mm-dd', new Date(CR_report[index].Recieved_Date));
            //  //  var sandump = CR_report[index].SandDumpName + "-" + CR_report[index].SandDumpLocation;
            //    CR_report[index].Recieved_Date = Recieved_Date;
            //    $('input[type=date]').attr('value',Recieved_Date);
            //})


            // Recieved_Date


            if (CR_report.length > 0) {
                bindtasble.bootstrapTable('load', CR_report);
            }
            else {
                $("#divtbl").hide();

            }

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
function footformtr_totaltxt(data) {
    return 'Total';
}
function indexformeter(value, row, index) {
    return 1 + index;
}

function footformtr_totalAmount(data) {
    var field = this.field;
    return data.map(function (row) {
        var prval = row[field];

        return +prval;

    }).reduce(function (sum, i) {
        var x = parseFloat(sum);
        var y = isNaN(parseFloat(i)) ? 0 : parseFloat(i);
        let result = x + y;
        return result.toFixed(0)
    }, 0);
}

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
        pageSize: 10,
        pageList: "[5,10, 25, 50, 100, ALL]",
        showFooter: true,
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
    'change .qntyentry': function (e, value, row, index) {
        // alert('You click like action, row: ' + JSON.stringify(row));
        //  alert("rownumber=" + index);
        var pr_rowno = Number(index) + 1;
        row.ReceivedQty = $(e.target).val();
        //var txtreciveddate_cntl = $("#txtrecievedate_" + pr_rowno);

        //if (txtreciveddate_cntl.val() == "") {
        //    alert("Please select Recieved Date");
        //    txtreciveddate_cntl.focus();
        //    return false;
        //}
        //else {


        //    alert(txtreciveddate_cntl.val());
        //    row.RecievedQuntity = $(e.target).val();
        //    row.DateRecieved = txtreciveddate_cntl.val();
        //}


    },
    'change .reciveddate': function (e, value, row, index) {
        //  alert('You click like action, row: ' + JSON.stringify(row));
        var inputdate = $(e.target).val();;

        // var dt = $("#txtdate").val();
        var dt = $.datepicker.formatDate('dd/mm/yy', new Date(inputdate));
        // alert(d);
        //var corrdate = "";

        //if (inputdate.length > 0)
        //{
        //    var year = inputdate.substring(0, 4);
        //    var month = inputdate.substring(5, 7);
        //    var currentdate = inputdate.substring(8, 10);
        //    corrdate = currentdate + "/" + month + "/" + year;
        //}
        row.Recieved_Date = dt;
        // $(e.target).val("10/02/2021");
        //  alert(row.DateRecieved);
    },


    'change .jpremarksentry': function (e, value, row, index) {
        //alert('You click like action, row: ' + JSON.stringify(row));

        row.jpremarks = $(e.target).val();


    },

    'click .getindent': function (e, value, row, index) {
        var encrstring = "IndentID=" + $.trim(row.IndentID);
        var encripted_Params = GetEncripted_String(encrstring);
        var pageurl = "BenefeciariesRejection.aspx?" + encripted_Params;

        window.open(pageurl, '_self');

    },

    'click .getseclist': function (e, value, row, index) {
        var encrstring = "MaterialtypeID=" + $.trim(row.MaterialTypeID) + "&MaterialtypeName=" + $.trim(row.MaterialTypeName) + "&SecreID=" + $.trim(row.Sec_Code)

            + "&ComponentId=" + $.trim(row.ComponentID) + "&ComponentName=" + $.trim(row.ComponentName);
        var encripted_Params = GetEncripted_String(encrstring);


        var pageurl = "BenefeciariesRejection.aspx?" + encripted_Params;

        window.open(pageurl, '_self');

    },

    'change .godowncls': function (e, value, row, index) {

        row.GodownID = $(e.target).val();
        //if (row.GodownID == "00")
        //{
        //    row.GodownID = "";
        //}
        //  alert(row.GodownID);
    },
    //gdntollcharges
    'change .gdntollcharges': function (e, value, row, index) {
        // alert('You click like action, row: ' + JSON.stringify(row));
        //  alert("rownumber=" + index);
        var pr_rowno = Number(index) + 1;
        row.GDNApproved_TollCharges = $(e.target).val();



    },

    //gdnkhatacharges

    'change .gdntollcharges': function (e, value, row, index) {
        // alert('You click like action, row: ' + JSON.stringify(row));
        //  alert("rownumber=" + index);
        var pr_rowno = Number(index) + 1;
        row.GDNApproved_KhataCharges = $(e.target).val();



    },
};

function Linkformater_godownlist(value, row, index) {

    return '<select id="ddlgodown_' + index + '" style="width: 100%;" class="personalSelectClass form-control select2 godowncls">' +
        ' <option value="00" selected="selected">Choose</option>' +

        ' </select>';

}

function Linkformater_mandaldrill(value, row, index) {

    return '<a class="text-primay getmndldrill" href="javascript:void(0)" title="Status" name="Mandal Name"> ' + value + '</a>  ';

}

function Linkformater_attendance_First_half(value, row, index) {

    var chekstatus = row.FirstHalf_Status;

    var rownumber = Number(index + 1);
    var Week_Public_Off_Eligibility = row.Week_Public_Off_Eligibility;
    var fstchckbox_id = "firsthalf_" + rownumber;
    if ($.trim(chekstatus) == "1") {
        //return{checked:false}uncheck
        return '<input type="checkbox" checked="true"  class="btn btn-success firsthalfevent" id="' + fstchckbox_id + '"/> ';
    }
    else if ($.trim(chekstatus) == "14") {
        return '<input type="checkbox" checked="true"  class="btn btn-success firsthalfevent" id="' + fstchckbox_id + '"/> ';
    }
    else {
        //return{checked:true} check

        if (($.trim(Week_Public_Off_Eligibility) == "18")) {
            return '<input type="checkbox"  class="btn btn-success firsthalfevent " disabled id="' + fstchckbox_id + '"/> ';
        }
        else {
            return '<input type="checkbox"  class="btn btn-success firsthalfevent "  id="' + fstchckbox_id + '"/> ';
        }
    }
}
//Linkformater_getseclist

function Linkformater_getseclist(value, row, index) {

    return '<a class="text-primay getseclist" href="javascript:void(0)" title="Status" name="Mandal Name"> ' + value + '</a>  ';

}
//Linkformater_gdntollcharges


function Linkformater_gdntollcharges(value, row, index) {
    var rno = Number(index + 1);
    var qntytxt = "txtgdntollchrg_" + rno;
    if (row.ReceivedQty == "0") {
        return "<input type='text' id='" + qntytxt + "'    style='width : 100px;' class='form-control gdntollcharges' onkeypress='return isonlydecimalNumberKeytouch_allowingzero(event,this);' maxlength='5' value='" + row.GDNApproved_TollCharges + "' />";

    }
    else {
        return "<input type='text' id='" + qntytxt + "'    style='width : 100px;' class='form-control gdntollcharges' onkeypress='return isonlydecimalNumberKeytouch_allowingzero(event,this);' maxlength='5' value='" + row.GDNApproved_TollCharges + "' disabled/>";

    }

}

//Linkformater_gdnKhataCharges


function Linkformater_gdnKhataCharges(value, row, index) {
    var rno = Number(index + 1);
    var qntytxt = "txtgdnkhatachrg_" + rno;
    if (row.ReceivedQty == "0") {
        return "<input type='text' id='" + qntytxt + "'    style='width : 100px;' class='form-control gdnkhatacharges' onkeypress='return isonlydecimalNumberKeytouch_allowingzero(event,this);' maxlength='5' value='" + row.GDNApproved_KhataCharges + "' />";

    }
    else {
        return "<input type='text' id='" + qntytxt + "'    style='width : 100px;' class='form-control gdnkhatacharges' onkeypress='return isonlydecimalNumberKeytouch_allowingzero(event,this);' maxlength='5' value='" + row.GDNApproved_KhataCharges + "' disabled/>";

    }

}

function Linkformater_qnttyentry(value, row, index) {
    var rno = Number(index + 1);
    var qntytxt = "txtqnty_" + rno;
    if (row.ReceivedQty == "0") {
        return "<input type='text' id='" + qntytxt + "'    style='width : 100px;' class='form-control qntyentry' onkeypress='return isonlydecimalNumberKeytouch_allowingzero(event,this);' maxlength='5' value='" + row.ReceivedQty + "' />";

    }
    else {
        return "<input type='text' id='" + qntytxt + "'    style='width : 100px;' class='form-control qntyentry' onkeypress='return isonlydecimalNumberKeytouch_allowingzero(event,this);' maxlength='5' value='" + row.ReceivedQty + "' disabled/>";

    }

}
function Linkformater_recievedate(value, row, index) {
    var rno = Number(index + 1);
    var recdate = "txtrecievedate_" + rno;

    if (row.ReceivedQty == "0") {
        return "<input type='date' id='" + recdate + "' date-format='dd/mm/yyyy'   style='width : 100px;' class='form-control reciveddate' onkeypress='return Nothingtype(event);' maxlength='10'/>";

    }
    else {
        return "<input type='text' id='" + recdate + "'    style='width : 100px;' class='form-control reciveddate' onkeypress='return isonlydecimalNumberKeytouch_allowingzero(event,this);' maxlength='10' value='" + row.Recieved_Date + "' disabled/>";
        // return "<input type='date' id='" + recdate + "' date-format='dd/mm/yyyy' value='" + row.Recieved_Date + "'    style='width : 100px;' class='form-control reciveddate' onkeypress='return Nothingtype(event);' maxlength='10' disabled/>";

    }





}


function Linkformater_jpremarksentry(value, row, index) {
    var rno = Number(index + 1);
    var qntytxt = "txtjpreamrks_" + rno;

    return "<input type='text' id='" + qntytxt + "'    style='width : 100px;' class='form-control jpremarksentry' onkeypress='return Valtxtfirstchar_alphanumeric(event,this);' maxlength='500'/>";

}

function Linkformater_jpremarksentry(value, row, index) {
    return '<a class="text-primay getindent" href="javascript:void(0)" title="Status" name="Indent ID"> ' + value + '</a>  ';
}

//

//for table binding functions end
/////////////////////////////////////////////////////////////////////////////////////////////////////**************************************\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




function SaveGeneratedBULKIndent_bygodown(resultobj) {//fun start
    var Result = Ajaxfunctioncall("BulkSandIndentWisebyGodown.aspx", "GodownIndentUpdate", "dailyobjjson", resultobj);

    if (Result != '[]') {
        if (Result.d == "") {
        }
        else {
            succ_msg = JSON.parse(Result.d);
        }


    }


    if (succ_msg.length > 0) {
        alert(succ_msg);
        var IndentID = $("#lblindentno").text();
        GetGodownWiseDepoMaster_Toraiseindents(IndentID);



    }


}



function GetDecripted_String(Encripted_parms) {


    var decriptedstring = "";


    var Result = Ajaxfunctioncall_singelparam("../Material/DefaultMaster.aspx", "GetDecriptString", "dailyobjjson", Encripted_parms);


    if (Result.length > 0) {
        decriptedstring = (Result);


    }



    return decriptedstring;
}


function BackButtonOnClick() {
    var pageurl = "BulkSandIndentGodown.aspx";
    window.open(pageurl, '_self');
}


function footformtr_totaltxt(data) {
    return 'Total';
}

