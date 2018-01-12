$(document).ready(function () {
  var know1 = data.know.characters;
  var followens1 = data.followens.characters;
  var mentors1 = data.mentors.characters;
  var knowfollow1 = data.knowfollow.characters;


  // utilizando hide() y show() rimero

  $('.btn-followems').click(function () {
    $('.main1').hide();
    for (var i = 0; i < followens1.length; i++) {
      $('.know, .mentors, .knowPeole').empty();
      $('.followems').append('<div class="row character flex-container">' +
        '<div class= "col-md-8 col-md-offset-1 flex">' +
        '<div class= "col-md-12 flex-item">' +
        '<div class= "col-md-4">' +
         '<a class="btn" data-toggle= "modal" data-target="#myModal">' + '<img class= "pull-right" src="../assets/' + followens1[i].picture + '">' + '</a>' +
        '</div>' +
        '<div class= "col-md-4">' +
        '<h3>' + followens1[i].name + '</h3>' +
        '<p>' + '<a>' + followens1[i].email + '</a>' + '</p>' +
        '<div class= "btns flex-around">' +
        '<button id="btnAmigo"style= "color: black">' + 'Dejar de Seguir' + '</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>');
    }
    $('#btnAmigo').click(function () {
      alert('Haz dejado de Seguir a esta persona ...');
    });
  });


  $('.btn-mentors').click(function () {
    $('.main1').hide();
    for (var i = 0; i < mentors1.length; i++) {
      $('.followems, .know, .knowPeole').empty();
      $('.mentors').append('<div class="row character flex-container">' +
        '<div class= "col-md-8 col-md-offset-1 flex">' +
        '<div class= "col-md-12 flex-item">' +
        '<div class= "col-md-4">' +
         '<a class="btn" data-toggle= "modal" data-target="#myModal3">' + '<img class= "pull-right" src="../assets/' + mentors1[i].picture + '">' + '</a>' +
        '</div>' +
        '<div class= "col-md-4">' +
        '<h3>' + mentors1[i].name + '</h3>' +
        '<p>' + '<a>' + mentors1[i].email + '</a>' + '</p>' +
        '<button alert() id="btnMentor">' + 'Agregar mentor ' + '</button>' +
        '</div>' +
        '</div>' +
        '</div>');
    }
    $('#btnMentor').click(function () {
      alert('Solicitud enviada');
    });
    
  });

  $('.btn-knowPeople').click(function () {

    $('.main1').hide();
    for (var i = 0; i < knowfollow1.length; i++) {
      $('.followems, .mentors').empty();
      $('.knowPeople').append('<div class="row character flex-container">' +
        '<div class= "col-md-8 col-md-offset-1 flex">' +
        '<div class= "col-md-12 flex-item">' +
        '<div class= "col-md-4">' +
        '<a class="btn" data-toggle= "modal" data-target="#myModal2">' + '<img class= "pull-right" src="../assets/' + knowfollow1[i].picture + '">' + '</a>' +
        '</div>' +
        '<div class= "col-md-4">' +
        '<h3>' + knowfollow1[i].name + '</h3>' +
        '<p>' + '<a>' + knowfollow1[i].email + '</a>' + '</p>' +
        '<button  id="btnSeguidoresBlock" style= "color: black">' + 'Bloquear' + '</button>' +
        '</div>' +
        '</div>' +
        '</div>');
    }
    $('#btnSeguidoresBlock').click(function () {
      alert('Bloqueado!');
    });

  });


  $('.btn-inicio').click(function () {
    $('.followems, .mentors, .know, .knowPeople').empty();
    $('.main1').show();
  });


  $('#btnAmigo').click(function () {
    alert('Solicitud de amistad enviada');
  });

  $('#btnBloqueo').click(function () {
    event.preventDefault();
    alert('Eliminado');
  });

// creando la interactividad del modal
  $('#Enlace, #Enlace2, #Enlace3').click(function () {
    window.location.href = 'profileUser.html';
  });

 

});