

function EncryptPassword(e, rno) {
   // debugger;
    if (e.keyCode == 13) {
        var pwdval = $('#txtpassword').val();
        if (pwdval != '') {
            var pwd = $.trim(pwdval);
            var enc_pwd = $.md5($.md5(pwd) + rno);
            $('#txtpassword').val(enc_pwd);
        }
        return true;
    }
}

function EncryptPassword1(e, rno) {
    //debugger;
    if (e.keyCode != 13) {
        var pwdval = $('#txtpassword').val();
        if (pwdval != '') {
            var pwd = $.trim(pwdval);
            var enc_pwd = $.md5($.md5(pwd) + rno);
            $('#txtpassword').val(enc_pwd);
        }
        return true;
    }
}

function EncryptPassword_new(textControl) {
    //  debugger;
    var txtBox = $(textControl).val();
    if (txtBox != "") {
        var pwd = txtBox;
        //  document.getElementById('hdnMDFStatus').value = "N";
        // $('#hdnMDFStatus').val('N');
        var enc_pwd = "";
        enc_pwd = $.md5(pwd);
        if (enc_pwd != "") {
            //  document.getElementById('hdnMDFStatus').value = "Y";
            //  $('#hdnMDFStatus').val('Y');
        }
        $(textControl).val(enc_pwd);
        return true;
    }
}

function EncryptPasswordUpdate(e, rno) {
    // debugger;
    if (e.keyCode == 13) {
        var pwdvalupdate = $('#txtCpassword').val();
        if (pwdvalupdate != '') {
            var pwdupdate = $.trim(pwdvalupdate);
            var enc_pwdupdate = $.md5($.md5(pwdupdate) + rno);
            $('#txtCpassword').val(enc_pwdupdate);
        }
        return true;
    }
}

function EncryptPassword1Update(e, rno) {
    //debugger;
    if (e.keyCode != 13) {
        var pwdvalupdate = $('#txtCpassword').val();
        if (pwdvalupdate != '') {
            var pwdupdate = $.trim(pwdvalupdate);
            var enc_pwdupdate = $.md5($.md5(pwdupdate) + rno);
            $('#txtCpassword').val(enc_pwdupdate);
        }
        return true;
    }
}


