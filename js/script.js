$(document).ready(function(){
    /*$(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });*/

    $('#services').hover(function() {
        $('#services_sub').slideDown(200);
    }, function(){
        $('#services_sub').slideUp(50);
        });



});
let today = new Date();
let year = today.getFullYear();
$('#year').text(year);

