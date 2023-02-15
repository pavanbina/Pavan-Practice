

function checkinputvalid(inputvalue, maxlength, minlen, errorfield) {
    var errormsg = '';
    if (inputvalue != '') {
        if (inputvalue.length > Number(maxlength)) {
            errormsg = errorfield + ' should be maximum of ' + maxlength + ' characters only';
        }
        if (inputvalue.length < Number(minlen)) {
            errormsg = errorfield + ' Must be Minimum ' + minlen + ' Characters Long.';
        }
        var REG = /[!#$%^&*_~`=+{}?]/;
        if (REG.test(inputvalue)) {
            errormsg = 'Please Enter Valid ' + errorfield;
        }
        if (!((inputvalue.charAt(0) >= 'a' && inputvalue.charAt(0) <= 'z') || (inputvalue.charAt(0) >= 'A' && inputvalue.charAt(0) <= 'Z') || (inputvalue.charAt(0) >= '0' && inputvalue.charAt(0) <= '9'))) {
            errormsg = 'Please Enter First Character of ' + errorfield + ' must be Alphabet/Numeric.';
        }
    }
    return errormsg;
}
function checkinputvalidremarks(inputvalue, maxlength, minlen, errorfield) {
    var errormsg = '';
    if (inputvalue != '') {
        //        if (inputvalue.length > Number(maxlength)) {
        //            errormsg = errorfield + ' should be maximum of ' + maxlength + ' characters only';
        //        }
        if (inputvalue.length < Number(minlen)) {
            errormsg = errorfield + ' Must be Minimum ' + minlen + ' Characters Long.';
        }
        //                var REG = /[!#$%^&*_~`=+{}?]/;
        //                if (REG.test(inputvalue)) {
        //                    errormsg = 'Please enter Valid ' + errorfield;
        //                }
        if (!((inputvalue.charAt(0) >= 'a' && inputvalue.charAt(0) <= 'z') || (inputvalue.charAt(0) >= 'A' && inputvalue.charAt(0) <= 'Z') || (inputvalue.charAt(0) >= '0' && inputvalue.charAt(0) <= '9'))) {
            errormsg = 'Please Enter First Character of ' + errorfield + ' must be Alphabet/Numeric.';
        }
    }
    return errormsg;
}

function Getdate(varDate) {//fun start
    var converteddate = '';
    var date = varDate;
    var d = new Date(date.split("/").reverse().join("-"));
    //alert(d);
    var dd = d.getDate();
    var mm = d.getMonth() + 1;
    var yy = d.getFullYear();
    // alert(yy + "/" + mm + "/" + dd);
    converteddate = mm + "/" + dd + "/" + yy;
    return converteddate;
} //fun end


//$(".allownumericwithdecimal").on("keypress keyup blur", function (event) {
//    //this.value = this.value.replace(/[^0-9\.]/g,'');
//    $(this).val($(this).val().replace(/[^0-9\.]/g, ''));
//    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
//        event.preventDefault();
//    }
//});

//$(".allownumericwithoutdecimal").on("keypress keyup blur", function (event) {
//    $(this).val($(this).val().replace(/[^\d].+/, ""));
//    if ((event.which < 48 || event.which > 57)) {
//        event.preventDefault();
//    }
//});

$(".onlynumbers").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg").html("Digits Only").show().fadeOut("slow");
        return false;
    }
});

$(".two-decimals").on("keypress change", function (evt) {
    //debugger;
    var $txtBox = $(this);
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode > 31) && (charCode < 48 || charCode > 57) && (charCode != 46))
        return false;
    else {
        var len = $txtBox.val().length;
        var index = $txtBox.val().indexOf('.');
        if (index == 0) {//to remove dot operator
            $txtBox.val('');
            return false;
        }
        if (index > 0) {//restrict to only 2 decimal places
            if (charCode != 8) {// issue for back space not works in mozilla browser
                var charAfterdot = (len + 1) - index;
                if (charAfterdot > 3) {
                    return false;
                }
            }
        }
    }
    return $txtBox; //for chaining
});


