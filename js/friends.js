$(document).ready(function () {
   
    var know1 = data.know.characters;
    var followens1 = data.followens.characters;
    var mentors1 = data. mentors.characters;
    var knowfollow1 = data.knowfollow.characters;

    // dando funcionabilidad al btn-know
    $('.btn-know').click(function () {
        for (var i = 0; i < know1.length; i++) {

            $('.followems, .mentors, .knowPeole').empty(); //a los divs se les remueve todos sus hijos
            $('.know').append('<div class="row character">' +
                '<div class= "col-md-6 text-center">' +
                '<img src="../assets/' + know1[i].picture + '">' +
                '</div>' +
                '<div class= "col-md-6">' +
                '<h3>' + know1[i].name + '</h3>' +
                '<p>School: ' + know1[i].school + '</p>' +
                '<p>City: ' + know1[i].city + '</p>' +
                '</div>' +
                '</div>')
        }
    })

    // utilizando hide() y show()

    $('.btn-followems').click(function () {
        for (var i = 0; i < followens1.length; i++) {
            $('.know, .mentors, .knowPeole').empty();
            $('.followems').append('<div class="row character">' +
                '<div class= "col-md-6 text-center">' +
                '<img src="../assets/' + followens1[i].picture + '">' +
                '</div>' +
                '<div class= "col-md-6">' +
                '<h3>' + followens1[i].name + '</h3>' +
                '<p>City: ' + followens1[i].city + '</p>' +
                '</div>' +
                '</div>')
        }
    })

    $('.btn-mentors').click(function () {
        for (var i = 0; i < mentors1.length; i++) {
            $('.followems, .know, .knowPeole').empty();
            $('.mentors').append('<div class="row character">' +
                '<div class= "col-md-6 text-center">' +
                '<img src="../assets/' + mentors1[i].picture + '">' +
                '</div>' +
                '<div class= "col-md-6">' +
                '<h3>' + mentors1[i].name + '</h3>' +
                '<p>City: ' + mentors1[i].city + '</p>' +
                '</div>' +
                '</div>')
        }
    })

    $('.btn-follow').click(function () {
        for (var i = 0; i < follow1.length; i++) {
            $('.followems, .mentors, .know').empty();
            $('.follow').append('<div class="row character">' +
                '<div class= "col-md-6 text-center">' +
                '<img src="../assets/' + follow1[i].picture + '">' +
                '</div>' +
                '<div class= "col-md-6">' +
                '<h3>' + follow1[i].name + '</h3>' +
                '<p>City: ' + follow1[i].city + '</p>' +
                '</div>' +
                '</div>')
        }
    })

 //todos 

    var allCharacters = [];

    $('.btn-knowPeople').click(function () {
        $('.followems, .mentors, .know').empty();
       
        for (var i in data) {
            allCharacters.push(data[i].characters);
        }
       
        for (var i = 0; i < allCharacters.length; i++) {
            for (var j = 0; j < allCharacters.length; j++) {
                $('.knowPeople').append('<div class="row character">' +
                    '<div class= "col-md-6 text-center">' +
                    '<img src="../assets/' + allCharacters[i][j].picture + '">' +
                    '</div>' +
                    '<div class= "col-md-6">' +
                    '<h3>' + allCharacters[i][j].name + '</h3>' +
                    '<p>City: ' + allCharacters[i][j].city + '</p>' +
                    '</div>' +
                    '</div>')
            }
        }
    })
});
