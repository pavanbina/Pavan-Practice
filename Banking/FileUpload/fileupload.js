$(function () {
    $('input[name="filetype"]').change(function () {

    })
    $("#ddlsize").change(function () {


    })
    $("#FileUpLoad1").click(function () {
        var filetype = $('input[name="filetype"]:checked').length;
        var ddlsize = $("#ddlsize");
        var fileallow = $('input[name="many"]:checked').length;
        var fileupload = $("#FileUpLoad1");

        if (filetype == 0) {
            alert("Please Select file type");
            return false;
        }
        else if (ddlsize.val() == "00") {
            alert("Please select file size");
            ddlsize.focus();
            return false;
        }
        else if (fileallow == 0) {
            alert("Please Select Single/Multiple file");
            return false;
        }
    });
    $("#FileUpLoad1").change(function () {

        var nofiles = $('input[name="many"]:checked').val();
        var filetype = $('input[name="filetype"]:checked').val();
        var size = $("#ddlsize").val();
        if ($(this).val() != '') {
            var count_of = $(this).get(0).files.length;
            if (nofiles == "single" && count_of > 1) {
                alert("Please select only 1 file");
                $("#FileUpLoad1").val("");
                return false;
            }
            else {
                for (var i = 0; i < $(this).get(0).files.length; ++i) {

                    var filename = $(this).get(0).files[i].name;
                    var sizeinbytes = $(this).get(0).files[i].size;
                    var filesize = (sizeinbytes / (1024 * 1024)).toFixed(2);
                    //alert(filesize);
                    var extension = filename.split('.').pop().toLowerCase();
                    var f = $("#FileUpLoad1").val();
                    if (filesize <= size) {
                        if (filetype.indexOf(extension) == -1) {
                            alert("Please Upload selected file type only i.e," + filetype);
                            return false;
                        }
                    }
                    else {
                        alert("File size shouldn't be greater than selected size");
                        return false;
                    }
                }
            }
        }
        else {
            alert("Please upload a file");
            return false;
        }
    })
    $("#UploadBtn").click(function () {
        var filetype = $('input[name="filetype"]:checked').length;
        var ddlsize = $("#ddlsize");
        var fileallow = $('input[name="many"]:checked').length;
        var fileupload = $("#FileUpLoad1");

        if (filetype == 0) {
            alert("Please Select file type");
            return false;
        }
        else if (ddlsize.val() == "00") {
            alert("Please select file size");
            ddlsize.focus();
            return false;
        }
        else if (fileallow == 0) {
            alert("Please Select Single/Multiple file");
            return false;
        }
        else if (fileupload.val() == "" || null || undefined) {
            alert("Please choose files to upload");
            fileupload.focus();
            return false;
        }

    })



    // Loaded via <script> tag, create shortcut to access PDF.js exports.
    var pdfjsLib = window['pdfjs-dist/build/pdf'];
    // The workerSrc property shall be specified.
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';
    // if (nofiles == "single") {
    $("input:file").change(function (e) {
        var file = e.target.files[0]
        if (file.type == "application/pdf") {
            $("#previewpdf").show();
            var fileReader = new FileReader();
            fileReader.onload = function () {
                var pdfData = new Uint8Array(this.result);
                // Using DocumentInitParameters object to load binary data.
                var loadingTask = pdfjsLib.getDocument({ data: pdfData });
                loadingTask.promise.then(function (pdf) {
                    console.log('PDF loaded');

                    // Fetch the first page
                    var pageNumber = 1;
                    pdf.getPage(pageNumber).then(function (page) {
                        console.log('Page loaded');

                        var scale = 1.5;
                        var viewport = page.getViewport({ scale: scale });

                        // Prepare canvas using PDF page dimensions
                        var canvas = $("#pdfViewer")[0];
                        var context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        // Render PDF page into canvas context
                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        var renderTask = page.render(renderContext);
                        renderTask.promise.then(function () {
                            console.log('Page rendered');
                        });
                    });
                }, function (reason) {
                    // PDF loading error
                    console.error(reason);
                });
            };
            fileReader.readAsArrayBuffer(file);
        }
        else {

        }
    });
    // }


})

var Empty = function () {

}