function CheckonlyNames(inputvalue, maxlength, minlen, errorfield) {
    var errormsg = '';
    if ($.trim(inputvalue) != '') {

        var username = $.trim(inputvalue);
        var re = /[a-zA-Z]/;
        if (!re.test(username)) {
            errormsg = errorfield + 'Contains Atleast One Alphabet.';
        }
        for (var i = 0; i <= (username.length - 1); i++) {
            var theChar = username.substring(i, i + 1);
            // if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9') || (theChar == '.') || (theChar == " "))) {
            if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar == '.') || (theChar == " "))) {
                errormsg = 'Please Enter Valid ' + errorfield;
            }
        }
        var thefChar = username.substring(0, 0 + 1);
        if (!((thefChar >= 'a' && thefChar <= 'z') || (thefChar >= 'A' && thefChar <= 'Z'))) {
            errormsg = 'Please Enter First character of ' + errorfield + ' must be Alphabet. ';

        }
        if (username.length < minlen) {
            errormsg = errorfield + ' Must be Minimum ' + minlen + ' Characters Long.';

        }
        if (username.length > maxlength) {
            errormsg = errorfield + ' Must be smaller than ' + maxlength + ' Characters ';
        }
        if (parseFloat(username) == 0) {
            errormsg = " Please don't Enter all zero's for " + errorfield;

        }
    }
    return errormsg;
}

function UpperCase(e) {
    e.value = e.value.toUpperCase();
}

function CheckPancard(inputvalue, maxlength, minlen, errorfield) {
    var errormsg = ''; //ABCDE1234F=10 LENGTH
    var panvalue = $.trim(inputvalue);
    if (panvalue != '') {
        var re = /[a-zA-Z]/;
        if (!re.test(panvalue)) {
            errormsg = errorfield + 'should be AlphaNumeric.';
        }
        var Numre = /[0-9]/;
        if (!Numre.test(panvalue)) {
            errormsg = errorfield + 'should be AlphaNumeric.';
        }
        if (panvalue.length > maxlength) {
            errormsg = errorfield + ' Must be ' + maxlength + ' Characters ';
        }
        if (parseFloat(panvalue) == 0) {
            errormsg = " Please don't Enter all zero's for " + errorfield;
        }
        var actualpan = /[a-zA-Z]{5}\d{4}[a-zA-Z]{1}/;
        if (!actualpan.test(panvalue)) {
            errormsg = 'Invalid ' + errorfield;
        }

    }
    return errormsg;
}


function Checkifsc(inputvalue, maxlength, minlen, errorfield) {
    var errormsg = ''; //aaaa0123456
    var ifscvalue = $.trim(inputvalue);
    //debugger;
    if (ifscvalue != '') {
        var re = /[a-zA-Z]/;
        if (!re.test(ifscvalue)) {
            errormsg = errorfield + 'should be AlphaNumeric.';
        }
        var Numre = /[0-9]/;
        if (!Numre.test(ifscvalue)) {
            errormsg = errorfield + 'should be AlphaNumeric.';
        }
        if (ifscvalue.length > maxlength) {
            errormsg = errorfield + ' Must be ' + maxlength + ' Characters ';
        }
        if (parseFloat(ifscvalue) == 0) {
            errormsg = " Please don't Enter all zero's for " + errorfield;
        }
        var actualpan = /[A-Z|a-z]{4}[0][\d]{6}$/;
        if (!actualpan.test(ifscvalue)) {
            errormsg = 'Invalid ' + errorfield;
        }
    }
    return errormsg;
}

function OnlyAlphabates(e, textControl) {//letters with space (ex: Names,bank names)
    // debugger;
    var ch = String.fromCharCode(e.keyCode);
    var txtvalue = $(textControl).val();
    var filter = /^[A-Za-z ]/;
    if (!filter.test(ch)) {
        event.returnValue = false;
    }
    if (txtvalue.length == 0) {
        if (e.which < 48 || (e.which > 57 && e.which < 65) || (e.which > 90 && e.which < 97) || (e.which > 47 && e.which < 58) || e.which > 122) {
            e.preventDefault();
        }
    }
    txtvalue = txtvalue.substring(0, 1).toUpperCase() + txtvalue.substring(1);
    $(textControl).val(txtvalue);
}

function OnlyAlphabateswithNumbers(e, textControl) {//letters and numbers with space (ex: branch names)
    var ch = String.fromCharCode(e.keyCode);
    var txtvalue = $(textControl).val();
    var filter = /^[A-Za-z0-9 ]/;
    if (!filter.test(ch)) {
        event.returnValue = false;
    }
    if (txtvalue.length == 0) {
        if (e.which < 48 || (e.which > 57 && e.which < 65) || (e.which > 90 && e.which < 97) || (e.which > 47 && e.which < 58) || e.which > 122) {
            e.preventDefault();
        }
    }
    txtvalue = txtvalue.substring(0, 1).toUpperCase() + txtvalue.substring(1);
    $(textControl).val(txtvalue);
}

function OnlyAlphaNumericwithoutspace() {//letters and numbers with out space (ex: IFSC/PAN )
    var ch = String.fromCharCode(event.keyCode);
    var filter = /^[A-Za-z0-9]/;
    if (!filter.test(ch)) {
        event.returnValue = false;
    }

}

