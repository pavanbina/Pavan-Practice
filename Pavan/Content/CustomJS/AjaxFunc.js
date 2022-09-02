

function Ajaxfunctioncall(pagename, methodname, inputparamJSON, inputobj) {
    var retresponse = '';
    var urlmethod = "/" + methodname; //  '/SaveValues'; 
    //ajax fun start
    $.ajax({
        type: "POST",
        url: pagename + urlmethod, // '/SaveEvent',
        data: JSON.stringify({ inputparamJSON: inputobj }),
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

function Ajaxfunctioncall_singelparam(pagename, methodname, singleparam, inputobj) {
    var retresponse = '';
    var urlmethod = "/" + methodname; //  '/SaveValues';

    $.ajax({
        type: "POST",
        url: pagename + urlmethod, // '/SaveEvent',
        data: '{singleparam:"' + inputobj + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () {

        },
        success: function (data) {

            retresponse = data.d;

            //  alert(retresponse);
            // DraBarannacanteendatewise(responsedata);

        },
        complete: function () {

        },
        failure: function (response) {
            alert(response.d);
        },
        error: function (xhr, errorType, exception) {
            var responseText = '';

            try {
                responseText = jQuery.parseJSON(xhr.responseText);
                alert('error message' + responseText.Message);
            } catch (e) {
                responseText = xhr.responseText;
                alert(responseText);
            }
        }
    });


    //  alert("retresponse=" + retresponse);
    return retresponse;
}




function CheckSession() {
    debugger;
    $.ajax({
        type: "POST",
        //dataType: "json",
        url: "FileUpload.aspx/CheckSession",
        async: true,
        data: {},
        contentType: "application/json",
        success: function (res) {
        },
        error: function (err) {
            if (err.status == 401) {
                window.location.href = "../logout.aspx";
            }
        }
    });
}

function Checklogoutsession() {



    var resultobj = {};
    var Resulttrans = Ajaxfunctioncall_WithOutParams("../Master/EncriptDicript.aspx", "CheckSession");
    if (Resulttrans != '') {

        if (Resulttrans.d != '') {

            alert(Resulttrans);

            var pageurl = Resulttrans;

            window.open(pageurl, "_self");
            //  window.location = Resulttrans.d;
        }
    }
}