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
    else{
        document.querySelector(".blog_header").style.top = "0";
    }
}
