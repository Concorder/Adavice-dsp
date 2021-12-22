var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    if (window.innerWidth > 980) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".blog_header").style.top = "0";
        } else {
            document.querySelector(".blog_header").style.top = "-95px";
        }
        prevScrollpos = currentScrollPos;
    }
    else {
        document.querySelector(".blog_header").style.top = "0";
    }
}

$('.share_icon_1').mouseenter(function () {
    $('.share_icon_1 path').css('fill', '#10345A');
});

$('.share_icon_1').mouseleave(function () {
    $('.share_icon_1 path').css('fill', '#8C8C8C');
});

$('.share_icon_2').mouseenter(function () {
    $('.share_icon_2 path').css('fill', '#10345A');
});

$('.share_icon_2').mouseleave(function () {
    $('.share_icon_2 path').css('fill', '#8C8C8C');
});


$('.see_more').click(function () {
    if ($('.more_tags').css('display') == "none") {
        $('.more_tags').slideDown(200);
    }
    else{
        $('.more_tags').slideUp(200);
    }
});