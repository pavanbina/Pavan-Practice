/// <reference path="../../ForgotPasswordheaderjs.js" />
//index--please note down if any new method wrote


//keypress                                                                  //validations
//Valtxtfirstchar_alphanumeric	for alpha numeric                           //DateValidation	for past date and current date--basic//
//isonlydecimalNumberKeytouch	for number decimals                         //DateValidation_Strings	for past and current date with providing alert msg
//isonlyNumberKeytouch	for integers
//isonlyempyidnumberstart0Keytouch	isonlyempyidnumberstart0Keytouch
//Takevalidateonlyalpha	for alphabets
//Nothingtype	nothing type                                                     //ChckPasteCount	for paste remain char//ismaxlength	for remain char
//Valtxtfirstchar_alphanumeric_new                                               //ismaxlengthremarks	for remain count//forRemainchars	for remina char
//keypress_alphanumericwithspace 
//keypress_firstcharalphanumericafterallowspl                                   //forGridviewRemainchars	for gridview remain char//DateValidation_dispstr	for date validation
//isonlydecimalNumberKeytouch_allowingzero
//isonlydecimalNumberKeytouch_allowingzero_allow_NA                                  //futureDateValidation	for future date only//notfutureDateValidation	for no future date
//isonlydecimalNumberKeytouch_allowingzero_allow_dashsymbol
//keypress_onlyalphabets                                                       //futureDateValidation_dispstr	for future date with alert string
//CompareTwodates	for compare twod ates with alert string//compareonedatfield_withdate	for compare twod ates//NoFuturedateWithText	for no future date with text box

//validate_Currency	validate currency//validateprogress_deta	validate percentage with 2 decimal points
//ValidateTextBox	validate text//Textboxvarcharvalidation	textbox validation//isEmailId	emailid
//validateuploadFile	validateuploadfile//MobilenoTesting	MobilenoTesting//MobilenoTesting_alert for mobile testing with alertmessage
//validateAcres_Land_deta for land acres//validate_Yrar_Mnth_data for validate_Yrar_Mnth_data//validateupload_Photo_File for validateupload_Photo_File
//Restrictfuturedate_allowpastdate_withtext allow past date restrict for future date
//Pincodealert picode alert
//DateValidation_forpastandcurrent for restrict future date allow past and current date

//MobilenoTesting_alert_with789  //ValidateTextBox_onlyalphabets//comparetodatewith_fromdate

//empidValidate empid validate

///validateprogress_deta_New//Number_Validate  //ValidateTextBox_New //OnlyfutureData_New//Validate_licenseno
//validateprogress_deta_allowingzero
//validate_Currency_new
//
//validatedecimal_allowingzero_Allow_NA    //ValidateJustEnter
//ValidateTextBox_withminlength //MobilenoTesting_alert_New//Validateemailid_new//
//ValidateTextBox_bclUserid//Validate_NumberNew
//validatedecimal_allowingzero_new


//callendar

//BindSingleDatepicker//BindSingleDatepicker_WithMinDate_MaxCurrDate//BindSingleDatepickerWith_MinDate//GetTodaysDate//BindTimePicker

//ComareTwotimevalues //ValidateTextBox_withminlength_alowfirstcharnumber//BindSingleDatepickerWith_MaxCurrentDate//BindSingleDatepicker_WithMinDate_MaxDate
//BindSingleDatepicker_maxdateiscurdate//BindSingleDatepicker_maxdateiscurdate_mindateis6daysback 


//for alpha numeric

function Valtxtfirstchar_alphanumeric(evt, obj) {


    if (obj.value.length == 0) {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

        if (charCode == 32) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }


        if (charCode == 46) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }



        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }
    }
    else {




    }












}

//for only numbers decimals



function isonlydecimalNumberKeytouch(evt, obj) {

    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

    if (obj.value.length == 0) {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

        //        if (charCode == 48) {
        //            obj.value = obj.value.slice(0, -1);
        //            return false;
        //        }


        if (charCode == 46) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }
    }
    if ((charCode > 31 && (charCode < 47 || charCode > 57) && charCode != 46)) {
        obj.value = obj.value.slice(0, -1);
        return false;
    }

    return true;

}


//for integer numbers


function isonlyNumberKeytouch(evt, obj) {

    //alert(evt.charCode);
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

    if (obj.value.length == 0) {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

        if (charCode == 48) {
          //  obj.value = obj.value.slice(0, -1);
            return false;
        }



    }
    if (((charCode < 48 || charCode > 57))) {
      //  obj.value = obj.value.slice(0, -1);
        return false;
    }

    return true;

}

//for past date and current date date


function DateValidation(dob) {
    var DOB = dob.val();

    if (!DOB.match(/^(0[1-9]|[12][0-9]|3[01])[\/.](?:(0[1-9]|1[012])[\/.](19|20)[0-9]{2})$/)) {
        alert("Please Select Valid Date");
        dob.focus();
        dob.val("");
        return false;
    }

    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if (regs = DOB.match(re)) {
        // day value between 1 and 31
        if (regs[1] < 1 || regs[1] > 31) {
            alert("Invalid value for day: " + regs[1]);
            dob.focus();
            dob.val("");
            return false;
        }
        // month value between 1 and 12
        if (regs[2] < 1 || regs[2] > 12) {
            alert("Invalid value for month: " + regs[2]);
            dob.focus();
            dob.val("");
            return false;
        }
        // year value between 1902 and 2016
        var prdate = new Date();

        if (regs[3] < 1902 || regs[3] > (prdate).getFullYear()) {
            alert("Invalid value for year: " + regs[3] + " - must be between 1902 and " + (prdate).getFullYear());
            dob.focus();
            dob.val();
            return false;
        }
        if (regs[3] == (prdate).getFullYear()) {
            if ((parseFloat(regs[2]) - 1) > (prdate).getMonth()) {
                alert("Please Select Month is less than current Month");
                dob.focus();
                dob.val("");
                return false;
            }
            if ((parseFloat(regs[2]) - 1) == (prdate).getMonth()) {
                var PresentDate = (prdate).getDate();
                if (parseFloat(regs[1]) > parseFloat(PresentDate)) {
                    alert("Please Select  Date should be less than Current Date");
                    dob.focus();
                    dob.val("");
                    return false;
                }
            }
        }

    }
    else {
        alert("Invalid date format: " + DOB);
        dob.focus();
        dob.val();
        return false;
    }

}
function DateValidation_Strings(dob, stadatestr) {
    var DOB = dob.val();

    if (!DOB.match(/^(0[1-9]|[12][0-9]|3[01])[\/.](?:(0[1-9]|1[012])[\/.](19|20)[0-9]{2})$/)) {
        alert("Please Select Valid " + stadatestr + " Date");
        dob.focus();
        dob.val("");
        return false;
    }

    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if (regs = DOB.match(re)) {
        // day value between 1 and 31
        if (regs[1] < 1 || regs[1] > 31) {
            alert("Invalid value for day: " + regs[1]);
            dob.focus();
            dob.val("");
            return false;
        }
        // month value between 1 and 12
        if (regs[2] < 1 || regs[2] > 12) {
            alert("Invalid value for month: " + regs[2]);
            dob.focus();
            dob.val("");
            return false;
        }
        // year value between 1902 and 2016
        var prdate = new Date();

        if (regs[3] < 1902 || regs[3] > (prdate).getFullYear()) {
            alert("Invalid value for year: " + regs[3] + " - must be between 1902 and " + (prdate).getFullYear());
            dob.focus();
            dob.val();
            return false;
        }
        if (regs[3] == (prdate).getFullYear()) {
            if ((parseFloat(regs[2]) - 1) > (prdate).getMonth()) {
                alert("Please Select Month is less than current Month");
                dob.focus();
                dob.val("");
                return false;
            }
            if ((parseFloat(regs[2]) - 1) == (prdate).getMonth()) {
                var PresentDate = (prdate).getDate();
                if (parseFloat(regs[1]) > parseFloat(PresentDate)) {
                    alert("Please Select " + stadatestr + " should be less than Current Date");
                    dob.focus();
                    dob.val("");
                    return false;
                }
            }
        }

    }
    else {
        alert("Invalid date format: " + DOB);
        dob.focus();
        dob.val();
        return false;
    }

}


//for alphabets

function Takevalidateonlyalpha(evt, obj) {

    // alert(evt.charCode);

    if (obj.value.length == 0) {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

        //for space
        if (charCode == 32) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }


        //for .
        if (charCode == 46) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }

        //for ,
        if (charCode == 44) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }



        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }
    }

    else {

        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));


        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && (charCode != 46) && (charCode != 44) && (charCode != 32)) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }
    }

}





//for paste remain char



function ChckPasteCount(charLimit, inputId) {
    var text = window.clipboardData.getData("Text");
    var remainingChars = charLimit - (document.getElementById(inputId).value.length + parseInt(text.length));
    if (parseInt(remainingChars) < 0)
        return false;
    else
        return true;
}


function ismaxlength(objTxtCtrl, nLength) {
    if (objTxtCtrl.getAttribute && objTxtCtrl.value.length > nLength)
        objTxtCtrl.value = objTxtCtrl.value.substring(0, nLength)

    var remchars = nLength - objTxtCtrl.value.length;

    if (document.all)
        document.getElementById('lblCaption').innerText = 'Remaining Characters:' + remchars;
    else
        document.getElementById('lblCaption').textContent = 'Remaining Characters:' + remchars;

}

//for remarks 


function ismaxlengthremarks(objTxtCtrl, nLength) {
    if (objTxtCtrl.getAttribute && objTxtCtrl.value.length > nLength)
        objTxtCtrl.value = objTxtCtrl.value.substring(0, nLength)

    var remchars = nLength - objTxtCtrl.value.length;


    if (document.all)
        document.getElementById('lblremcaption').innerText = 'Remaining Characters:' + remchars;
    else
        document.getElementById('lblremcaption').textContent = 'Remaining Characters:' + remchars;

}


