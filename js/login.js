$(document).ready(function() {
  // variables
  var config = {
    apiKey: "AIzaSyDj-LvKeMqL7iTWWUo8ki7cLGupd7GjFmk",
    authDomain: "sociallab-a8547.firebaseapp.com",
    databaseURL: "https://sociallab-a8547.firebaseio.com",
    projectId: "sociallab-a8547",
    storageBucket: "sociallab-a8547.appspot.com",
    messagingSenderId: "973475069338"
  };
  firebase.initializeApp(config);
  
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');
  // verificadores de variables
  var verifyEmail = false;
  var verifyPassword = false;

  // asociando eventos a los inputs
  $email.on('input', function() {
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

  $password.on('input', function() {
    if ($(this).val().length >= 6) {
      verifyPassword = true;            
      activeBtn();
    } else {
      desactBtn();
    }
  });

  function activeBtn() {
    if (verifyEmail === true && verifyPassword === true) {
      $('#btnSignIn').addClass('ensabled');
      $('#btnSignIn').removeClass('disabled');
      //$('#btnSignIn').attr('href', 'profileUser.html');       
    }
  }

  function desactBtn() {
    $('#btnSignIn').addClass('disabled');       
  }
  // validación dentro del firebase
  $('#btnSignIn').on('click', function(event){
    // que el usuario ingrese con un correo y contraseña 
    var emailLogin = $email.val();
    var passwordLogin = $password.val();
    
    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin).catch(function(error) {
      // Handle Errors here.
      console.log('Usuario y/o contraseña incorrecta');
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    //observador
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        $(location).attr('href', 'profileUser.html');
        // ...
      } else {
        // User is signed out.
        // ...
        console.log(error);
      }
    });
  });
});