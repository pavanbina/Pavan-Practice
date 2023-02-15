$(function () {

    $("#checkothers").change(function () {

        if ($(this).is(":checked")) {
            $("#txtothers").show();

        }
        else {
            $("#txtothers").hide();
        }


    });
});
function AlphabetsOnly() {

    var regex = "/[a-z]/gi";


};

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
            obj.value = obj.value.slice(0, -1);
            return false;
        }
    }

    else {

        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));


        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && (charCode != 32) && (charCode < 47 || charCode > 57)) {
            obj.value = obj.value.slice(0, -1);
            return false;
        }
    }

}

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