//for future date date only
function futureDateValidation(dob) {
    var DOB = dob.val();

    if (!DOB.match(/^(0[1-9]|[12][0-9]|3[01])[\/.](?:(0[1-9]|1[012])[\/.](19|20)[0-9]{2})$/)) {
        alert("Please enter Valid  Date");
        dob.focus();
        dob.val();
        return false;
    }

    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if (regs = DOB.match(re)) {
        // day value between 1 and 31
        if (regs[1] < 1 || regs[1] > 31) {
            alert("Invalid value for day: " + regs[1]);
            dob.focus();
            dob.val();
            return false;
        }
        // month value between 1 and 12
        if (regs[2] < 1 || regs[2] > 12) {
            alert("Invalid value for month: " + regs[2]);
            dob.focus();
            dob.val();
            return false;
        }
        // year value between 1902 and 2016
        var prdate = new Date();

        if (regs[3] < 1902) {
            alert("Invalid value for year: " + regs[3] + " - must be greater than 1902 .");
            dob.focus();
            dob.val();
            return false;
        }
        //        if (regs[3] == (prdate).getFullYear()) {
        //            
        //            if ((parseFloat(regs[2]) - 1) == (prdate).getMonth()) {
        //                var PresentDate = (prdate).getDate();
        //                if (parseFloat(regs[1]) < parseFloat(PresentDate)) {
        //                    alert("Date should be Greater  than Current Date");
        //                    dob.focus();
        //                    dob.val();
        //                    return false;
        //                }
        //            }
        //        }

    }
    else {
        alert("Invalid date format: " + DOB);
        dob.focus();
        dob.val();
        return false;
    }

}






function forRemainchars(objTxtCtrl, nLength, remvarbl) {

    var objTxtCtrl_id = $(objTxtCtrl);
    var remvarbl_id = $(remvarbl);

    if (objTxtCtrl_id.val().length > (nLength)) {
        var remtest = objTxtCtrl_id.val().substring(0, nLength);

        objTxtCtrl_id.val(remtest);


    }
    else {
        var remchars = (nLength) - objTxtCtrl_id.val().length;



        remvarbl_id.text('Remaining Characters:' + remchars);
    }



}



//for future date date only
function notfutureDateValidation(dob) {
    var DOB = dob.val();

    if (!DOB.match(/^(0[1-9]|[12][0-9]|3[01])[\/.](?:(0[1-9]|1[012])[\/.](19|20)[0-9]{2})$/)) {
        alert("Please enter Valid Date");
        dob.focus();
        dob.val();
        return false;
    }

    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if (regs = DOB.match(re)) {
        // day value between 1 and 31
        if (regs[1] < 1 || regs[1] > 31) {
            alert("Invalid value for day: " + regs[1]);
            dob.focus();
            dob.val();
            return false;
        }
        // month value between 1 and 12
        if (regs[2] < 1 || regs[2] > 12) {
            alert("Invalid value for month: " + regs[2]);
            dob.focus();
            dob.val();
            return false;
        }
        // year value between 1902 and 2016
        var prdate = new Date();

        if (regs[3] < 1902) {
            alert("Invalid value for year: " + regs[3] + " - must be greater than 1902 .");
            dob.focus();
            dob.val();
            return false;
        }
        if (regs[3] == (prdate).getFullYear()) {

            if ((parseFloat(regs[2]) - 1) == (prdate).getMonth()) {
                var PresentDate = (prdate).getDate();
                if (parseFloat(regs[1]) < parseFloat(PresentDate)) {
                    alert("Date should be Greater  than Current Date");
                    dob.focus();
                    dob.val();
                    return false;
                }
            }
        }

    }
    else {
        alert("Invalid date format: " + DOB);
        dob.focus();
        dob.val();
        return false;
    }

}


///for restirct type in textbox





function Nothingtype(obj) {

    return false;
}



//for future date date only
function futureDateValidation_dispstr(dob, disstr) {
    var DOB = dob.val();
    //    alert(DOB);
    if (!DOB.match(/^(0[1-9]|[12][0-9]|3[01])[\/.](?:(0[1-9]|1[012])[\/.](19|20)[0-9]{2})$/)) {
        alert("Please Select Valid " + disstr + " ");
        dob.focus();
        dob.val();
        return false;
    }

    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if (regs = DOB.match(re)) {
        // day value between 1 and 31
        if (regs[1] < 1 || regs[1] > 31) {
            alert("Invalid Value for Day: " + regs[1]);
            dob.focus();
            dob.val();
            return false;
        }
        // month value between 1 and 12
        if (regs[2] < 1 || regs[2] > 12) {
            alert("Invalid Value for Month: " + regs[2]);
            dob.focus();
            dob.val();
            return false;
        }
        // year value between 1902 and 2016
        var prdate = new Date();

        if (regs[3] < 1902) {
            alert("Invalid Value for Year: " + regs[3] + " - Must be greater than 1902 .");
            dob.focus();
            dob.val();
            return false;
        }


        if (regs[3] == (prdate).getFullYear()) {



            if ((parseFloat(regs[2]) - 1) == (prdate).getMonth()) {
                var PresentDate = (prdate).getDate();
                if (parseFloat(regs[1]) < parseFloat(PresentDate)) {
                    alert(disstr + " should be Greater  than Current Date");
                    dob.focus();
                    dob.val();
                    return false;
                }
            }
        }


    }
    else {
        alert("Invalid Date Format: " + DOB);
        dob.focus();
        dob.val();
        return false;
    }

}



function CompareTwodates(txtFromDate, txtToDate, fromstr, tostr) {




    //var txtFromDate = $("#txtwrkitestartdate");
    //var txtToDate = $("#txtwrkiteenddate
    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if (regsFROM = txtFromDate.val().match(re)) {
        if (regsTO = txtToDate.val().match(re)) {
            if (regsTO[3] < regsFROM[3]) {
                alert("Please Select " + tostr + " Date Should be Greater than " + fromstr + " Date");
                txtToDate.focus();
                txtToDate.val("");
                return false;
            }
            if (regsTO[3] == regsFROM[3]) {
                if (regsTO[2] < regsFROM[2]) {
                    alert("Please Select " + tostr + " Date Should be Greater than " + fromstr + " Date");
                    txtToDate.focus();
                    txtToDate.val("");
                    return false;
                }
            }
            if (regsTO[3] == regsFROM[3]) {
                if (regsTO[2] == regsFROM[2]) {
                    if (regsTO[1] < regsFROM[1]) {
                        alert("Please Select " + tostr + " Date Should be Greater than " + fromstr + " Date");
                        txtToDate.focus();
                        txtToDate.val("");
                        return false;
                    }
                }
            }
        }
    }


}




function validate_Currency(txtttlscope, txtbname) {


    var result = true;

    var txtttlscope_val = txtttlscope.val();

    if (txtttlscope_val.length > 0) {




        if (parseFloat(txtttlscope_val) == 0) {

            alert("Please don't enter 0 in " + txtbname);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;

        }




        //for restrict only one dot

        var dotcunt = 0;

        for (var i = 0; i < txtttlscope_val.length; i++) {

            if (txtttlscope_val[i] == '.') {

                dotcunt = dotcunt + 1;

            }

        }


        if (dotcunt > 1) {


            alert("Only one decimal point(.) is allowed in the " + txtbname);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;

        }
        else if (dotcunt == 1) {


            var dotplace = (txtttlscope_val.indexOf(".") + 1);


            var afterdot = txtttlscope_val.length - dotplace;



            if (afterdot > 2) {

                alert("Please don't enter more than 2 digits after decimal point(.) in " + txtbname);
                txtttlscope.val("");
                txtttlscope.focus();

                result = false;

            }





        }
        else {


        }




    }


    return result;


}

function validateprogress_deta(txtttlscope, txtbname) {


    var result = true;

    var txtttlscope_val = txtttlscope.val();
    //alert(txtttlscope_val);

    if (txtttlscope_val.length > 0) {




        if (parseFloat(txtttlscope_val) == 0) {

            alert("Please Don't Enter  0 value in " + txtbname);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;

        }

        if (parseFloat(txtttlscope_val) > 100) {


            alert("Please Don't Enter More than 100 in " + txtbname);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;

        }


        //for restrict only one dot

        var dotcunt = 0;

        for (var i = 0; i < txtttlscope_val.length; i++) {

            if (txtttlscope_val[i] == '.') {

                dotcunt = dotcunt + 1;

            }

        }


        if (dotcunt > 1) {


            alert("Please Don't Enter . More than One Time in " + txtbname);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;

        }
        else if (dotcunt == 1) {


            var dotplace = (txtttlscope_val.indexOf(".") + 1);


            var afterdot = txtttlscope_val.length - dotplace;



            if (afterdot > 2) {

                alert("Please Don't Enter Decimal Point More than 2 in " + txtbname);
                txtttlscope.val("");
                txtttlscope.focus();

                result = false;

            }





        }
        else {


        }




    }


    return result;


}



function compareonedatfield_withdate(txtFromDate, txtToDate, fromstr, tostr) {


    //alert(txtFromDate.val() + "," + txtToDate.val());

    var FDATE = txtFromDate.val();
    var TDATE = txtToDate.val();

    //  alert(FDATE + "," + TDATE);

    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;



    if (regsFROM = FDATE.match(re)) {

        // alert("regs=" + regs);
        if (regsTO = TDATE.match(re)) {

            if (regsTO[3] < regsFROM[3]) {

                alert("Please Select " + tostr + " Date Greater than " + fromstr + " Date");
                txtToDate.focus();
                txtToDate.val("");
                return false;
            }
            if (regsTO[3] == regsFROM[3]) {
                if (regsTO[2] < regsFROM[2]) {
                    alert("Please Select " + tostr + " Date Greater than " + fromstr + " Date");
                    txtToDate.focus();
                    txtToDate.val("");
                    return false;
                }
            }
            if (regsTO[3] == regsFROM[3]) {
                if (regsTO[2] == regsFROM[2]) {
                    if (regsTO[1] < regsFROM[1]) {
                        alert("Please select " + tostr + " Date Greater than " + fromstr + " Date");
                        txtToDate.focus();
                        txtToDate.val("");
                        return false;
                    }
                }
            }
        }
    }


}



function forGridviewRemainchars(element, nLength, remvarbl) {


    var textbox = $(element);
    // alert(textbox.val());
    var row = $(element).closest("tr");

    var lbledremremarks = row.find("[id*=" + remvarbl + "]");



    if (textbox.val().length > nLength) {


        textboxval = textbox.val().substring(0, nLength);
        //alert(textboxval);

        textbox.val(textboxval);
    }

    var remchars = nLength - textbox.val().length;


    lbledremremarks.html("Remaining Characters:" + remchars);


    //alert(lbledremremarks.html());



}

