
$(function () {

    $("#weight").blur(function () {
        var size;
        var weight = $("#weight").val();
        if (weight == NaN) {
            size = "";
        }
        else if (weight <= 4) {
            size = "mini";
        }
        else if (weight > 4 && weight <= 12) {
            size = "small";
        }
        else if (weight > 12 && weight <= 50) {
            size = "medium";
        }
        else if (weight > 50) {
            size = "large";
        }
        $("#size").val(size);
        // UpdateCosts();
    })

    $("#days").blur(function () {
        var cost;
        var days = $("#days").val();
        if (days == NaN) {
            $("#days").val("0");
            $("#boardingFee").val("0.00");
        }
        else if ($.isNumeric(days)) {
            cost = (days * 19.99).toFixed(2);
            $("#boardingFee").val(cost);
        }
        UpdateCosts();

    })


    var UpdateCosts = () => {
        var registrationCost = 0; var noofevents = 0; var boardingcost; var total;
        var boardingFee = $("#boardingFee").val();
        if (boardingFee == "") {
            boardingcost = 0;
        }
        else {
            boardingcost = parseFloat(boardingFee).toFixed(2);
        }
        if ($("#sing").is(":checked")) {
            noofevents += 1;
        }
        if ($("#cute").is(":checked")) {
            noofevents += 1;
        }
        if ($("#trick").is(":checked")) {
            noofevents += 1;
        }
        registrationCost = (120 * noofevents).toFixed(2);
        total = (parseFloat(boardingcost) + parseFloat(registrationCost)).toFixed(2);
        $("#boardingCost").val(boardingcost);
        $("#registrationCost").val(registrationCost);
        $("#totalCost").val(total);
    }
})