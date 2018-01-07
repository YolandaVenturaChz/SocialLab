$(document).ready(function () {

    var $email = $('#inputEmail');
    var password = $('inputPassword');

    //asociando eventos a los inputs
    $email.on('input', function () {
        console.log(event.target.value);
        console.log($(this).val());
        var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
        console.log(PATERNEMAIL.test($(this).val()));

    })

});