function NoFuturedateWithText(dob, txtval) {


    var DOB = dob.val();

    // alert(DOB, txtval);

    if (!DOB.match(/^(0[1-9]|[12][0-9]|3[01])[\/.](?:(0[1-9]|1[012])[\/.](19|20)[0-9]{2})$/)) {
        alert("Please enter Valid " + txtval + " Date");
        dob.focus();
        dob.val();
        return false;
    }

    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if (regs = DOB.match(re)) {
        // day value between 1 and 31
        if (regs[1] < 1 || regs[1] > 31) {
            alert("Invalid value for day: " + regs[1]);
            dob.focus();
            dob.val();
            return false;
        }
        // month value between 1 and 12
        if (regs[2] < 1 || regs[2] > 12) {
            alert("Invalid value for month: " + regs[2]);
            dob.focus();
            dob.val();
            return false;
        }
        // year value between 1902 and 2016
        var prdate = new Date();

        if (regs[3] < 1902) {
            alert("Invalid value for year: " + regs[3] + " - must be greater than 1902 .");
            dob.focus();
            dob.val();
            return false;
        }
        if (regs[3] == (prdate).getFullYear()) {

            if ((parseFloat(regs[2]) - 1) == (prdate).getMonth()) {
                var PresentDate = (prdate).getDate();
                if (parseFloat(regs[1]) < parseFloat(PresentDate)) {
                    alert("Date should be Greater  than Current Date");
                    dob.focus();
                    dob.val();
                    return false;
                }
            }
        }

    }
    else {
        alert("Invalid date format: " + DOB);
        dob.focus();
        dob.val();
        return false;
    }

}

function ValidateTextBox(textbox, alert_msg) {

    var textbox_val = textbox.val();

    if (textbox_val.length < 2) {

        alert("Please Enter Minimum Two Characters in  " + alert_msg + ".");
        textbox.focus();
        return false;
    }



    if (textbox_val.search(/[a-zA-Z]/i) < 0) {

        alert("Please Enter Atleast One Alphabet in " + alert_msg + ". ");
        textbox.focus();
        textbox.val("");
        return false;

    }





    var charcode_posit0 = textbox_val.charAt(0);

    //alert("position=" + textbox_val + "," + charcode_posit0);

    if (charcode_posit0.search(/[a-zA-Z0-9]/i) < 0) {

        alert("Please Enter " + alert_msg + " Start's With Alphabet/Number . ");
        textbox.focus();
        textbox.val("");
        return false;

    }




}


//for only date format

function DateValidation_dispstr(dob, disstr) {
    var DOB = dob.val();
    //alert(DOB);
    if (!DOB.match(/^(0[1-9]|[12][0-9]|3[01])[\/.](?:(0[1-9]|1[012])[\/.](19|20)[0-9]{2})$/)) {
        alert("Please Select Valid " + disstr + " ");
        dob.focus();
        dob.val();
        return false;
    }

    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if (regs = DOB.match(re)) {
        // day value between 1 and 31
        if (regs[1] < 1 || regs[1] > 31) {
            alert("Invalid Value for Day: " + regs[1]);
            dob.focus();
            dob.val();
            return false;
        }
        // month value between 1 and 12
        if (regs[2] < 1 || regs[2] > 12) {
            alert("Invalid Value for Month: " + regs[2]);
            dob.focus();
            dob.val();
            return false;
        }
        // year value between 1902 and 2016
        var prdate = new Date();

        if (regs[3] < 1902) {
            alert("Invalid Value for Year: " + regs[3] + " - Must be greater than 1902 .");
            dob.focus();
            dob.val();
            return false;
        }


        if (regs[3] == (prdate).getFullYear()) {

            //            if ((parseFloat(regs[2]) - 1) == (prdate).getMonth()) {
            //                var PresentDate = (prdate).getDate();
            //                if (parseFloat(regs[1]) > parseFloat(PresentDate)) {
            //                    alert(disstr + " should be Less  than Current Date");
            //                    dob.focus();
            //                    dob.val();
            //                    return false;
            //                }
            //            }


        }


    }
    else {
        alert("Invalid Date Format: " + DOB);
        dob.focus();
        dob.val();
        return false;
    }

}


function isonlyempyidnumberstart0Keytouch(evt, obj) {

    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

    if (obj.value.length == 0) {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));





    }
    if (((charCode < 48 || charCode > 57))) {
        obj.value = obj.value.slice(0, -1);
        return false;
    }

    return true;

}

function Textboxvarcharvalidation(txtskillpername, visiname) {



    var txtskillpername_val = txtskillpername.val();

    var charcode_posit0 = txtskillpername_val.charAt(0);

    //alert("position=" + textbox_val + "," + charcode_posit0);

    if (charcode_posit0.search(/[a-zA-Z0-9]/i) < 0) {

        alert("Please enter first character alphabet/number in " + visiname + ". ");
        txtskillpername.focus();
        txtskillpername.val("");
        return false;

    }

    if (txtskillpername_val.length < 3) {

        alert("Please enter more than 2 characters in " + visiname + ".");
        txtskillpername.focus();
        return false;
    }



    if (txtskillpername_val.search(/[a-zA-Z]/i) < 0) {

        alert("Please enter atleast One alphabet in " + visiname + ".");
        txtskillpername.focus();
        txtskillpername.val("");
        return false;

    }





}




function isEmailId(parEmailId) {
    var state = true;
    var count = 0;
    var counta = 0;
    var ErrMsg = "";

    //no successive two dots
    for (var i = 0; i < parEmailId.length - 1; i++)
        if ((parEmailId.charAt(i) == ".") && (parEmailId.charAt(i + 1) == "."))
            state = false;
    //no successive two '@'
    for (var i = 0; i < parEmailId.length - 1; i++)
        if ((parEmailId.charAt(i) == "@") && (parEmailId.charAt(i + 1) == "@"))
            state = false;


    //no successive '.'and'@'
    for (var i = 0; i < parEmailId.length - 1; i++)
        if ((parEmailId.charAt(i) == ".") && (parEmailId.charAt(i + 1) == "@"))
            state = false;

    //no successive'@' and '.'
    for (var i = 0; i < parEmailId.length - 1; i++)
        if ((parEmailId.charAt(i) == "@") && (parEmailId.charAt(i + 1) == "."))
            state = false;

    //the number of "." should be atleast one
    for (i = 0; i < parEmailId.length; i++) {
        if (parEmailId.charAt(i) == ".")
            count = count + 1;
    }

    if (count < 1)
        state = false;

    //the first and last char cannot be "."
    var l = parEmailId.length;
    if ((parEmailId.charAt(0) == ".") || (parEmailId.charAt(l - 1) == "."))
        state = false;

    //the first and last char cannot be "@"
    var l = parEmailId.length;
    if ((parEmailId.charAt(0) == "@") || (parEmailId.charAt(l - 1) == "@"))
        state = false;

    //aleast one "@"
    for (i = 0; i < parEmailId.length; i++) {
        if (parEmailId.charAt(i) == "@")
            counta = counta + 1;
    }
    if (counta < 1)
        state = false;

    return state;
}





function validateuploadFile(fupphofile, btnname) {


    if (fupphofile.val().length == 0) {


        alert("Please Upload " + btnname);
        fupphofile.focus();
        return false;

    }
    else {


        var x = fupphofile.val();
        var ar_name = x.split('.');


        if (ar_name != null) {
            if (ar_name.length == "2") {
                if ((ar_name[1].toLowerCase() == "jpg") ||
                        (ar_name[1].toLowerCase() == "jpeg")) {


                }
                else {
                    alert("Please upload only jpeg/jpg  " + btnname);
                    fupphofile.focus();
                    return false;
                }
            }
            else {
                alert("Invalid " + btnname + " for uploading");
                fupphofile.focus();
                return false;
            }
        }
    }


}




function MobilenoTesting(mobileno) {

    if (parseFloat(mobileno.val()) == 0) {

        alert("Please don't allow 0 value in Contact No");
        mobileno.focus();
        mobileno.val("");
        return false;
    }



    if (!(mobileno.val().charAt(0) == "9" || mobileno.val().charAt(0) == "8" || mobileno.val().charAt(0) == "7")) {
        alert("Contact No Starts with 7 or 8 or 9 only  ");
        mobileno.focus();
        mobileno.val("");
        return false;
    }



    var moblen = mobileno.val().length;


    if ((moblen > 9) && (moblen < 12)) {
    }
    else {


        if ((moblen < 9)) {
            alert("Contact No Length Must be  Longer than 9 Digits");
            mobileno.focus();
            mobileno.val();
            return false;
        }

        if ((moblen > 12)) {
            alert("Contact No Length Must be  Less than 12 Digits");
            mobileno.focus();
            mobileno.val();
            return false;
        }
    }



}



function MobilenoTesting_alert(mobileno, alertmsg, maxlength) {

    if (parseFloat(mobileno.val()) == 0) {

        alert("Please don't allow 0 value in " + alertmsg);
        mobileno.focus();
        mobileno.val("");
        return false;
    }



    //                 if (!(mobileno.val().charAt(0) == "9" || mobileno.val().charAt(0) == "8" || mobileno.val().charAt(0) == "7")) {
    //                     alert("Contact No Starts with 7 or 8 or 9 only  ");
    //                     mobileno.focus();
    //                     mobileno.val("");
    //                     return false;
    //                 }



    var moblen = mobileno.val().length;


    if ((moblen > 9) && (moblen < maxlength)) {
    }
    else {


        if ((moblen < 9)) {
            alert("Contact No Length Must be  Longer than 9 Digits");
            mobileno.focus();
            mobileno.val("");
            return false;
        }

        if ((moblen > maxlength)) {
            alert("Contact No Length Must be  Less than " + maxlength + " Digits");
            mobileno.focus();
            mobileno.val("");
            return false;
        }
    }



}




function validateAcres_Land_deta(txtland, txtbname) {


    var result = true;

    var txtland_val = txtland.val();

    if (txtland_val.length > 0) {




        if (parseFloat(txtland_val) == 0) {

            alert("Please Don't Enter  0 value in " + txtbname);
            txtland.val("");
            txtland.focus();

            result = false;

        }

        //for restrict only one dot

        var dotcunt = 0;

        for (var i = 0; i < txtland_val.length; i++) {

            if (txtland_val[i] == '.') {

                dotcunt = dotcunt + 1;

            }

        }


        if (dotcunt > 1) {


            alert("Please Don't Enter . More than One Time in " + txtbname);
            txtland.val("");
            txtland.focus();

            result = false;

        }
        else if (dotcunt == 1) {


            var dotplace = (txtland_val.indexOf(".") + 1);


            var afterdot = txtland_val.length - dotplace;



            if (afterdot > 4) {

                alert("Please Don't Enter Decimal Point More than 4 in " + txtbname);
                txtland.val("");
                txtland.focus();

                result = false;

            }





        }
        else {


        }




    }


    return result;


}



