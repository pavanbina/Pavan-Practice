$(function () {
    //Alert("Success", "succ_msg", "success");
    $("#btnlogin").click(function () {
        var resobj = {};
        resobj.email = $("#signin-email").val();
        resobj.pwd = $("#signin-password").val();
        LogIn(resobj);

    });
    $("#btnsignup").click(function () {
        var resobj = {};
        resobj.username = $("#signup-username").val();
        resobj.email = $("#signup-email").val();
        resobj.pwd = $("#signup-password").val();
        SignUp(resobj);
    });
})
var Alert = (title, text, icon) => {
    swal({
        title: title,//info error success
        text:text,
        icon:icon,
    });
}
function SignUp(resobj) {//fun start
    var CR_report = [];
    //debugger;
    var Result = Ajaxfunctioncall("SignUp", "Login", "objjson", resobj);
    if (Result != '[]') {
        if (Result != "") {
            succ_msg = JSON.parse(Result);
        }
    }
    if (succ_msg.length > 0) {
        if (succ_msg == '1') {
            succ_msg = "Signed Up Successfully"
            Alert("Success", succ_msg, "success");
        }
        else {
            succ_msg = "Unable to Sign Up Please try again"
            Alert("Error", succ_msg, "error");
        }
    }
}

function LogIn(resobj) {//fun start
    var CR_report = [];
    //debugger;
    var Result = Ajaxfunctioncall("Login", "Login", "objjson", resobj);
    if (Result != '[]') {
        if (Result != "") {
            succ_msg = JSON.parse(Result);
        }
    }
    if (succ_msg.length > 0) {
        if (succ_msg == '1') {
            succ_msg = "Logged In"
            Alert("Success", succ_msg, "success");
            window.location.href= 'welcome/';
        }
        else {
            succ_msg = "Failed to Login"
            Alert("Error", succ_msg, "error");
        }
     
    }
}
function EncryptPassword(e, id) {
    //debugger;
    if (e.keyCode == 13) {
        if ($("#" + id).val() != '') {
            var pwd = $("#" + id).val();
            var enc_pwd = MD5(pwd);
            $("#" + id).val(enc_pwd);
            //alert(enc_pwd);
        }
        return true;
    }
}

function EncryptPassword1(e, id) {
    //debugger;
    if (e.keyCode != 13) {
        if ($("#" + id).val() != '') {
            var pwd = $("#" + id).val();
            var enc_pwd = MD5(pwd);
            $("#" + id).val(enc_pwd);
            //alert(enc_pwd);
        }
        return true;
    }
}

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