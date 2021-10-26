$(document).ready(function () {
    $('.link_list_1').click(function () {
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
        if ($('.list_arrow_right_1').css("display") == "block") {
            $('.list_arrow_right_1').css("display", "none");
            $('.list_arrow_down_1').css("display", "block");
            $('.first_submenu').slideDown(200);
            return false;
        }

        if ($('.list_arrow_down_1').css("display") == "block") {
            $('.list_arrow_right_1').css("display", "block");
            $('.list_arrow_down_1').css("display", "none");
            $('.first_submenu').slideUp(200);
            return false;
        }

    });

    $('.link_list_2').click(function () {
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
        if ($('.list_arrow_right_2').css("display") == "block") {
            $('.list_arrow_right_2').css("display", "none");
            $('.list_arrow_down_2').css("display", "block");
            $('.second_submenu').slideDown(200);
            return false;
        }

        if ($('.list_arrow_down_2').css("display") == "block") {
            $('.list_arrow_right_2').css("display", "block");
            $('.list_arrow_down_2').css("display", "none");
            $('.second_submenu').slideUp(200);
            return false;
        }
    });

    $(".new_menu_list").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    $('#for_submenu_3').click(function () {
        if ($('.new_menu').css("display") == "none") {
            $('.new_menu').slideDown(200);
            return false;
        }

        if ($('.new_menu').css("display") == "block") {
            $('.new_menu').slideUp(200);
            return false;
        }
    });
});

$(window).resize(function () {
    if ($(window).width() <= 980) {
        $('.new_menu').css("display", "none");
    }
    if ($(window).width() > 980) {
        $('.new_menu').css("display", "block");
    }
    console.log($(window).width());
});