function validate_Yrar_Mnth_data(txtland, txtbname) {

    //syntax:1.11
    var result = true;

    var txtland_val = txtland.val();

    if (txtland_val.length > 0) {




        if (parseFloat(txtland_val) == 0) {

            alert("Please Don't Enter  0 value in " + txtbname);
            txtland.val("");
            txtland.focus();

            result = false;

        }

        //for restrict only one dot

        var dotcunt = 0;

        for (var i = 0; i < txtland_val.length; i++) {

            if (txtland_val[i] == '.') {

                dotcunt = dotcunt + 1;

            }

        }


        if (dotcunt > 1) {


            alert("Please Don't Enter . More than One Time in " + txtbname);
            txtland.val("");
            txtland.focus();

            result = false;

        }
        else if (dotcunt == 1) {


            var dotplace = (txtland_val.indexOf(".") + 1);


            var afterdot = txtland_val.length - dotplace;



            if (afterdot > 2) {

                alert("Please Don't Enter Decimal Point More than 2 in " + txtbname);
                txtland.val("");
                txtland.focus();

                result = false;

            }
            else {

                var afterdecimal_val = txtland_val.substring(dotplace, txtland_val.length);

                alert("afterdecimal_val=" + afterdecimal_val + "dotplace=" + dotplace + "afterdot=" + afterdot);

                if (afterdecimal_val > 11) {


                    // alert("Please Don't Enter  More than 11 Months in " + txtbname);
                    txtland.val("");
                    txtland.focus();

                    result = false;

                }


            }





        }
        else {


        }




    }


    return result;


}



function validateupload_Photo_File(fupphofile, btnname, uploadtype, priority) {
    //phot=p//file=f uploadtype

    if (fupphofile.val().length == 0) {
        if (priority == "1") {

            alert("Please Upload " + btnname);
            fupphofile.focus();
            return false;
        }

    }
    else {


        var x = fupphofile.val();
        var ar_name = x.split('.');


       
        if (uploadtype == "P") {

            if (ar_name != null) {
                if (ar_name.length == "2") {
                    if ((ar_name[1].toLowerCase() == "jpg") ||
                        (ar_name[1].toLowerCase() == "jpeg")) {

                        return true;
                    }
                    else {
                        alert("Please upload only jpeg/jpg  " + btnname);
                        fupphofile.focus();
                        return false;
                    }
                }
                else {
                    alert("Invalid filename" + btnname + " for uploading");
                    fupphofile.focus();
                    return false;
                }
            }
        }
        else if (uploadtype == "F") {


            if (ar_name != null) {
                if (ar_name.length == "2") {
                    if ((ar_name[1].toLowerCase() == "pdf") ||
                        (ar_name[1].toLowerCase() == "pdf")) {
                        return true;

                    }
                    else {
                        alert("Please upload only pdf  " + btnname);
                        fupphofile.focus();
                        return false;
                    }
                }
                else {
                    alert("Invalid filename " + btnname + " for uploading");
                    fupphofile.focus();
                    return false;
                }
            }
        }
    }


}



function Restrictfuturedate_allowpastdate_withtext(dob, disstr) {
    var DOB = dob.val();
    // alert(DOB);
    if (!DOB.match(/^(0[1-9]|[12][0-9]|3[01])[\/.](?:(0[1-9]|1[012])[\/.](19|20)[0-9]{2})$/)) {
        alert("Please Select Valid " + disstr + " ");
        dob.focus();
        dob.val();
        return false;
    }

    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if (regs = DOB.match(re)) {
        // day value between 1 and 31
        if (regs[1] < 1 || regs[1] > 31) {
            alert("Invalid Value for Day: " + regs[1]);
            dob.focus();
            dob.val();
            return false;
        }
        // month value between 1 and 12
        if (regs[2] < 1 || regs[2] > 12) {
            alert("Invalid Value for Month: " + regs[2]);
            dob.focus();
            dob.val();
            return false;
        }
        // year value between 1902 and 2017
        var prdate = new Date();

        if (regs[3] < 1902) {
            alert("Invalid Value for Year: " + regs[3] + " - Must be greater than 1902 .");
            dob.focus();
            dob.val();
            return false;
        }

        //year comparision

        if (regs[3] > (prdate).getFullYear()) {

            alert("Please Select " + disstr + " should be Less  than Current Date");
            dob.focus();
            dob.val();
            return false;
        }
        if (regs[3] == (prdate).getFullYear()) {
            if (((parseFloat(regs[2])) - 1) > (prdate).getMonth()) {
                alert("Please Select " + disstr + " should be Less  than Current Date");
                dob.focus();
                dob.val();
                return false;
            }
        }
        if (regs[3] == (prdate).getFullYear()) {
            if (((parseFloat(regs[2])) - 1) == (prdate).getMonth()) {
                var PresentDate = (prdate).getDate();

                if (parseFloat(regs[1]) > parseFloat(PresentDate)) {
                    alert("Please Select " + disstr + " should be Less  than Current Date");
                    dob.focus();
                    dob.val();
                    return false;
                }
            }
        }


    }
    else {
        alert("Invalid Date Format: " + DOB);
        dob.focus();
        dob.val();
        return false;
    }

}

function Pincodealert(picode, alertmsg, maxlength) {

    if (parseFloat(picode.val()) == 0) {

        alert("Please don't allow 0 value in " + alertmsg);
        picode.focus();
        picode.val("");
        return false;
    }



    //                 if (!(mobileno.val().charAt(0) == "9" || mobileno.val().charAt(0) == "8" || mobileno.val().charAt(0) == "7")) {
    //                     alert("Contact No Starts with 7 or 8 or 9 only  ");
    //                     mobileno.focus();
    //                     mobileno.val("");
    //                     return false;
    //                 }



    var moblen = picode.val().length;


    if ((moblen != maxlength)) {




        if ((moblen > maxlength)) {
            alert(alertmsg + " Length Must be  Equal to " + maxlength + " Digits");
            picode.focus();
            picode.val("");
            return false;
        }
    }
    else {

        var equalcount = 0;
        var disgits_array = picode.val().split("");


        for (var i = 1; i < maxlength; i++) {

            if (disgits_array[i] == disgits_array[i - 1]) {

                equalcount = equalcount + 1;
            }


        }

        if (equalcount == 5) {

            alert("Please Enter Valid Pincode");
            picode.focus();
            picode.val("");
            return false;

        }


    }



}

function validateVerhoeff(num) {
    var cc;
    var c = 0;
    var myArray = StringToReversedIntArray(num);

    for (var i = 0; i < myArray.length; i++) {

        c = d[c][p[(i % 8)][myArray[i]]];

    }

    cc = c;
    return cc;
}

function Validate_aadhaar(aadharfield) {

    if (aadharfield.val() != "") {
        var aadharCard = aadharfield.val();
        for (var i = 0; i <= (aadharCard.length - 1); i++) {
            var theChar = aadharCard.substring(i, i + 1);
            if (!((theChar >= '0' && theChar <= '9'))) {
                alert("Enter Aadhar No Correctly");
                aadharfield.focus();
                aadharfield.val("");
                return false;
            }
        }


        var aadharCard = aadharfield.val();
        var aadharCard_cc = validateVerhoeff(aadharCard);
        if (aadharCard_cc != 0) {
            alert("Please enter Correct Aadhar (UID)");
            aadharfield.focus();
            aadharfield.val("");
            return false;
        }


        for (var i = 0; i <= (aadharCard_cc.length - 1); i++) {
            var theChar = aadharCard_cc.substring(i, i + 1);
            if (!((theChar >= '0' && theChar <= '9'))) {
                alert("Enter Aadhar No Correctly");
                aadharfield.focus();
                aadharfield.val("");
                return false;
            }
        }

        if (document.getElementById('txtAadharNo').value != "") {
            var msg = validateField_aadhar(aadharfield, 'INT', '0', '14', 'Aadhar No.', '');
            if (msg.length > 0) {
                alert(msg);
                aadharfield.focus();
                aadharfield.val("");
                return false;
            }
        }
    }






}


function validateField_aadhar(theField, checkType, minLimit, maxLimit, paraName, splCharString) {

    var ErrMsg = "";
    trimField(theField);
    var fieldValue = theField.value;
    //validation for not to be null
    if (fieldValue == "") {
        state = false;
        ErrMsg = "Enter " + paraName + ".\n";
        return ErrMsg;
    }


    //check for the type of value in the field
    if (checkType == "INT") {
        if (isNaN(fieldValue)) {
            ErrMsg = "Entered data in " + paraName + " field is not a numeric value.\n";
        }

        if (fieldValue.indexOf(".") != -1) {
            ErrMsg = "Entered data for " + paraName + " should not be a decimal value.\n";
        }

        if (GetInt(fieldValue) <= 0) {
            ErrMsg = paraName + " should be greater than 0";
        }
    }
    else if (checkType == "FLOAT") {
        if (isNaN(fieldValue)) {
            ErrMsg = "The " + paraName + " you entered is not a numeric value.\n";
        }

        if (GetFloat(fieldValue) <= 0) {
            ErrMsg = paraName + " should be greater than 0";
        }
    }
    else if (checkType == "STRING") {
        //alert("enter the int zone ");
    }
    else if ((checkType == "STRING-ONLY") && (!isNaN(fieldValue))) {
        ErrMsg = paraName + " should not be a number.";
    }
    else if (checkType == "NAME") {
        if (!isNaN(fieldValue)) {
            ErrMsg = paraName + " should not be a number.";
        }
        else {
            var firstchar = fieldValue.substring(0, 1);
            if (!((firstchar >= 'a' && firstchar <= 'z') || (firstchar >= 'A' && firstchar <= 'Z'))) {
                ErrMsg = "The first character in the " + paraName + " should be an alphabet.";
            }
        }
    }
    else if (checkType == "EMAIL") {
        //alert("enter the EMAIL zone ");
        if (!isEmailId(fieldValue)) {
            ErrMsg = "Enter a valid E-Mail address\n";
            //ErrMsg +="	ex: \" prasad@hydbad.tcs.co.in \" ";
        }
    }
    else if (checkType == "IPADDRESS") {
        if (!isIpAddress(fieldValue)) {
            ErrMsg = "Enter valid IP address.\n";
        }
    }
    else if (checkType == "WEBADDRESS") {
        if (fieldValue.indexOf(".") < 0) {
            ErrMsg = "Enter valid Web address.";
        }
        else {
            var arr = fieldValue.split('.');

            if (arr.length < 3)
                ErrMsg = "Enter valid Web address.";

            for (i = 0; i < arr.length; i++) {
                if (arr[i].length == 0) {
                    ErrMsg = "Enter valid Web address.";
                    break;
                }
            }
        }
    }


    if (ErrMsg != '')
        return ErrMsg;

    //validation forthe length if given the length	
    if ((maxLimit != "") && (!isNaN(maxLimit)))
        if (fieldValue.length > maxLimit) {

            ErrMsg = "The " + paraName + " you entered should not be longer than " + maxLimit + " characters.";

        }

    if (fieldValue.length <= minLimit) {

        ErrMsg = "The " + paraName + " you entered must be longer than " + minLimit + " characters.";

    }




    if (checkSplCharsExist(fieldValue, splCharString)) {
        ErrMsg = "The " + paraName + " you entered should not have any special character.";
    }

    return ErrMsg;
}




