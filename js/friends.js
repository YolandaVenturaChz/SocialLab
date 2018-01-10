$(document).ready(function() {
  var know1 = data.know.characters;
  var followens1 = data.followens.characters;
  var mentors1 = data.mentors.characters;
  var knowfollow1 = data.knowfollow.characters;

    
  // utilizando hide() y show() rimero

  $('.btn-followems').click(function() {
    $('.main1').hide();
    for (var i = 0; i < followens1.length; i++) {
      $('.know, .mentors, .knowPeole').empty();
      $('.followems').append('<div class="row character flex-item">' +
                '<div class= "col-md-6 text-center">' +
                '<img src="../assets/' + followens1[i].picture + '">' +
                '</div>' +
                '<div class= "col-md-6 block-info">' +
                '<h3>' + followens1[i].name + '</h3>' +
                '<p>' + followens1[i].email + '</p>' +
                '<div class= "btns flex-around">' +
                '<button id="btnAmigo"  class="btn">' + 'Agregar' + '</button>' +
                '<button id="btnMentors"  class="btn">' + 'Bloquear' + '</button>' +
                '</div>' +
                '</div>' +
                '</div>');
    }
  });
    

  $('.btn-mentors').click(function() {
    $('.main1').hide();
    for (var i = 0; i < mentors1.length; i++) {
      $('.followems, .know, .knowPeole').empty();
      $('.mentors').append('<div class="row character flex-item">' +
                '<div class= "col-md-6 text-center">' +
                '<img src="../assets/' + mentors1[i].picture + '">' +
                '</div>' +
                '<div class= "col-md-6 block-info">' +
                '<h3>' + mentors1[i].name + '</h3>' +
                '<p> ' + mentors1[i].email + '</p>' +
                '<div class= "btns flex-around">' +
                '<button id="btnAmigo"  class="btn">' + 'Agregar ' + '</button>' +
                '<button id="btnMentors"  class="btn">' + 'Bloquear' + '</button>' +
                '</div>' +
                '</div>' +
                '</div>');
    }
  });

  $('.btn-knowPeople').click(function() {
    $('.main1').hide();
    for (var i = 0; i < knowfollow1.length; i++) {
      $('.followems, .mentors').empty();
      $('.knowPeople').append('<div class="row character flex-item">' +
                '<div class= "col-md-6 text-center color">' +
                '<img src="../assets/' + knowfollow1[i].picture + '">' +
                '</div>' +
                '<div class= "col-md-6 block-info">' +
                '<h3>' + knowfollow1[i].name + '</h3>' +
                '<p>' + knowfollow1[i].email + '</p>' +
                '<div class= "btns flex-around">' +
                '<button id="btnAmigo"  class="btn">' + 'Agregar ' + '</button>' +
                '<button id="btnMentors"  class="btn">' + 'Bloquear' + '</button>' +
                '</div>' +
                '</div>' +
                '</div>');
    }
  });
    
  $('.btn-inicio').click(function() {
    $('.followems, .mentors, .know, .knowPeople').empty();
    $('.main1').show();
  });    
        
    
  $('#btnAmigo').click(function() {
    alert('Solicitud de amistad enviada');
  });

  $('#btnBloqueo').click(function() {
    alert('Eliminado');
  });
});

 
