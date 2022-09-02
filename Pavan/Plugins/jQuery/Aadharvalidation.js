

        /*Validation Start*/
        function validateIntField(theField, paraName, isMandatory, minValue, maxValue, minDigitCount, maxDigitCount) {
            var ErrMsg = "";
            trimField(theField);
            var fieldValue = theField.value;
            if (fieldValue == "" && isMandatory) {
                ErrMsg = "Enter " + paraName + ".\n"
            }
            else if (fieldValue == "") {
                ErrMsg = "";
            }
            else if (isNaN(fieldValue)) {
                ErrMsg = "The " + paraName + " you entered should be a numeric value.\n";
            }
            else if (fieldValue.indexOf(".") != -1) {
                ErrMsg = "Entered value for " + paraName + " should not be a decimal value.\n";
            }
            else if (GetInt(fieldValue) < 0) {
                ErrMsg = "Entered value for " + paraName + "  should be a positive value.\n";
            }
            else if (minDigitCount != "" && !isNaN(minDigitCount) && fieldValue.length < minDigitCount) {
                ErrMsg = "The " + paraName + " you enter should be a minimum of " + minDigitCount + " digits.";
            }
            else if (maxDigitCount != "" && !isNaN(maxDigitCount) && fieldValue.length > maxDigitCount) {
                ErrMsg = "The " + paraName + " you entered should be less than or equal to " + maxDigitCount + " digits.";
            }
            else if (minValue != "" && !isNaN(minValue) && GetInt(fieldValue) < minValue) {
                ErrMsg = "The " + paraName + " you entered should be greater than or equal to " + minValue + ".";
            }
            else if (maxValue != "" && !isNaN(maxValue) && GetInt(fieldValue) > maxValue) {
                ErrMsg = "The " + paraName + " you entered should be less than or equal to " + maxValue + ".";
            }
            return ErrMsg;
        }

                //Digits Validation
        function validateFieldforMobile(theField, checkType, minLimit, maxLimit, paraName, splCharString) {

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

                    ErrMsg = "The " + paraName + " you entered should not be longer than " + maxLimit + " digits.";

                }

            if (fieldValue.length <= minLimit) {

                ErrMsg = "The " + paraName + " you entered must be longer than " + minLimit + " digits.";

            }




            if (checkSplCharsExist(fieldValue, splCharString)) {
                ErrMsg = "The " + paraName + " you entered should not have any special character.";
            }

            return ErrMsg;
        }

        function validateFloatField(theField, paraName, isMandatory, minValue, maxValue, precision) {
            var ErrMsg = "";
            trimField(theField);
            var fieldValue = theField.value;
            var portion = "";
            if (fieldValue.indexOf(".") > 0) {
                portion = fieldValue.split('.')[1];
            }
            if (fieldValue == "" && isMandatory) {
                ErrMsg = "Enter " + paraName + ".\n"
            }
            else if (fieldValue == "") {
                ErrMsg = "";
            }
            else if (isNaN(fieldValue)) {
                ErrMsg = "The " + paraName + " you entered should be a numeric value.\n";
            }
            else if (GetFloat(fieldValue) < 0) {
                ErrMsg = "The " + paraName + " you entered should be a positive value.\n";
            }
            else if (precision != "" && !isNaN(precision) && portion.length > precision) {
                ErrMsg = "The " + paraName + " you entered should have only " + precision + " digits after decimal point.";
            }

            else if (minValue != "" && !isNaN(minValue) && GetFloat(fieldValue) < minValue) {
                ErrMsg = "The " + paraName + " you entered should be greater than or equal to " + minValue + ".";
            }
            else if (maxValue != "" && !isNaN(maxValue) && GetFloat(fieldValue) > maxValue) {
                ErrMsg = "The " + paraName + " you entered should be less than or equal to " + maxValue + ".";
            }
            return ErrMsg;
        }

        function validateField(theField, checkType, minLimit, maxLimit, paraName, splCharString) {

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

                    ErrMsg = "The " + paraName + " you entered should not be greater than " + maxLimit + " characters.";

                }

            if (fieldValue.length <= minLimit) {

                ErrMsg = "The " + paraName + " you entered must be greater than " + minLimit + " characters.";

            }




            if (checkSplCharsExist(fieldValue, splCharString)) {
                ErrMsg = "The " + paraName + " you entered should not have any special character.";
            }

            return ErrMsg;
        }




        function trimField(TheField) {
            if ((TheField.type == 'text') || (TheField.type == 'textarea')) {
                var Strfldvalue = TheField.value;
                var Strtrmvalue = "";
                var j = 0;
                for (k = 0; k < Strfldvalue.length; k++) {
                    if (Strfldvalue.charAt(k) == " ") j++;
                    else {
                        if (j < Strfldvalue.length) Strtrmvalue = Strfldvalue.substring(j, Strfldvalue.length);
                        break;
                    }
                }
                TheField.value = Strtrmvalue;
            }
        }

        function trimValue(Strfldvalue, trimChar, direction) {
            var fieldValue = Strfldvalue;
            var j = 0;
            if (direction == "LEFT" || direction == "BOTH") {
                j = 0;
                for (var k = 0; k < fieldValue.length; k++) {
                    if (fieldValue.charAt(k) == " " || fieldValue.charAt(k) == trimChar) j++;
                    else {
                        if (j < fieldValue.length) {
                            fieldValue = fieldValue.substring(j, fieldValue.length);
                        }
                        else {
                            fieldValue = "";
                        }
                        break;
                    }
                }
            }
            if (direction == "RIGHT" || direction == "BOTH") {
                j = fieldValue.length;
                for (var k = fieldValue.length - 1; k >= 0; k--) {
                    if (fieldValue.charAt(k) == " " || fieldValue.charAt(k) == trimChar) {
                        j--;
                    }
                    else {
                        if (j > 0) {
                            fieldValue = fieldValue.substring(0, j);
                        }
                        else {
                            fieldValue = "";
                        }
                        break;
                    }
                }
            }
            return fieldValue;
        }



        function checkSplCharsExist(fieldValue, splCharString) {


            for (var i = 0; i < splCharString.length; i++) {

                if (fieldValue.indexOf(splCharString.charAt(i)) >= 0) {
                    return true;
                }
            }

            return false;

        }


        function GetInt(fieldValue) {
            var intValue = "" + trimValue(fieldValue, '0', 'LEFT');
            if (intValue.l == '') {
                intValue = '0';
            }
            return parseInt(intValue);
        }

        function GetFloat(fieldValue) {
            var floatValue = trimValue(fieldValue, '0', 'LEFT');
            if (floatValue == '') {
                floatValue = '0';
            }
            return parseFloat(floatValue);
        }
        function nospaces(t) {
            if (t.value.match(/\s/g)) {
                alert('Sorry, you are not allowed to enter any spaces');
                t.value = t.value.replace(/\s/g, '');
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
        function getDaysInMonth(Intmonth, Intyear) {
            var Intdays = "";
            if (Intmonth == 1 || Intmonth == 3 || Intmonth == 5 || Intmonth == 7 || Intmonth == 8 || Intmonth == 10 || Intmonth == 12)
                Intdays = 31;
            else if (Intmonth == 4 || Intmonth == 6 || Intmonth == 9 || Intmonth == 11) Intdays = 30;
            else if (Intmonth == 2) {
                if (IsLeapYear(Intyear))
                    Intdays = 29;
                else
                    Intdays = 28;
            }
            return (Intdays);
        }


        /*
        Check for leap year         
        */

        function IsLeapYear(IntYear) {
            if (((IntYear % 4) == 0) && ((IntYear % 100) != 0) || ((IntYear % 400) == 0)) {
                return (true);
            }
            else {
                return (false);
            }
        }
        function compareDate(Intfrom_day, Intfrom_month, Intfrom_year, Intto_day, Intto_month, Intto_year) {
            compare_date(Intfrom_day, Intfrom_month, Intfrom_year, Intto_day, Intto_month, Intto_year)
        }
        function compare_date(xIntfrom_day, xIntfrom_month, xIntfrom_year, xIntto_day, xIntto_month, xIntto_year) {
            var Isdate_earlier = true;
            var Intfrom_day = GetInt(xIntfrom_day);
            var Intfrom_month = GetInt(xIntfrom_month);
            var Intfrom_year = GetInt(xIntfrom_year);
            var Intto_day = GetInt(xIntto_day);
            var Intto_month = GetInt(xIntto_month);
            var Intto_year = GetInt(xIntto_year);

            if (Intfrom_year <= Intto_year) {
                if (Intfrom_year == Intto_year) {
                    if (Intfrom_month <= Intto_month) {
                        if (Intfrom_month == Intto_month) {
                            if (Intfrom_day <= Intto_day);
                            else Isdate_earlier = false;
                        }
                        else Isdate_earlier = true;
                    }                                    //if3
                    else Isdate_earlier = false;
                }                                     //if2
                else Isdate_earlier = true;
            }                                      //if1
            else Isdate_earlier = false;
            return (Isdate_earlier);
        }
        function isEqualDate(xIntfrom_day, xIntfrom_month, xIntfrom_year, xIntto_day, xIntto_month, xIntto_year) {
            var IsEqual = false;
            var Intfrom_day = GetInt(xIntfrom_day);
            var Intfrom_month = GetInt(xIntfrom_month);
            var Intfrom_year = GetInt(xIntfrom_year);
            var Intto_day = GetInt(xIntto_day);
            var Intto_month = GetInt(xIntto_month);
            var Intto_year = GetInt(xIntto_year);

            if (Intfrom_year == Intto_year && Intfrom_month == Intto_month && Intfrom_day == Intto_day) {
                IsEqual = true;
            }
            return IsEqual;
        }

        function isPastDate(Intfrom_day, Intfrom_month, Intfrom_year) {
            var CuDate = document.getElementById("hdnDate").value;
            today = new Date(CuDate);
            var locDay = today.getDate();
            var locMonth = today.getMonth();
            var locYear = today.getFullYear();

            //check if the browser is netscape, add 1900 to year
            if (navigator.appName.indexOf("Netscape") != -1)
                locYear = locYear + 1900;
            // added for IE9 date validation
            var x = navigator.appVersion;
            var y = x.search("MSIE 9.0");
            if (y > 0) {
                locYear = locYear + 1900;
            }
            locMonth++;

            locDay = GetInt(locDay, 10);

            var isGreaterThan = compare_date(Intfrom_day, Intfrom_month, Intfrom_year, locDay, locMonth, locYear);
            if (isGreaterThan)
                return false;
            else
                return true;
        }



        /*(1-msg-compToCurrDate)
        This function checks whether the required option is selected in dropdown menu or not
        */

        function validateDate(field, paraName, compToCurrDate) {
            var locDay = "";
            var locMonth = "";
            var locYear = "";
            var ErrMsg = "";

            var fieldValue = field.value;


            if (fieldValue == "") {
                ErrMsg = "Enter the " + paraName + ".\n"
                return ErrMsg;
            }

            if (fieldValue.indexOf("/") < 0) {
                ErrMsg = "Enter valid " + paraName + ". ex(01/01/1990)";
                return ErrMsg;
            }

            var arr = fieldValue.split("/");
            if (arr.length != 3) {
                ErrMsg = "Enter valid " + paraName + ".";
                return ErrMsg;
            }

            locDay = arr[0];
            locMonth = arr[1];
            locYear = arr[2];


            for (i = 0; i < arr.length; i++) {

                if (isNaN(arr[i]) || parseFloat(arr[i]) == 0) {

                    ErrMsg = "Enter valid " + paraName + ".";
                    return ErrMsg;
                }

                if (i <= 1) {
                    if ((arr[i].length == 0) || (arr[i].length > 2)) {

                        ErrMsg = "Enter valid " + paraName + ".";
                        return ErrMsg;
                    }
                }
                else if (i == 2) {
                    if ((arr[i].length == 0) || (arr[i].length != 4)) {

                        ErrMsg = "Enter " + paraName + " in valid format. Year value should be in 'yyyy' format.";
                        return ErrMsg;
                    }
                    else if (GetInt(arr[i]) < 1900) {
                        ErrMsg = "Enter correct " + paraName + ".";
                        return ErrMsg;
                    }
                }
            }

            if (!isDate(locDay, locMonth, locYear)) {
                ErrMsg = "Enter valid " + paraName + ".";
                return ErrMsg;
            }


            if (compToCurrDate == "LESS") {
                if (isPastDate(locDay, locMonth, locYear))
                    ErrMsg += paraName + " should be a date prior to the current date.\n";
            }
            else if (compToCurrDate == "GREATER") {
                if (!isPastDate(locDay, locMonth, locYear))
                    ErrMsg += paraName + " should be a date later than the current date.\n";
            }
            else {
                // to be added...
            }


            return ErrMsg;


        }
        function isDate(Theday, Themonth, Theyear) {

            var stateday = false;
            var statemonth = false;
            var stateyear = false;
            var validDate = false;
            var daysgot = "";

            daysgot = getDaysInMonth(Themonth, Theyear);

            if (Theday <= daysgot)
                validDate = true;

            return (validDate);
        }




        function splitDate(val, delim) {
            var arr = val.split(delim);
            locDay = arr[0];
            locMonth = arr[1];
            locYear = arr[2];
            return arr;
        }

        function checkDates(field1, field2, fieldName1, fieldName2, constraint) {
            var locDay1 = "";
            var locMonth1 = "";
            var locYear1 = "";
            var locDay2 = "";
            var locMonth2 = "";
            var locYear2 = "";

            var ErrMsg = "";


            var arr1 = splitDate(field1.value, "/");
            var arr2 = splitDate(field2.value, "/");
            var isLessThan = compare_date(arr1[0], arr1[1], arr1[2], arr2[0], arr2[1], arr2[2]);
            var isEqual = isEqualDate(arr1[0], arr1[1], arr1[2], arr2[0], arr2[1], arr2[2]);
            if (constraint == 'EQUAL') {
                if (!isEqual) {
                    ErrMsg = fieldName1 + " should be same as " + fieldName2 + ".";
                }
            }
            else if (constraint == 'LESS') {
                if (!isLessThan) {
                    ErrMsg = fieldName1 + " should be prior to " + fieldName2 + ".";
                }
            }
            else if (constraint == 'GREATER') {
                if (isLessThan) {
                    ErrMsg = fieldName1 + " should be later than " + fieldName2 + ".";
                }
            }
            else if (constraint == 'LESS&EQUAL') {
                if (!isLessThan && !isEqual) {
                    ErrMsg = fieldName1 + " should be earlier than or same as " + fieldName2 + ".";
                }
            }
            else if (constraint == 'GREATER&EQUAL') {
                if (isLessThan && !isEqual) {
                    ErrMsg = fieldName1 + " should be later than or same as " + fieldName2 + ".";
                }
            }
            return ErrMsg;
        }
        function checkEqual(field1, field2) {
            var arr1 = splitDate(field1.value, "/");
            var arr2 = splitDate(field2.value, "/");
            return isEqualDate(arr1[0], arr1[1], arr1[2], arr2[0], arr2[1], arr2[2]);
        }
        function validatePincode(pincodeField, paraName, mandatory) {
            var msg = "";
            if (mandatory == true || pincodeField.value.length > 0) {
                msg = validateField(pincodeField, 'INT', '', '', paraName, '');
                if (msg == "" && pincodeField.value.length != 6) {
                    msg = paraName + " should be six digits.";
                }
                var startDigit = pincodeField.value.substring(0, 1);
                if (msg == "" && startDigit != "5") {
                    msg = "The " + paraName + " for Andhra Pradesh starts with 5.";
                }
            }
            return msg;
        }

        function validateMobile(MobileField, paraName, mandatory) {
            var msg = "";
            if (mandatory == true || MobileField.value.length > 0) {
                msg = validateField(MobileField, 'INT', '', '', paraName, '');
                if (msg == "" && MobileField.value.length != 10) {
                    msg = paraName + " should be 10 digits.";
                }
                var startDigit = MobileField.value.substring(0, 1);
                if (msg != "" && ( (startDigit != "7") || (startDigit != "8") || (startDigit != "9") ) ){
                    msg = "The " + paraName + " should starts with 7 or 8 or 9.";
                }
            }
            return msg;
        }



        function validateRoadName(Field, paraName, mandatory) {
            var msg = "";
            if (Field.value != "") {
                var name = Field.value;
                for (var i = 0; i <= (name.length - 1); i++) {
                    var theChar = name.substring(i, i + 1);

                    if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9') || (theChar == '-') || (theChar == ' ') || (theChar == ',') || (theChar == '/') || (theChar == '.'))) {
                        msg = paraName + " Please Enter Valid Name ";
                    }
                }

                if ((name.charAt(0) == '/') || (name.charAt(0) == '-') || (name.charAt(0) == ' ') || (name.charAt(0) == '0') || (name.charAt(0) == ',') || (name.charAt(0) == '.')) {
                    msg = paraName + " name should not start with Special Character and Zeros.";
                }

            }
            return msg;
        }


	function ValidateLng(Field) {
         var msg = "";
            var lng = Field.value;
            if (lng < -999 || lng > 999) {
                msg = "Longitude must be between -999 and 999 degrees inclusive.";
            }
            else if (lng == "") {
                msg = 'Enter valid Data';
            }
             return msg;
        }

        function ValidateLat(Field) {
         var msg = "";
            var lat = Field.value;
            if (lat < -999 || lat > 999) {
                msg = "Latitude must be between -999 and 999 degrees inclusive.";
            }
            else if (lat == "") {
               msg = 'Enter valid Data';
            }
             return msg;
        }         

         function validatechar() {
           var ch = String.fromCharCode(event.keyCode);
            var filter = /^[A-Za-z ]/; ///[a-zA-Z]/;
            if (!filter.test(ch)) {
                event.returnValue = false;
            }
        }

          //Date Validation
       function validatenumericDate() {
            var ch = String.fromCharCode(event.keyCode);
            var filter = /^[0-9/]/; ///[a-zA-Z]/;
            if (!filter.test(ch)) {
                event.returnValue = false;
            }
        }
        //Back Button
         function preventBackspace(e) {
            var evt = e || window.event;
            if (evt) {
                var keyCode = evt.charCode || evt.keyCode;
                if (keyCode === 8) {
                    if (evt.preventDefault) {
                        evt.preventDefault();
                    } else {
                        evt.returnValue = false;
                    }
                }
            }
        }
       
         function validatenumeric() {
            var ch = String.fromCharCode(event.keyCode);
            var filter = /[0-9]/;
            if (!filter.test(ch)) {
                event.returnValue = false;

            }
        }


          function validatenumericFloat() {
            var ch = String.fromCharCode(event.keyCode);
            var filter = /[0-9.]/;
            if (!filter.test(ch)) {
                event.returnValue = false;

            }
        }
        function validateAlphanumeric() {

            var ch = String.fromCharCode(event.keyCode);
            var filter = /^[A-Za-z0-9]/; ///[a-zA-Z]/;


            if (!filter.test(ch)) {
                event.returnValue = false;
            }
        }
        function isNumberKeytouch(evt, obj) {

            evt = (evt) ? evt : event;
            var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

            if (obj.value.length == 0) {
                evt = (evt) ? evt : event;
                var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

                if (charCode == 48) {
                    obj.value = obj.value.slice(0, -1);
                    return false;
                }
            }
            if ((charCode > 31 && (charCode < 48 || charCode > 57) && (charCode != 46))) {
                obj.value = obj.value.slice(0, -1);
                return false;
            }

            return true;

        }





        function isDAtesKeytouch(evt, obj) {

            evt = (evt) ? evt : event;
            var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

            if (obj.value.length == 0) {
                evt = (evt) ? evt : event;
                var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

                if (charCode == 48) {
                    obj.value = obj.value.slice(0, -1);
                    return false;
                }
            }
            if ((charCode > 31 && (charCode < 47 || charCode > 57) && (charCode != 47))) {
                obj.value = obj.value.slice(0, -1);
                return false;
            }

            return true;

        }




         function isNumberKeytouchZERO(evt, obj) {

            evt = (evt) ? evt : event;
            var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

            if (obj.value.length == 0) {
                evt = (evt) ? evt : event;
                var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

                if (charCode == 45) {
                    obj.value = obj.value.slice(0, -1);
                    return false;
                }
            }
            if ((charCode > 31 && (charCode < 48 || charCode > 57) && (charCode != 46))) {
                obj.value = obj.value.slice(0, -1);
                return false;
            }

            return true;

        }

        function validateFieldforMobile(theField, checkType, minLimit, maxLimit, paraName, splCharString) {

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

                    ErrMsg = "The " + paraName + " you entered should not be longer than " + maxLimit + " digits.";

                }

            if (fieldValue.length <= minLimit) {

                ErrMsg = "The " + paraName + " you entered must be longer than " + minLimit + " digits.";

            }




            if (checkSplCharsExist(fieldValue, splCharString)) {
                ErrMsg = "The " + paraName + " you entered should not have any special character.";
            }

            return ErrMsg;
        }


        var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
                [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
                [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
                [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
                [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
                [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
                [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
                [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
                [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];


        // The permutation table
        var p = [
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
                [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
                [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
                [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
                [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
                [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
                [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];


        // The inverse table
        var inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];
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
        function StringToReversedIntArray(num) {
            var myArray = [num.length];
            for (var i = 0; i < num.length; i++) {
                myArray[i] = (num.substring(i, i + 1));
            }
            myArray = Reverse(myArray);
            return myArray;
        }
        function Reverse(myArray) {

            var reversed = [myArray.length];
            for (var i = 0; i < myArray.length; i++) {
                reversed[i] = myArray[myArray.length - (i + 1)];
            }
            return reversed;
        }

        

        function Alphaspecialnumeric() {
            var ch = String.fromCharCode(event.keyCode);
            // var filter = /[^a-zA-Z0-9\n\r.-\/-,]+/g;
            var filter = /[A-Za-z0-9(),-\/-.: ]/;
            if (!filter.test(ch)) {
                event.returnValue = false;
            }
        }


        function ChckPasteCount(charLimit, inputId) {
            var text = window.clipboardData.getData("Text");
            var remainingChars = charLimit - (document.getElementById(inputId).value.length + parseInt(text.length));
            if (parseInt(remainingChars) < 0)
                return false;
            else
                return true;
        }
        function ValDigit(val) {
            var keyCodeEntered = (event.which) ? event.which : (window.event.keyCode) ? window.event.keyCode : -1;
            if ((keyCodeEntered >= 48) && (keyCodeEntered <= 57)) {
                return true;
            }
            else if (keyCodeEntered == 46) {
                if ((val.value) && (val.value.indexOf('.') >= 0))
                    return false;
                else
                    return true;
            }
            return false;
        }
        /////Funtion to Restrict Length for multiline TextBox////////////////
        function checkTextAreaMaxLength(textBox, e, length) {
            var mLen; //= textBox["MaxLength"];
            if (null == mLen)
                mLen = length;
            var maxLength = parseInt(mLen);
            if (!checkSpecialKeys(e)) {
                if (textBox.value.length > maxLength - 1) {
                    if (window.event)//IE
                        e.returnValue = false;
                    else//Firefox
                        e.preventDefault();
                }
            }
        }


        
        

        function NamesValidation(evt, obj) {
            // if (obj.value.length >= 2 && obj.value.length <= 3) {
            evt = (evt) ? evt : event;
            var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
            if ((charCode <= 64 || (charCode > 90 && charCode < 97) || charCode > 122) && (charCode != 32 && charCode != 46)) {

                return false;
            }
        }

         function OnlyNumberKeytouch(evt, obj) {

            evt = (evt) ? evt : event;
            var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

            if (obj.value.length == 0) {
                evt = (evt) ? evt : event;
                var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

                 
            }
            if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
                return false;
            }

            return true;

        }


        function OnlyNumberKeytouchwithDot(evt, obj) {

            evt = (evt) ? evt : event;
            var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

            if (obj.value.length == 0) {
                evt = (evt) ? evt : event;
                var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

                 
            }
            if ((charCode > 31 && (charCode < 48 || charCode > 57)&& (charCode != 46))) {
                return false;
            }

            return true;

        }

        
         function isNumberKeytouchZERO(evt, obj) {

            evt = (evt) ? evt : event;
            var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

            if (obj.value.length == 0) {
                evt = (evt) ? evt : event;
                var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

                if (charCode == 45) {
                    obj.value = obj.value.slice(0, -1);
                    return false;
                }
            }
            if ((charCode > 31 && (charCode < 48 || charCode > 57) && (charCode != 46))) {
                obj.value = obj.value.slice(0, -1);
                return false;
            }

            return true;

        }

          function fnValidatePAN(Obj) {
            if (Obj == null) Obj = window.event.srcElement;
            if (Obj.value != "") {
                ObjVal = Obj.value;
                var panPat = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
                var code = /([C,P,H,F,A,T,B,L,J,G])/;
                var code_chk = ObjVal.substring(3, 4);
                if (ObjVal.search(panPat) == -1) {
                    alert("Invalid Pan No");
                    Obj.value = "";
                    //Obj.focus();
                    document.getElementById('txtPannumber').focus();

                    return false;
                }
                if (code.test(code_chk) == false) {
                    alert("Invaild PAN Card No.");
                    Obj.value = "";
                    //Obj.focus();
                    document.getElementById('txtPannumber').focus();

                    return false;
                }
            }
        }


        function ToUpper(e) {
            e.value = e.value.toUpperCase();
        }
         
        /*Validation End*/

        /*Validation Start*/
        function validateIntField(theField, paraName, isMandatory, minValue, maxValue, minDigitCount, maxDigitCount) {
            var ErrMsg = "";
            trimField(theField);
            var fieldValue = theField.value;
            if (fieldValue == "" && isMandatory) {
                ErrMsg = "Enter " + paraName + ".\n"
            }
            else if (fieldValue == "") {
                ErrMsg = "";
            }
            else if (isNaN(fieldValue)) {
                ErrMsg = "The " + paraName + " you entered should be a numeric value.\n";
            }
            else if (fieldValue.indexOf(".") != -1) {
                ErrMsg = "Entered value for " + paraName + " should not be a decimal value.\n";
            }
            else if (GetInt(fieldValue) < 0) {
                ErrMsg = "Entered value for " + paraName + "  should be a positive value.\n";
            }
            else if (minDigitCount != "" && !isNaN(minDigitCount) && fieldValue.length < minDigitCount) {
                ErrMsg = "The " + paraName + " you enter should be a minimum of " + minDigitCount + " digits.";
            }
            else if (maxDigitCount != "" && !isNaN(maxDigitCount) && fieldValue.length > maxDigitCount) {
                ErrMsg = "The " + paraName + " you entered should be less than or equal to " + maxDigitCount + " digits.";
            }
            else if (minValue != "" && !isNaN(minValue) && GetInt(fieldValue) < minValue) {
                ErrMsg = "The " + paraName + " you entered should be greater than or equal to " + minValue + ".";
            }
            else if (maxValue != "" && !isNaN(maxValue) && GetInt(fieldValue) > maxValue) {
                ErrMsg = "The " + paraName + " you entered should be less than or equal to " + maxValue + ".";
            }
            return ErrMsg;
        }

        function validateFloatField(theField, paraName, isMandatory, minValue, maxValue, precision) {
            var ErrMsg = "";
            trimField(theField);
            var fieldValue = theField.value;
            var portion = "";
            if (fieldValue.indexOf(".") > 0) {
                portion = fieldValue.split('.')[1];
            }
            if (fieldValue == "" && isMandatory) {
                ErrMsg = "Enter " + paraName + ".\n"
            }
            else if (fieldValue == "") {
                ErrMsg = "";
            }
            else if (isNaN(fieldValue)) {
                ErrMsg = "The " + paraName + " you entered should be a numeric value.\n";
            }
            else if (GetFloat(fieldValue) < 0) {
                ErrMsg = "The " + paraName + " you entered should be a positive value.\n";
            }
            else if (precision != "" && !isNaN(precision) && portion.length > precision) {
                ErrMsg = "The " + paraName + " you entered should have only " + precision + " digits after decimal point.";
            }

            else if (minValue != "" && !isNaN(minValue) && GetFloat(fieldValue) < minValue) {
                ErrMsg = "The " + paraName + " you entered should be greater than or equal to " + minValue + ".";
            }
            else if (maxValue != "" && !isNaN(maxValue) && GetFloat(fieldValue) > maxValue) {
                ErrMsg = "The " + paraName + " you entered should be less than or equal to " + maxValue + ".";
            }
            return ErrMsg;
        }

        function validateField(theField, checkType, minLimit, maxLimit, paraName, splCharString) {

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




        function trimField(TheField) {
            if ((TheField.type == 'text') || (TheField.type == 'textarea')) {
                var Strfldvalue = TheField.value;
                var Strtrmvalue = "";
                var j = 0;
                for (k = 0; k < Strfldvalue.length; k++) {
                    if (Strfldvalue.charAt(k) == " ") j++;
                    else {
                        if (j < Strfldvalue.length) Strtrmvalue = Strfldvalue.substring(j, Strfldvalue.length);
                        break;
                    }
                }
                TheField.value = Strtrmvalue;
            }
        }

        function trimValue(Strfldvalue, trimChar, direction) {
            var fieldValue = Strfldvalue;
            var j = 0;
            if (direction == "LEFT" || direction == "BOTH") {
                j = 0;
                for (var k = 0; k < fieldValue.length; k++) {
                    if (fieldValue.charAt(k) == " " || fieldValue.charAt(k) == trimChar) j++;
                    else {
                        if (j < fieldValue.length) {
                            fieldValue = fieldValue.substring(j, fieldValue.length);
                        }
                        else {
                            fieldValue = "";
                        }
                        break;
                    }
                }
            }
            if (direction == "RIGHT" || direction == "BOTH") {
                j = fieldValue.length;
                for (var k = fieldValue.length - 1; k >= 0; k--) {
                    if (fieldValue.charAt(k) == " " || fieldValue.charAt(k) == trimChar) {
                        j--;
                    }
                    else {
                        if (j > 0) {
                            fieldValue = fieldValue.substring(0, j);
                        }
                        else {
                            fieldValue = "";
                        }
                        break;
                    }
                }
            }
            return fieldValue;
        }



        function checkSplCharsExist(fieldValue, splCharString) {


            for (var i = 0; i < splCharString.length; i++) {

                if (fieldValue.indexOf(splCharString.charAt(i)) >= 0) {
                    return true;
                }
            }

            return false;

        }


        function GetInt(fieldValue) {
            var intValue = "" + trimValue(fieldValue, '0', 'LEFT');
            if (intValue.l == '') {
                intValue = '0';
            }
            return parseInt(intValue);
        }

        function GetFloat(fieldValue) {
            var floatValue = trimValue(fieldValue, '0', 'LEFT');
            if (floatValue == '') {
                floatValue = '0';
            }
            return parseFloat(floatValue);
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

            //the first and last char cannot be " numbers "
            var l = parEmailId.length;
            if ((parEmailId.charAt(0) == "1") || (parEmailId.charAt(0) == "2") || (parEmailId.charAt(0) == "3") || (parEmailId.charAt(0) == "4") || (parEmailId.charAt(0) == "5") || (parEmailId.charAt(0) == "6") || (parEmailId.charAt(0) == "7") || (parEmailId.charAt(0) == "8") || (parEmailId.charAt(0) == "9") || (parEmailId.charAt(0) == "0") )
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
        function getDaysInMonth(Intmonth, Intyear) {
            var Intdays = "";
            if (Intmonth == 1 || Intmonth == 3 || Intmonth == 5 || Intmonth == 7 || Intmonth == 8 || Intmonth == 10 || Intmonth == 12)
                Intdays = 31;
            else if (Intmonth == 4 || Intmonth == 6 || Intmonth == 9 || Intmonth == 11) Intdays = 30;
            else if (Intmonth == 2) {
                if (IsLeapYear(Intyear))
                    Intdays = 29;
                else
                    Intdays = 28;
            }
            return (Intdays);
        }


        /*
        Check for leap year         
        */

        function IsLeapYear(IntYear) {
            if (((IntYear % 4) == 0) && ((IntYear % 100) != 0) || ((IntYear % 400) == 0)) {
                return (true);
            }
            else {
                return (false);
            }
        }
        function compareDate(Intfrom_day, Intfrom_month, Intfrom_year, Intto_day, Intto_month, Intto_year) {
            compare_date(Intfrom_day, Intfrom_month, Intfrom_year, Intto_day, Intto_month, Intto_year)
        }
        function compare_date(xIntfrom_day, xIntfrom_month, xIntfrom_year, xIntto_day, xIntto_month, xIntto_year) {
            var Isdate_earlier = true;
            var Intfrom_day = GetInt(xIntfrom_day);
            var Intfrom_month = GetInt(xIntfrom_month);
            var Intfrom_year = GetInt(xIntfrom_year);
            var Intto_day = GetInt(xIntto_day);
            var Intto_month = GetInt(xIntto_month);
            var Intto_year = GetInt(xIntto_year);

            if (Intfrom_year <= Intto_year) {
                if (Intfrom_year == Intto_year) {
                    if (Intfrom_month <= Intto_month) {
                        if (Intfrom_month == Intto_month) {
                            if (Intfrom_day <= Intto_day);
                            else Isdate_earlier = false;
                        }
                        else Isdate_earlier = true;
                    }                                    //if3
                    else Isdate_earlier = false;
                }                                     //if2
                else Isdate_earlier = true;
            }                                      //if1
            else Isdate_earlier = false;
            return (Isdate_earlier);
        }
        function isEqualDate(xIntfrom_day, xIntfrom_month, xIntfrom_year, xIntto_day, xIntto_month, xIntto_year) {
            var IsEqual = false;
            var Intfrom_day = GetInt(xIntfrom_day);
            var Intfrom_month = GetInt(xIntfrom_month);
            var Intfrom_year = GetInt(xIntfrom_year);
            var Intto_day = GetInt(xIntto_day);
            var Intto_month = GetInt(xIntto_month);
            var Intto_year = GetInt(xIntto_year);

            if (Intfrom_year == Intto_year && Intfrom_month == Intto_month && Intfrom_day == Intto_day) {
                IsEqual = true;
            }
            return IsEqual;
        }

        function isPastDate(Intfrom_day, Intfrom_month, Intfrom_year) {
           // today = new Date();
            var CuDate = document.getElementById("hdnDate").value;
            today = new Date(CuDate);
            var locDay = today.getDate();
            var locMonth = today.getMonth();
            var locYear = today.getFullYear();

            //check if the browser is netscape, add 1900 to year
            if (navigator.appName.indexOf("Netscape") != -1)
                locYear = locYear + 1900;
            // added for IE9 date validation
            var x = navigator.appVersion;
            var y = x.search("MSIE 9.0");
            if (y > 0) {
                locYear = locYear + 1900;
            }
            locMonth++;

            locDay = GetInt(locDay, 10);

            var isGreaterThan = compare_date(Intfrom_day, Intfrom_month, Intfrom_year, locDay, locMonth, locYear);
            if (isGreaterThan)
                return false;
            else
                return true;
        }



        /*(1-msg-compToCurrDate)
        This function checks whether the required option is selected in dropdown menu or not
        */

        function validateDate(field, paraName, compToCurrDate) {
            var locDay = "";
            var locMonth = "";
            var locYear = "";
            var ErrMsg = "";

            var fieldValue = field.value;


            if (fieldValue == "") {
                ErrMsg = "Enter the " + paraName + ".\n"
                return ErrMsg;
            }

            if (fieldValue.indexOf("/") < 0) {
                ErrMsg = "Enter valid " + paraName + ".";
                return ErrMsg;
            }

            var arr = fieldValue.split("/");
            if (arr.length != 3) {
                ErrMsg = "Enter valid " + paraName + ".";
                return ErrMsg;
            }

            locDay = arr[0];
            locMonth = arr[1];
            locYear = arr[2];


            for (i = 0; i < arr.length; i++) {

                if (isNaN(arr[i]) || parseFloat(arr[i]) == 0) {

                    ErrMsg = "Enter valid " + paraName + ".";
                    return ErrMsg;
                }

                if (i <= 1) {
                    if ((arr[i].length == 0) || (arr[i].length > 2)) {

                        ErrMsg = "Enter valid " + paraName + ".";
                        return ErrMsg;
                    }
                }
                else if (i == 2) {
                    if ((arr[i].length == 0) || (arr[i].length != 4)) {

                        ErrMsg = "Enter " + paraName + " in valid format. Year value should be in 'yyyy' format.";
                        return ErrMsg;
                    }
                    else if (GetInt(arr[i]) < 1900) {
                        ErrMsg = "Enter correct " + paraName + ".";
                        return ErrMsg;
                    }
                }
            }

            if (!isDate(locDay, locMonth, locYear)) {
                ErrMsg = "Enter valid " + paraName + ".";
                return ErrMsg;
            }


            if (compToCurrDate == "LESS") {
                if (isPastDate(locDay, locMonth, locYear))
                    ErrMsg += paraName + " should be a date prior to the current date.\n";
            }
            else if (compToCurrDate == "GREATER") {
                if (!isPastDate(locDay, locMonth, locYear))
                    ErrMsg += paraName + " should be a date later than the current date.\n";
            }
            else {
                // to be added...
            }


            return ErrMsg;


        }
        function isDate(Theday, Themonth, Theyear) {

            var stateday = false;
            var statemonth = false;
            var stateyear = false;
            var validDate = false;
            var daysgot = "";

            daysgot = getDaysInMonth(Themonth, Theyear);

            if (Theday <= daysgot)
                validDate = true;

            return (validDate);
        }




        function splitDate(val, delim) {
            var arr = val.split(delim);
            locDay = arr[0];
            locMonth = arr[1];
            locYear = arr[2];
            return arr;
        }

        function checkDates(field1, field2, fieldName1, fieldName2, constraint) {
            var locDay1 = "";
            var locMonth1 = "";
            var locYear1 = "";
            var locDay2 = "";
            var locMonth2 = "";
            var locYear2 = "";

            var ErrMsg = "";


            var arr1 = splitDate(field1.value, "/");
            var arr2 = splitDate(field2.value, "/");
            var isLessThan = compare_date(arr1[0], arr1[1], arr1[2], arr2[0], arr2[1], arr2[2]);
            var isEqual = isEqualDate(arr1[0], arr1[1], arr1[2], arr2[0], arr2[1], arr2[2]);
            if (constraint == 'EQUAL') {
                if (!isEqual) {
                    ErrMsg = fieldName1 + " should be same as " + fieldName2 + ".";
                }
            }
            else if (constraint == 'LESS') {
                if (!isLessThan) {
                    ErrMsg = fieldName1 + " should be prior to " + fieldName2 + ".";
                }
            }
            else if (constraint == 'GREATER') {
                if (isLessThan) {
                    ErrMsg = fieldName1 + " should be later than " + fieldName2 + ".";
                }
            }
            else if (constraint == 'LESS&EQUAL') {
                if (!isLessThan && !isEqual) {
                    ErrMsg = fieldName1 + " should be earlier than or same as " + fieldName2 + ".";
                }
            }
            else if (constraint == 'GREATER&EQUAL') {
                if (isLessThan && !isEqual) {
                    ErrMsg = fieldName1 + " should be later than or same as " + fieldName2 + ".";
                }
            }
            return ErrMsg;
        }
        function checkEqual(field1, field2) {
            var arr1 = splitDate(field1.value, "/");
            var arr2 = splitDate(field2.value, "/");
            return isEqualDate(arr1[0], arr1[1], arr1[2], arr2[0], arr2[1], arr2[2]);
        }
        function validatePincode(pincodeField, paraName, mandatory) {
            var msg = "";
            if (mandatory == true || pincodeField.value.length > 0) {
                msg = validateField(pincodeField, 'INT', '', '', paraName, '');
                if (msg == "" && pincodeField.value.length != 6) {
                    msg = paraName + " should be six digits.";
                }
                var startDigit = pincodeField.value.substring(0, 1);
                if (msg == "" && startDigit != "5") {
                    msg = "The " + paraName + " starts with 5.";
                }
            }
            return msg;
        }


       




        /*Validation End*/
     

     