//for only past and current date format

function DateValidation_forpastandcurrent(dob, disstr) {
    var DOB = dob.val();
    //alert(DOB);
    if (!DOB.match(/^(0[1-9]|[12][0-9]|3[01])[\/.](?:(0[1-9]|1[012])[\/.](19|20)[0-9]{2})$/)) {
        alert("Please Select Valid " + disstr + " ");
        dob.focus();
        dob.val("");
        return false;
    }

    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if (regs = DOB.match(re)) {
        // day value between 1 and 31
        if (regs[1] < 1 || regs[1] > 31) {
            alert("Invalid Value for Day: " + regs[1]);
            dob.focus();
            dob.val("");
            return false;
        }
        // month value between 1 and 12
        if (regs[2] < 1 || regs[2] > 12) {
            alert("Invalid Value for Month: " + regs[2]);
            dob.focus();
            dob.val("");
            return false;
        }
        // year value between 1902 and 2016
        var prdate = new Date();

        if (regs[3] < 1902) {
            alert("Invalid Value for Year: " + regs[3] + " - Must be greater than 1902 .");
            dob.focus();
            dob.val("");
            return false;
        }


        if (regs[3] > (prdate).getFullYear()) {

            alert(disstr + " should be Less  than Current Date");
            dob.focus();
            dob.val("");
            return false;
        }




        if (regs[3] == (prdate).getFullYear()) {

            if ((parseFloat(regs[2]) - 1) > (prdate).getMonth()) {

                alert(disstr + " should be Less  than Current Date");
                dob.focus();
                dob.val("");
                return false;
            }
        }




        if (regs[3] == (prdate).getFullYear()) {

            if ((parseFloat(regs[2]) - 1) == (prdate).getMonth()) {


                var PresentDate = (prdate).getDate();
                if (parseInt(regs[1]) > parseInt(PresentDate)) {
                    alert(disstr + " should be Less  than Current Date");
                    dob.focus();
                    dob.val("");
                    return false;
                }
            }
        }






    }
    else {
        alert("Invalid Date Format: " + DOB);
        dob.focus();
        dob.val("");
        return false;
    }

}




function compareonedatfield_withdate_customisedob(txtFromDate, txtToDate, fromstr, tostr) {


    //alert(txtFromDate.val() + "," + txtToDate.val());

    var FDATE = txtFromDate.val();
    var TDATE = txtToDate.val();

    //  alert(FDATE + "," + TDATE);

    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;



    if (regsFROM = FDATE.match(re)) {

        // alert("regs=" + regs);
        if (regsTO = TDATE.match(re)) {

            if (regsTO[3] < regsFROM[3]) {

                alert("Please Select " + tostr + " Date Greater than " + fromstr + " Date");
                txtToDate.focus();
                txtToDate.val("");
                return false;
            }
            if (regsTO[3] == regsFROM[3]) {
                if (regsTO[2] < regsFROM[2]) {
                    alert("Please Select " + tostr + " Date Greater than " + fromstr + " Date");
                    txtToDate.focus();
                    txtToDate.val("");
                    return false;
                }
            }
            if (regsTO[3] == regsFROM[3]) {
                if (regsTO[2] == regsFROM[2]) {
                    if (regsTO[1] < regsFROM[1]) {
                        alert("Please select " + tostr + " Date Greater than " + fromstr + " Date");
                        txtToDate.focus();
                        txtToDate.val("");
                        return false;
                    }
                }
            }
        }
    }


}


function MobilenoTesting_alert_with789(mobileno, alertmsg, maxlength) {

    if (parseFloat(mobileno.val()) == 0) {

        alert("Please don't allow 0 value in " + alertmsg);
        mobileno.focus();
        mobileno.val("");
        return false;
    }



    if (!(mobileno.val().charAt(0) == "9" || mobileno.val().charAt(0) == "8" || mobileno.val().charAt(0) == "7")) {
        alert(alertmsg + " Starts with 7 or 8 or 9 only  ");
        mobileno.focus();
        mobileno.val("");
        return false;
    }



    var moblen = mobileno.val().length;


    if ((moblen > 9) && (moblen < maxlength)) {
    }
    else {


        if ((moblen < 9)) {
            alert(alertmsg + " Length Must be  Longer than 9 Digits");
            mobileno.focus();
            mobileno.val("");
            return false;
        }

        if ((moblen > maxlength)) {
            alert(alertmsg + " Length Must be  Less than " + maxlength + " Digits");
            mobileno.focus();
            mobileno.val("");
            return false;
        }
    }



}

//for alpha numeric

function Valtxtfirstchar_alphabetonly(evt, obj) {


    if (obj.value.length == 0) {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

        if (charCode == 32) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }


        if (charCode == 46) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }



        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }
    }
    else {




    }












}

function ValidateTextBox_onlyalphabets(textbox, alert_msg) {

    var textbox_val = textbox.val();

    if (textbox_val.length < 2) {

        alert("Please Enter Minimum Two Characters in  " + alert_msg + ".");
        textbox.focus();
        return false;
    }



    if (textbox_val.search(/[a-zA-Z]/i) < 0) {

        alert("Please Enter Atleast One Alphabet in " + alert_msg + ". ");
        textbox.focus();
        textbox.val("");
        return false;

    }





    var charcode_posit0 = textbox_val.charAt(0);

    //alert("position=" + textbox_val + "," + charcode_posit0);

    if (charcode_posit0.search(/[a-zA-Z]/i) < 0) {

        alert("Please Enter " + alert_msg + " Start's With Alphabet/Number . ");
        textbox.focus();
        textbox.val("");
        return false;

    }




}




function empidValidate(empid, alertmsg,  mandatory) {



    if (empid.val() == "") {
        if (mandatory == "1") {
            alert("Please enter " + alertmsg);
            empid.focus();
            empid.val("");
            return false;

        }


    }

    else {

        if (parseFloat(empid.val()) == 0) {

            alert("Please enter valid " + alertmsg);
            empid.focus();
            empid.val("");
            return false;
        }

        if (empid.val().length < 4) {

            alert("Please enter minimum 4 characters in " + alertmsg);
            empid.focus();
            empid.val("");
            return false;
        }

    }
}







function Number_Validate(empid, alertmsg,  mandatory) {



    if (empid.val() == "") {
        if (mandatory == "1") {
            alert("Please enter " + alertmsg);
            empid.focus();
            empid.val("");
            return false;

        }


    }

    else {

        if (parseFloat(empid.val()) == 0) {

            alert("Please enter valid " + alertmsg);
            empid.focus();
            empid.val("");
            return false;
        }



    }
}





function validateprogress_deta_New(txtttlscope, alertmsg, mandatory) {


    var result = true;


    //alert(txtttlscope_val);


    if (txtttlscope.val() == "") {
        if (mandatory == "1") {
            alert("Please enter " + alertmsg);
            txtttlscope.focus();
            txtttlscope.val("");
            return false;

        }


    }

    else {

        var txtttlscope_val = txtttlscope.val();


        if (parseFloat(txtttlscope_val) == 0) {

            alert("Please don't enter  0 value in " + alertmsg);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;

        }

        if (parseFloat(txtttlscope_val) > 100) {


            alert("Please don't enter more than 100 in " + alertmsg);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;

        }


        //for restrict only one dot

        var dotcunt = 0;

        for (var i = 0; i < txtttlscope_val.length; i++) {

            if (txtttlscope_val[i] == '.') {

                dotcunt = dotcunt + 1;

            }

        }


        if (dotcunt > 1) {


            alert("Please don't enter . more than one time in " + alertmsg);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;

        }
        else if (dotcunt == 1) {


            var dotplace = (txtttlscope_val.indexOf(".") + 1);


            var afterdot = txtttlscope_val.length - dotplace;



            if (afterdot > 2) {

                alert("Please don't enter decimal point more than 2 in " + alertmsg);
                txtttlscope.val("");
                txtttlscope.focus();

                result = false;

            }





        }
        else {
        }





    }


    return result;


}



function ValidateTextBox_New(textbox, alert_msg, mandatory) {


    if (textbox.val() == "") {
        if (mandatory == "1") {
            alert("Please enter " + alert_msg);
            textbox.focus();
            textbox.val("");
            return false;

        }


    }

    else {

        var textbox_val = textbox.val();

        //        if (textbox_val.length < 2) {

        //            alert("Please enter minimum two characters in  " + alert_msg + ".");
        //            textbox.focus();
        //            return false;
        //        }



        if (textbox_val.search(/[a-zA-Z]/i) < 0) {

            alert("Please enter atleast one alphabet in " + alert_msg + ". ");
            textbox.focus();
            textbox.val("");
            return false;

        }





        var charcode_posit0 = textbox_val.charAt(0);

        //alert("position=" + textbox_val + "," + charcode_posit0);

        if (charcode_posit0.search(/[a-zA-Z0-9]/i) < 0) {

            alert("Please enter " + alert_msg + " start's with alphabet/number . ");
            textbox.focus();
            textbox.val("");
            return false;

        }
    }




}

