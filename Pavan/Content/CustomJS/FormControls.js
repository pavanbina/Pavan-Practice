$(function () {
    $('input[name="optionsRadios"]').change(function () {
        var res = $("input[type='radio']:checked").val();
        alert(res);
    })
    $('.form-check-input').change(function () {
        if ($(this).is(':checked'))
            alert($(this).val());
    });
  
})