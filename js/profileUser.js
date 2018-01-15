$('document').ready(function() {
  // database
  var database = firebase.database();
  var reference = database.ref('user');

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var uid = user.uid;
      reference.on('value', function(datos) {
        users = datos.val();
        var arrayUser = Object.values(users);
        for (i = 0; i < arrayUser.length; i++) {
          if (arrayUser[i].uid === uid) {
            var id = arrayUser[i];
            $('#name').text(id.name);
            $('#emailProfile').text(id.email);
            console.log(id.profilePhoto);
            $('#usericon').attr('src',id.profilePhoto);
            $('#description-js').text(id.description);
          }
        }
      });
    }
  });

  /* ventaana profileUser */
  $('#config').click(function() {
    window.location.href = 'userConfig.html';
  });
  $('#home').click(function() {
    window.location.href = 'profileUser.html';
  });
  /* funcionalidad a los post del usuario*/
  var textArea = $('#inputPost');
  var boton = $('#post');
  boton.disabled = true;
  /* Al hacer clic agregar debajo */
  boton.click(function() {
    /* alert('me diste clic'); */
    var valueText = textArea.val();
    var newDiv = $('<div class="newDiv"></div>');
    newDiv.text(time() + ' ' + valueText);
    var post = $('#insert-post');
    post.append(newDiv);
    clean();
  });
  /* funcion para limpiar el textArea */
  function clean() {
    textArea.val('');
  }
  /* evento para el autosize */
  textArea.keydown(function() {
    function autosize() {
      var now = this;
      setTimeout(function() {
        now.style.cssText = 'height:auto; padding:0';
        now.style.cssText = 'height:' + now.scrollHeight + 'px';
      }, 0);
    }
  });
  /* funcion para la hora del post */
  function time() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var time;
    if (min < 10) {
      min = '0' + min;
    }
    if (hour >= 12 && hour <= 24) {
      time = hour + ':' + min + ' PM';
    } else {
      time = hour + ':' + min + ' AM';
    }
    return time;
  }

  $('#closeSesion').click(function() {
    firebase.auth().signOut().then(function() {
      console.log('Cerrando sesión...');
      $(location).attr('href','login.html');
    }).catch(function(error) {
      console.log(error);
    });
 });
  
});