function OnlyfutureData_New(dob, txtval, mandatory) {
    if (dob.val() == "") {
        if (mandatory == "1") {
            alert("Please select " + txtval);
            dob.focus();
            dob.val("");
            return false;

        }


    }

    else {

        var DOB = dob.val();

        // alert(DOB, txtval);

        if (!DOB.match(/^(0[1-9]|[12][0-9]|3[01])[\/.](?:(0[1-9]|1[012])[\/.](19|20)[0-9]{2})$/)) {
            alert("Please enter valid " + txtval + " date");
            dob.focus();
            dob.val();
            return false;
        }

        re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
        if (regs = DOB.match(re)) {
            // day value between 1 and 31
            if (regs[1] < 1 || regs[1] > 31) {
                alert("Invalid value for day: " + regs[1]);
                dob.focus();
                dob.val();
                return false;
            }
            // month value between 1 and 12
            if (regs[2] < 1 || regs[2] > 12) {
                alert("Invalid value for month: " + regs[2]);
                dob.focus();
                dob.val();
                return false;
            }
            // year value between 1902 and 2016
            var prdate = new Date();

            if (regs[3] < 1902) {
                alert("Invalid value for year: " + regs[3] + " - must be greater than 1902 .");
                dob.focus();
                dob.val();
                return false;
            }
            if (regs[3] == (prdate).getFullYear()) {

                if ((parseFloat(regs[2]) - 1) == (prdate).getMonth()) {
                    var PresentDate = (prdate).getDate();
                    if (parseFloat(regs[1]) < parseFloat(PresentDate)) {
                        alert("Date should be greater  than current date");
                        dob.focus();
                        dob.val();
                        return false;
                    }
                }
            }

        }
        else {
            alert("Invalid date format: " + DOB);
            dob.focus();
            dob.val();
            return false;
        }

    }
}


function Valtxtfirstchar_alphanumeric_new(evt, obj) {


    if (obj.value.length == 0) {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

        if (charCode == 32) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }


        if (charCode == 46) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }



        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && (charCode < 47 || charCode > 57)) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }
    }
    else {




    }












}


//for alphanumericwithspace

function keypress_alphanumericwithspace(evt, obj) {

    // alert(evt.charCode);

    if (obj.value.length == 0) {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

        //                //for space
        //                if (charCode == 32) {
        //                    obj.value = obj.value.slice(0, -1);
        //                    return false;
        //                }


        //                //for .
        //                if (charCode == 46) {
        //                    obj.value = obj.value.slice(0, -1);
        //                    return false;
        //                }

        //                //for ,
        //                if (charCode == 44) {
        //                    obj.value = obj.value.slice(0, -1);
        //                    return false;
        //                }



        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && (charCode < 47 || charCode > 57)) {
          //  obj.value = obj.value.slice(0, -1);
            return false;
        }
    }

    else {

        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));


        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && (charCode != 32) && (charCode < 47 || charCode > 57)) {
         //   obj.value = obj.value.slice(0, -1);
            return false;
        }
    }

}


//for alphanumericwithspace

function keypress_firstcharalphanumericafterallowspl(evt, obj) {

    // alert(evt.charCode);

    if (obj.value.length == 0) {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

        //                //for space
        //                if (charCode == 32) {
        //                    obj.value = obj.value.slice(0, -1);
        //                    return false;
        //                }


        //                //for .
        //                if (charCode == 46) {
        //                    obj.value = obj.value.slice(0, -1);
        //                    return false;
        //                }

        //                //for ,
        //                if (charCode == 44) {
        //                    obj.value = obj.value.slice(0, -1);
        //                    return false;
        //                }



        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && (charCode < 47 || charCode > 57)) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }
    }

    else {


    }

}





function isonlydecimalNumberKeytouch_allowingzero(evt, obj) {

    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

    if (obj.value.length == 0) {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

        //                        if (charCode == 48) {
        //                            obj.value = obj.value.slice(0, -1);
        //                            return false;
        //                        }


        if (charCode == 46) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }
    }

    //  alert(charCode);
    if ((charCode > 31 && (charCode < 47 || charCode > 57) && charCode != 46)) {
        obj.value = obj.value.slice(0, -1);
        return false;
    }

    return true;

}



function validateprogress_deta_allowingzero(txtttlscope, txtbname) {


    var result = true;

    var txtttlscope_val = txtttlscope.val();
    //alert(txtttlscope_val);

    if (txtttlscope_val.length > 0) {




        //                if (parseFloat(txtttlscope_val) == 0) {

        //                    alert("Please Don't Enter  0 value in " + txtbname);
        //                    txtttlscope.val("");
        //                    txtttlscope.focus();

        //                    result = false;

        //                }

        if (parseFloat(txtttlscope_val) > 100) {


            alert("Please Don't Enter More than 100 in " + txtbname);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;

        }


        //for restrict only one dot

        var dotcunt = 0;

        for (var i = 0; i < txtttlscope_val.length; i++) {

            if (txtttlscope_val[i] == '.') {

                dotcunt = dotcunt + 1;

            }

        }


        if (dotcunt > 1) {


            alert("Please Don't Enter . More than One Time in " + txtbname);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;

        }
        else if (dotcunt == 1) {


            var dotplace = (txtttlscope_val.indexOf(".") + 1);


            var afterdot = txtttlscope_val.length - dotplace;



            if (afterdot > 2) {

                alert("Please Don't Enter Decimal Point More than 2 in " + txtbname);
                txtttlscope.val("");
                txtttlscope.focus();

                result = false;

            }





        }
        else {


        }




    }


    return result;


}


function validate_Currency_new(txtttlscope, txtbname, mandatory) {


    var result = true;

    var txtttlscope_val = txtttlscope.val();

    if (txtttlscope_val == "") {
        if (mandatory == "1") {

            alert("Please enter " + txtbname);
            txtttlscope.focus();
            result = false;

        }

    }
    else {
        if (txtttlscope_val.length > 0) {




            if (parseFloat(txtttlscope_val) == 0) {

                alert("Please don't enter 0 in " + txtbname);
                txtttlscope.val("");
                txtttlscope.focus();

                result = false;

            }




            //for restrict only one dot

            var dotcunt = 0;

            for (var i = 0; i < txtttlscope_val.length; i++) {

                if (txtttlscope_val[i] == '.') {

                    dotcunt = dotcunt + 1;

                }

            }


            if (dotcunt > 1) {


                alert("Only one decimal point(.) is allowed in the " + txtbname);
                txtttlscope.val("");
                txtttlscope.focus();

                result = false;

            }
            else if (dotcunt == 1) {


                var dotplace = (txtttlscope_val.indexOf(".") + 1);


                var afterdot = txtttlscope_val.length - dotplace;



                if (afterdot > 2) {

                    alert("Please don't enter more than 2 digits after decimal point(.) in " + txtbname);
                    txtttlscope.val("");
                    txtttlscope.focus();

                    result = false;

                }





            }
            else {


            }




        }
    }


    return result;


}


function validatedecimal_allowingzero(txtttlscope, txtbname, mandatory) {


    var result = true;

    var txtttlscope_val = txtttlscope.val();
    if (txtttlscope_val.length == 0) {
        if (mandatory == "1") {

            alert("Please enter " + txtbname);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;



        }
    }
    else {

        var regExp = /^[0-9.]/;

        if (regExp.test(txtttlscope_val)) {


            if (parseFloat(txtttlscope_val) == 0) {

                alert("Please Don't Enter  0 value in " + txtbname);
                txtttlscope.val("");
                txtttlscope.focus();

                result = false;

            }
            else {
                //for restrict only one dot

                var dotcunt = 0;

                for (var i = 0; i < txtttlscope_val.length; i++) {

                    if (txtttlscope_val[i] == '.') {

                        dotcunt = dotcunt + 1;

                    }

                }


                if (dotcunt > 1) {


                    alert("Please Don't Enter . More than One Time in " + txtbname);
                    txtttlscope.val("");
                    txtttlscope.focus();

                    result = false;

                }
                else if (dotcunt == 1) {


                    var dotplace = (txtttlscope_val.indexOf(".") + 1);


                    var afterdot = txtttlscope_val.length - dotplace;



                    if (afterdot > 2) {

                        alert("Please Don't Enter Decimal Point More than 2 in " + txtbname);
                        txtttlscope.val("");
                        txtttlscope.focus();

                        result = false;

                    }





                }
                else {


                }
            }
        }
        else {
            alert("Please enter only decimal value in " + txtbname);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;

        }





        //        if (parseFloat(txtttlscope_val) > 100) {


        //            alert("Please Don't Enter More than 100 in " + txtbname);
        //            txtttlscope.val("");
        //            txtttlscope.focus();

        //            result = false;

        //        }


       








    }
    //alert(txtttlscope_val);

  



    return result;


}

function isonlydecimalNumberKeytouch_allowingzero_allow_NA(evt, obj) {

    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

    if (obj.value.length == 0) {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

        //                                if (charCode == 78) {
        //                                    obj.value = obj.value.slice(0, -1);
        //                                    return false;
        //                                }


        //        if (charCode == 46) {
        //            obj.value = obj.value.slice(0, -1);
        //            return false;
        //        }

        if ((charCode < 48 || charCode > 57) && (charCode != 78) && (charCode != 110) && (charCode != 65) && (charCode != 97)) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }

    }

    //  alert(charCode);
    if ((charCode < 48 || charCode > 57) && (charCode != 78) && (charCode != 110) && (charCode != 65) && (charCode != 97) && (charCode != 46)) {
        obj.value = obj.value.slice(0, -1);
        return false;
    }

    return true;

}