function OnlyAddress(e, textControl) {//for address, not allow first char should not spcl char
    var ch = String.fromCharCode(e.keyCode);
    var txtvalue = $(textControl).val();
    if (txtvalue.length == 0) {
        if (e.which < 48 || (e.which > 57 && e.which < 65) || (e.which > 90 && e.which < 97) || (e.which > 47 && e.which < 58) || e.which > 122 || e.which == 32) {
            e.preventDefault();
        }
    }
    txtvalue = txtvalue.substring(0, 1).toUpperCase() + txtvalue.substring(1);
    // checkfirstcharnotspcl(ch);
    $(textControl).val(txtvalue);
}

function checkfirstcharnotspcl(ch, firstchar) {
    var filter = /^[A-Za-z]/;
    if (!filter.test(ch)) {
        event.returnValue = false;
    }
}

function checkvehicleregno(inputvalue, maxlength, minlen, errorfield) {
    var errormsg = '';
    if (inputvalue != '') {
        if (inputvalue.length > Number(maxlength)) {
            errormsg = errorfield + ' should be maximum of ' + maxlength + ' characters only';
        }
        if (inputvalue.length < Number(minlen)) {
            errormsg = errorfield + ' Must be Minimum ' + minlen + ' Characters Long.';
        }
        var REG = /[!#$%^&*_~`=+{}?]/;
        if (REG.test(inputvalue)) {
            errormsg = 'Please Enter Valid ' + errorfield;
        }
        if (!((inputvalue.charAt(0) >= 'a' && inputvalue.charAt(0) <= 'z') || (inputvalue.charAt(0) >= 'A' && inputvalue.charAt(0) <= 'Z') || (inputvalue.charAt(0) >= '0' && inputvalue.charAt(0) <= '9'))) {
            errormsg = 'Please Enter First Character of ' + errorfield + ' must be Alphabet/Numeric.';
        }
        var actualregno = /[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}/;

        if (!actualregno.test(inputvalue)) {
            errormsg = 'Invalid ' + errorfield;
        }
    }
    return errormsg;
}

function checkalphanumericcontainsatleastnumornot(inputvalue, maxlength, minlen, errorfield) {
    var errormsg = '';
    if (inputvalue != '') {
        // debugger;
        if (inputvalue.length > Number(maxlength)) {
            errormsg = errorfield + ' should be maximum of ' + maxlength + 'characters only';
        }
        if (inputvalue.length < Number(minlen)) {
            errormsg = errorfield + ' Must be Minimum ' + minlen + ' Characters Long.';
        }
        var REG = /[!#$%^&*_~`=+{}?]/;
        if (REG.test(inputvalue)) {
            errormsg = 'Please Enter Valid ' + errorfield;
        }
        var matches = inputvalue.match(/\d+/g);
        if (matches != null) {

        }
        else {
            errormsg = errorfield + ' should be Alphanumeric';
        }

    }
    return errormsg;
}


$('input').bind("paste", function (e) {
    e.preventDefault();
});

function CheckUserID(inputvalue, maxlength, minlen, errorfield) {
    var errormsg = ''; //ABCDEF1234=10 LENGTH
    var usrvalue = $.trim(inputvalue);
    if (usrvalue != '') {
        var re = /[a-zA-Z]/;
        if (!re.test(usrvalue)) {
            errormsg = errorfield + 'should be AlphaNumeric.';
        }
        var Numre = /[0-9]/;
        if (!Numre.test(usrvalue)) {
            errormsg = errorfield + 'should be AlphaNumeric.';
        }
        if (usrvalue.length > maxlength) {
            errormsg = errorfield + ' Must be ' + maxlength + ' Characters ';
        }
        if (parseFloat(usrvalue) == 0) {
            errormsg = " Please don't Enter all zero's for " + errorfield;
        }
        var actualpan = /[a-zA-Z]{6}\d{4}/;
        if (!actualpan.test(usrvalue)) {
            errormsg = 'Invalid ' + errorfield;
        }

    }
    return errormsg;
}

function firstcharspclornotevent(e, textControl) {
    // debugger;
    var ch = String.fromCharCode(e.keyCode);
    var txtvalue = $(textControl).val();
    if (txtvalue.length == 0) {
        if (e.which < 48 || (e.which > 57 && e.which < 65) || (e.which > 90 && e.which < 97) || (e.which > 47 && e.which < 58) || e.which > 122 || e.which == 32) {
            e.preventDefault();
        }
    }
}

