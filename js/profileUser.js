$('document').ready(function() {
    /* ventaana profileUser */
    $('#demo').daterangepicker({
        "startDate": "11/01/2018",
        "autoApply": true,
        "endDate": "11/12/2019"
    });

    $('#config').click(function() {
        window.location.href = 'userConfig.html';
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
});