function validatedecimal_allowingzero_Allow_NA(txtttlscope, txtbname, mandatory) {


    var result = true;

    var txtttlscope_val = txtttlscope.val();
    // alert(txtttlscope_val);

    if (txtttlscope_val.length > 0) {

        var alphacunt = 0;

        //  alert("test=" + txtttlscope_val.search(/[a-zA-Z]/i));
        if (txtttlscope_val.search(/[a-zA-Z]/i) == 0) {

            alphacunt = alphacunt + 1;
            //            alert("Please Enter Atleast One Alphabet in " + alert_msg + ". ");
            //            textbox.focus();
            //            textbox.val("");
            //            return false;

        }

        //  alert("alphacunt=" + alphacunt);
        //
        if (alphacunt > 0) {



            if ((txtttlscope_val == "NA") || (txtttlscope_val == "na")) {
            }
            else {

                alert("Please Enter only NA/na other wise numbers in " + txtbname + ". ");
                txtttlscope.val("");
                txtttlscope.focus();
                return false;

            }

        }


        //                if (parseFloat(txtttlscope_val) == 0) {

        //                    alert("Please Don't Enter  0 value in " + txtbname);
        //                    txtttlscope.val("");
        //                    txtttlscope.focus();

        //                    result = false;

        //                }

        //        if (parseFloat(txtttlscope_val) > 100) {


        //            alert("Please Don't Enter More than 100 in " + txtbname);
        //            txtttlscope.val("");
        //            txtttlscope.focus();

        //            result = false;

        //        }


        //for restrict only one dot

        var dotcunt = 0;

        for (var i = 0; i < txtttlscope_val.length; i++) {

            if (txtttlscope_val[i] == '.') {

                dotcunt = dotcunt + 1;

            }

        }


        if (dotcunt > 1) {


            alert("Please Don't Enter . More than One Time in " + txtbname);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;

        }
        else if (dotcunt == 1) {


            var dotplace = (txtttlscope_val.indexOf(".") + 1);


            var afterdot = txtttlscope_val.length - dotplace;



            if (afterdot > 2) {

                alert("Please Don't Enter Decimal Point More than 2 in " + txtbname);
                txtttlscope.val("");
                txtttlscope.focus();

                result = false;

            }





        }
        else {


        }




    }

    else {

        if (mandatory == "1") {

            alert("Please enter " + txtbname);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;



        }
    }


    return result;


}

function ValidateJustEnter(txtttlscope, txtbname, mandatory) {
    var result = true;

    if (txtttlscope.val() == "") {

        if (mandatory == "1") {

            alert("Please enter " + txtbname);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;



        }
    }
    return result;
}




function isonlydecimalNumberKeytouch_allowingzero_allow_dashsymbol(evt, obj) {

    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

    if (obj.value.length == 0) {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

        //                                if (charCode == 78) {
        //                                    obj.value = obj.value.slice(0, -1);
        //                                    return false;
        //                                }


        //        if (charCode == 46) {
        //            obj.value = obj.value.slice(0, -1);
        //            return false;
        //        }

        if ((charCode < 48 || charCode > 57) && (charCode != 45)) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }

    }

    //  alert(charCode);it allows 0-9 - . only
    if ((charCode < 48 || charCode > 57) && (charCode != 45) && (charCode != 46)) {
        obj.value = obj.value.slice(0, -1);
        return false;
    }

    return true;

}


function ValidateTextBox_withminlength(textbox, alert_msg, mandatory) {


    if (textbox.val() == "") {
        if (mandatory == "1") {
            alert("Please enter " + alert_msg);
            textbox.focus();
            textbox.val("");
            return false;

        }


    }

    else {

        var textbox_val = textbox.val();

        if (textbox_val.length < 2) {

            alert("Please enter minimum two characters in  " + alert_msg + ".");
            textbox.focus();
            return false;
        }



        if (textbox_val.search(/[a-zA-Z]/i) < 0) {

            alert("Please enter atleast one alphabet in " + alert_msg + ". ");
            textbox.focus();
            textbox.val("");
            return false;

        }





        var charcode_posit0 = textbox_val.charAt(0);

        //alert("position=" + textbox_val + "," + charcode_posit0);

        if (charcode_posit0.search(/[a-zA-Z]/i) < 0) {

            alert("Please enter " + alert_msg + " start's with alphabet only . ");
            textbox.focus();
            textbox.val("");
            return false;

        }
    }




}




function MobilenoTesting_alert_New(mobileno, alertmsg, maxlength, mandatory) {

    if (mobileno.val() == "") {

        if (mandatory == "1") {
            alert("Please enter value in " + alertmsg);
            mobileno.focus();
            mobileno.val("");
            return false;

        }

    }
    else {


        if (parseFloat(mobileno.val()) == 0) {

            alert("Please don't allow 0 value in " + alertmsg);
            mobileno.focus();
            mobileno.val("");
            return false;
        }



        if (!(mobileno.val().charAt(0) == "9" || mobileno.val().charAt(0) == "8" || mobileno.val().charAt(0) == "7" || mobileno.val().charAt(0) == "6")) {
            alert(alertmsg + " Starts with 6/7/8/9 only  ");
            mobileno.focus();
            mobileno.val("");
            return false;
        }



        var moblen = mobileno.val().length;


        if ((moblen > 9) && (moblen <= maxlength)) {
        }
        else {


            if ((moblen < 9)) {
                alert(alertmsg + " Length Must be  Longer than 9 Digits");
                mobileno.focus();
                mobileno.val("");
                return false;
            }

            if ((moblen > maxlength)) {
                alert(alertmsg + " Length Must be  Less than " + maxlength + " Digits");
                mobileno.focus();
                mobileno.val("");
                return false;
            }
        }
    }



}


function Validateemailid_new(emailid, alertmsg, mandatory) {

    var result = true;
    if (emailid.val() == "") {

        if (mandatory == "1") {
            alert("Please enter " + alertmsg);
            emailid.focus();
            result = false;

        }

    }
    else {

        if (!isEmailId(emailid.val())) {


            alert("Please enter valid " + alertmsg);
            emailid.focus();
            emailid.val("");
            result = false;
        }


    }

    return result;
}

function keypress_onlyalphabets(evt, obj) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));


    if (obj.value.length == 0) {

        if (charCode == 32) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }


        if (charCode == 46) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }



        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }
    }
    else {

        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && (charCode != 32)) {
            // obj.value = obj.value.slice(0, -1);
            return false;
        }


    }












}



function ValidateTextBox_bclUserid(textbox, alert_msg, mandatory) {


    if (textbox.val() == "") {
        if (mandatory == "1") {
            alert("Please enter " + alert_msg);
            textbox.focus();
            textbox.val("");
            return false;

        }


    }

    else {

        var textbox_val = textbox.val();

        if (textbox_val.length < 2) {

            alert("Please enter minimum two characters in  " + alert_msg + ".");
            textbox.focus();
            return false;
        }



        if (textbox_val.search(/[a-zA-Z0-9]/i) < 0) {

            alert("Please enter atleast one alphabet in " + alert_msg + ". ");
            textbox.focus();
            textbox.val("");
            return false;

        }





        var charcode_posit0 = textbox_val.charAt(0);

        //alert("position=" + textbox_val + "," + charcode_posit0);

        if (charcode_posit0.search(/[a-zA-Z0-9]/i) < 0) {

            alert("Please enter " + alert_msg + " start's with alphabet/number only . ");
            textbox.focus();
            textbox.val("");
            return false;

        }
    }




}




function Validate_NumberNew(txtbox, alertmsg, mandatory) {


    if (txtbox.val() == "") {
        if (mandatory == "1") {
            alert("Please enter value in " + alertmsg);
            txtbox.focus();
            txtbox.val("");
            return false;
        }
    }
    else {

        if (parseFloat(txtbox.val()) == 0) {

            alert("Please don't allow 0 value in " + alertmsg);
            txtbox.focus();
            txtbox.val("");
            return false;
        }

        var regExp = /^[0-9]/;

        if (regExp.test(parseFloat(txtbox.val()))) {
        }
        else {
            alert("Please enter only numerical value in " + alertmsg);
            txtbox.focus();
            txtbox.val("");
            return false;
        }



    }
}



function BindSingleDatepicker_maxdateiscurdate(ele) {

    ele.daterangepicker({
        format: 'DD/MM/YYYY',
        showDropdowns: true,
        singleDatePicker: true,
        maxDate: new Date()
    });


}


function BindSingleDatepicker(ele) {

    ele.daterangepicker({
        format: 'DD/MM/YYYY',
        showDropdowns: true,
        singleDatePicker: true,
        minDate: new Date()
    });


}
function BindSingleDatepickerWith_MinDate(ele, mindate) {

    ele.daterangepicker({
        format: 'DD/MM/YYYY',
        showDropdowns: true,
        singleDatePicker: true,
        minDate: mindate
    });
}
function BindSingleDatepickerWithMaxDate(ele, maxDate) {

    ele.daterangepicker({
        format: 'DD/MM/YYYY',
        showDropdowns: true,
        singleDatePicker: true,
        maxDate: maxDate
    });
}
function BindSingleDatepicker_WithMinDate_MaxCurrDate(ele, mindate) {

    ele.daterangepicker({
        format: 'DD/MM/YYYY',
        showDropdowns: true,
        singleDatePicker: true,
        maxDate: new Date(),
        minDate: mindate
    });
}

function BindSingleDatepicker_WithMinDate_MaxDate(ele, mindate,maxdate) {

    ele.daterangepicker({
        format: 'DD/MM/YYYY',
        showDropdowns: true,
        singleDatePicker: true,
        maxDate: maxdate,
        minDate: mindate
    });
}



function GetTodaysDate() {

    var date11 = new Date();

    var date = (date11.getDate()) < 10 ? '0' + (date11.getDate()) : '' + (date11.getDate());
    var mnth = (date11.getMonth() + 1) < 10 ? '0' + (date11.getMonth() + 1) : '' + (date11.getMonth() + 1);

    var date1 = (date) + "/" + (mnth) + "/" + date11.getFullYear();
    return date1; ;
}


function BindTimePicker(ele) {
//12:00 AM
    ele.datetimepicker({
        format: 'LT',
        useCurrent:true
      // defaultDate:new Date()
       
//        widgetPositioning:
//        {
//        vertical:'bottom'
//        }

        //  format:'HH:mm'
    });


}

function GEt24hourwith_mnuiteformat(timepickval)
{
       time_result = null;
    var matches = timepickval.match(/^(\d{1,2}):(\d{1,2}) (\w{2})/);
    if (matches != null && matches.length == 4)
    {
    
        Hour_result = parseInt(matches[1]);
        Min_result=parseInt(matches[2]);
        if (matches[3] == 'PM') {
            if (Hour_result == 12) {
                Hour_result += 1;
            }
            else {
                Hour_result += 12;
            }
        }
        else if(matches[3] == 'AM')
        {
        if(Hour_result==12)
        {
        Hour_result=0;
        }
        }
        
        time_result=(Hour_result*60)+Min_result;
        
       // alert(time_result);
    }
    return time_result;
}



