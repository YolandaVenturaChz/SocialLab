$(document).ready(function () {
    // variables
    var $email = $('#inputEmail');
    var $password = $('#inputPassword');

    // verificadores de variables
    var verifyEmail = false;
    var verifyPassword = false;

    //asociando eventos a los inputs
    $email.on('input', function () {
        console.log(event.target.value);
        console.log($(this).val());
        var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
        console.log(PATERNEMAIL.test($(this).val()));
        if (PATERNEMAIL.test($(this).val())) {
            verifyEmail = true;
            activeBtn();
        } else {
            desactBtn();
        }
    });

    $password.on('input', function () {

        if ($(this).val().length >= 6) {
            verifyPassword = true;
            activeBtn();
        } else {
            desactBtn();
        }

    });

    function activeBtn() {
        if (verifyEmail == true && verifyPassword == true) {
            $('#btnSignIn').addClass('ensabled');
            $('#btnSignIn').removeClass('disabled');
            $('#btnSignIn').attr("href", "profileUser.html");

        }

    }

    function desactBtn() {
        $('#btnSignIn').addClass('disabled');

    }


});