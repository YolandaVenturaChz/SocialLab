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

  var email = $('#email');
  var password = $('#password');
  var name = $('#name');
  var confirmP = $('#confirmPassword');

  // verificadores de variables
  var verifyEmail = false;
  var verifyPassword = false;

  // asociando eventos a los inputs
  email.on('input', function() {
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

  password.on('input', function() {
    if ($(this).val().length >= 6) {
      verifyPassword = true;
      activeBtn();
    } else {
      desactBtn();
    }
  });

  function activeBtn() {
    if (verifyEmail === true && verifyPassword === true) {
      $('#btnRegister').addClass('ensabled');
      $('#btnRegister').removeClass('disabled');
      //$('#btnRegister').attr('href', 'profileUser.html');
    }
  }

  function desactBtn() {
    $('#btnRegister').addClass('disabled');
  }
$('#btnRegister').on('click', function(){
  var emailRegister = email.val();
  var passwordRegister = password.val();
  var nameRegister = name.val();
  var confirmPRegister = confirmP.val();
  // registro de usuario 
  firebase.auth().createUserWithEmailAndPassword(emailRegister, passwordRegister).then(function() {
    verifyUser(user);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        console.log('+++++')
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
        console.log('Usuario registrado')
        $(location).attr('href', 'profileUser.html');
      } else {
        // User is signed out.
        // ...
      }
    });
    
  });
  // para verificar y enviar un mensaje al correo del usuario
  function verifyUser(user){
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
      // Email sent.
      console.log('Enviando correo');
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }
});