function ComareTwotimevalues(STtime_ele,Endtime_el,sttime_str,endtime_str,mandatory)
{
var result=true;
        if(Endtime_el.val()=="")
        {
            if(mandatory=="1")
            {
               // alert("Please select "+endtime_str);
               // Endtime_el.focus();
                //result= false;
            }
        }
        else{

                             if(STtime_ele.val()=="")
                            {
                                 alert("Please select "+sttime_str);
                                    STtime_ele.focus();
                                    result= false;
                            }   
                            else{

                                STTIME_24FORMAT=GEt24hourwith_mnuiteformat(STtime_ele.val());
                                 ENDTIME_24FORMAT=GEt24hourwith_mnuiteformat(Endtime_el.val());


                                 if(STTIME_24FORMAT>ENDTIME_24FORMAT)
                                 {
                                 alert("Please select "+endtime_str+" is greater than "+sttime_str);
                                    Endtime_el.focus();
                                    Endtime_el.val("");
                                    result= false;
                                 }
                            }                            
                
        }

        return result;
    }


    function ValidateTextBox_withminlength_alowfirstcharnumber(textbox, alert_msg, mandatory) {


        if (textbox.val() == "") {
            if (mandatory == "1") {
                alert("Please enter " + alert_msg);
                textbox.focus();
                textbox.val("");
                return false;

            }


        }

        else {

            var textbox_val = textbox.val();

            if (textbox_val.length < 2) {

                alert("Please enter minimum two characters in  " + alert_msg + ".");
                textbox.focus();
                return false;
            }



            if (textbox_val.search(/[a-zA-Z0-9]/i) < 0) {

                alert("Please enter atleast one alphabet/number in " + alert_msg + ". ");
                textbox.focus();
                textbox.val("");
                return false;

            }





            var charcode_posit0 = textbox_val.charAt(0);

            //alert("position=" + textbox_val + "," + charcode_posit0);

            if (charcode_posit0.search(/[a-zA-Z0-9]/i) < 0) {

                alert("Please enter " + alert_msg + " start's with alphabet/number only . ");
                textbox.focus();
                textbox.val("");
                return false;

            }
        }




    }


    function BindSingleDatepickerWith_MaxCurrentDate(ele) {

        ele.daterangepicker({
            format: 'DD/MM/YYYY',
            showDropdowns: true,
            singleDatePicker: true,
            maxDate: new Date()
        });


    }



    function comparetodatewith_fromdate(txtFromDate, txtToDate, fromstr, tostr,mandatory) {


        //alert(txtFromDate.val() + "," + txtToDate.val());

        var FDATE = txtFromDate.val();
        var TDATE = txtToDate.val();


        if (TDATE=="") {
            if (mandatory == "1") {
                alert("Please Select " + tostr + " Date ");
                txtToDate.focus();
                txtToDate.val("");
                return false;
            }
        }
        else{

        //  alert(FDATE + "," + TDATE);

        re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;



        if (regsFROM = FDATE.match(re)) {

            // alert("regs=" + regs);
            if (regsTO = TDATE.match(re)) {

                if (regsTO[3] < regsFROM[3]) {

                    alert("Please Select " + tostr + " Date Greater than " + fromstr + " Date");
                    txtToDate.focus();
                    txtToDate.val("");
                    return false;
                }
                if (regsTO[3] == regsFROM[3]) {
                    if (regsTO[2] < regsFROM[2]) {
                        alert("Please Select " + tostr + " Date Greater than " + fromstr + " Date");
                        txtToDate.focus();
                        txtToDate.val("");
                        return false;
                    }
                }
                if (regsTO[3] == regsFROM[3]) {
                    if (regsTO[2] == regsFROM[2]) {
                        if (regsTO[1] < regsFROM[1]) {
                            alert("Please select " + tostr + " Date Greater than " + fromstr + " Date");
                            txtToDate.focus();
                            txtToDate.val("");
                            return false;
                        }
                    }
                }
            }
        }
        }


}




function Validate_licenseno(textbox, alert_msg, mandatory) {

//15 chars first 2 char alphabets13 char numbers AP1234567897456
    if (textbox.val() == "") {
        if (mandatory == "1") {
            alert("Please enter " + alert_msg);
            textbox.focus();
            textbox.val("");
            return false;

        }


    }

    else {

        var textbox_val = textbox.val();

        if (textbox_val.length < 2) {

            alert("Please enter minimum two characters in  " + alert_msg + ".");
            textbox.focus();
            return false;
        }



        if (textbox_val.search(/[a-zA-Z0-9]/i) < 0) {

            alert("Please enter atleast one alphabet/number in " + alert_msg + ". ");
            textbox.focus();
            textbox.val("");
            return false;

        }


        //first 2 chars alphabet


        var charcode_posit12 = textbox_val.charAt(0) ;

        //alert("position=" + textbox_val + "," + charcode_posit0);

        if (charcode_posit12.search(/[a-zA-Z0-9]/i) < 0) {

            alert("Please enter " + alert_msg + " start's with alphabet/number only . ");
            textbox.focus();
            textbox.val("");
            return false;

        }

        if ((textbox_val.match(/([a-zA-Z])/g) != "") && (textbox_val.match(/([a-zA-Z])/g) != null)) {

          //  alert(textbox_val.match(/([a-zA-Z])/g));

            if ((textbox_val.match(/([a-zA-Z])/g)).length < 2) {

                alert("Please enter atleast two alphabet in " + alert_msg + ". ");
                textbox.focus();
                textbox.val("");
                return false;

            }
        }
        else {
            alert("Please enter atleast two alphabet in " + alert_msg + ". ");
            textbox.focus();
            textbox.val("");
            return false;
        }

        if (textbox_val.search(/[0-9]/i) < 0) {

            alert("Please enter " + alert_msg + "contains atleast one number  . ");
            textbox.focus();
            textbox.val("");
            return false;

        }

    }




}



function BindSingleDatepicker_maxdateiscurdate_mindateis6daysback(ele) {

    ele.daterangepicker({
        format: 'DD/MM/YYYY',
        showDropdowns: true,
        singleDatePicker: true,
        maxDate: new Date(),
        minDate: SetMinDate_Previous6thday()
    });


}


function SetMinDate_Previous6thday()
{
        var currDate=new Date();
        currDate.setDate(currDate.getDate()-6);

        return currDate;

}



function ValidateTextBox_NewAlphaNumeric(textbox, alert_msg, mandatory) {


    if (textbox.val() == "") {
        if (mandatory == "1") {
            alert("Please enter " + alert_msg);
            textbox.focus();
            textbox.val("");
            return false;
        }
    }

    else {

        var textbox_val = textbox.val();
        if (textbox_val.search(/[a-zA-Z]/i) < 0) {

            alert("Please enter atleast one alphabet in " + alert_msg + ". ");
            textbox.focus();
            textbox.val("");
            return false;

        }

        var charcode_posit0 = textbox_val.charAt(0);

        if (charcode_posit0.search(/[a-zA-Z0-9]/i) < 0) {

            alert("Please enter " + alert_msg + " start's with alphabet/number. ");
            textbox.focus();
            textbox.val("");
            return false;

        }
        //   var charcode_posit0 = textbox_val.charAt(0);
        var regex = /^[a-zA-Z0-9 ]+$/;

        if (!(regex.test(textbox_val))) {

            alert("Please enter " + alert_msg + " having only alphabet/number. ");
            textbox.focus();
            textbox.val("");
            return false;

        }
    }




}



function ValidateTextBox_NewOnlyStartsWithAlpha(textbox, alert_msg, mandatory) {


    if (textbox.val() == "") {
        if (mandatory == "1") {
            alert("Please enter " + alert_msg);
            textbox.focus();
            textbox.val("");
            return false;

        }


    }

    else {

        var textbox_val = textbox.val();

        //        if (textbox_val.length < 2) {

        //            alert("Please enter minimum two characters in  " + alert_msg + ".");
        //            textbox.focus();
        //            return false;
        //        }



        if (textbox_val.search(/[a-zA-Z]/i) < 0) {

            alert("Please enter atleast one alphabet in " + alert_msg + ". ");
            textbox.focus();
            textbox.val("");
            return false;

        }





        var charcode_posit0 = textbox_val.charAt(0);

        //alert("position=" + textbox_val + "," + charcode_posit0);

        if (charcode_posit0.search(/[a-zA-Z]/i) < 0) {

            alert("Please enter " + alert_msg + " start's with alphabet . ");
            textbox.focus();
            textbox.val("");
            return false;

        }

        //   var charcode_posit0 = textbox_val.charAt(0);
        var regex = /^[a-zA-Z0-9 ]+$/;

        if (!(regex.test(textbox_val))) {

            alert("Please enter " + alert_msg + " having only alphabet/number. ");
            textbox.focus();
            textbox.val("");
            return false;

        }
    }




}



function validatedecimal_allowingzero_new(txtttlscope, txtbname, mandatory) {


    var result = true;

    var txtttlscope_val = txtttlscope.val();
    if (txtttlscope_val.length == 0) {
        if (mandatory == "1") {

            alert("Please enter " + txtbname);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;



        }
    }
    else {

        var regExp = /^[0-9.]/;

        if (regExp.test(txtttlscope_val)) {


            if (parseFloat(txtttlscope_val) == 0) {

              //  alert("Please Don't Enter  0 value in " + txtbname);
             //   txtttlscope.val("");
               // txtttlscope.focus();

              //  result = false;

            }
            else {
                //for restrict only one dot

                var dotcunt = 0;

                for (var i = 0; i < txtttlscope_val.length; i++) {

                    if (txtttlscope_val[i] == '.') {

                        dotcunt = dotcunt + 1;

                    }

                }


                if (dotcunt > 1) {


                    alert("Please Don't Enter . More than One Time in " + txtbname);
                    txtttlscope.val("");
                    txtttlscope.focus();

                    result = false;

                }
                else if (dotcunt == 1) {


                    var dotplace = (txtttlscope_val.indexOf(".") + 1);


                    var afterdot = txtttlscope_val.length - dotplace;



                    if (afterdot > 2) {

                        alert("Please Don't Enter Decimal Point More than 2 in " + txtbname);
                        txtttlscope.val("");
                        txtttlscope.focus();

                        result = false;

                    }





                }
                else {


                }
            }
        }
        else {
            alert("Please enter only decimal value in " + txtbname);
            txtttlscope.val("");
            txtttlscope.focus();

            result = false;

        }





        //        if (parseFloat(txtttlscope_val) > 100) {


        //            alert("Please Don't Enter More than 100 in " + txtbname);
        //            txtttlscope.val("");
        //            txtttlscope.focus();

        //            result = false;

        //        }











    }
    //alert(txtttlscope_val);





    return result;


}