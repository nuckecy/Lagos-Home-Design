$(document).ready(function() {
    // document.getElementById('success-div').style.display = 'none';
    // document.getElementById('fail-div').style.display = 'none';
    $('#lhdcform').submit(function(e){
         // Prevent form submission
         e.preventDefault();
         formSubmit();
    })
    function formSubmit()
    {
       
        // Get the form instance
        var $form = $('#lhdcform');

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbyPlpDKbwNST2Ti6p_iQIwyzRuXjz_14lQ5xkfQ7RGtZ1NT2ns/exec';
        // var redirectUrl = 'success.html';
        // show the loading 
        $('#postForm').prepend($('<span>Congrats</span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.get(url, $form.serialize(), function(data) {
            jqxhr.crossDomain = true;
            // console.log("Success! Data: " + data.statusText);
            // $(location).attr('href',redirectUrl);
            document.getElementById('lhdcform').style.display = 'none';
            document.getElementById('title-m').style.display = 'none';
            document.getElementById('success-div').style.display = 'block';
        })
            .fail(function(data) {
                // console.warn("Error! Data: " + data.statusText);
                // if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                //     // $(location).attr('href',redirectUrl);                
                // }

            });
    };
});