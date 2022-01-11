$(document).ready(function () {
    /*$(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });*/

    $('#services').hover(function () {
        $('#services_sub').slideDown(200);
    }, function () {
        $('#services_sub').slideUp(50);
    });

    $('#company').hover(function () {
        $('#company_sub').slideDown(200);
    }, function () {
        $('#company_sub').slideUp(50);
    });
});

let today = new Date();
let year = today.getFullYear();
document.querySelector('#year').innerText = year;

//filters and tags
//if there are tags on page
const tags = document.querySelectorAll('.tag');
if (tags.length > 0) {
    const articleList = document.querySelectorAll(".article_container");
    let filterBase = {};
    let filterRequest = []
    tags.forEach(tag => {
        tag.addEventListener("click", filterByTag)
        if (filterBase[tag.innerHTML]) {
            filterBase[tag.innerHTML]++;
        } else {
            filterBase[tag.innerHTML] = 1
        }
    });
    console.log(filterBase)
    
    if (window.location.href.indexOf("search") > -1 || sessionStorage.getItem('filterRequest').length > 0) {
        filterRequest = [sessionStorage.getItem('filterRequest')];
        renderResults()
    }
    
    function filterByTag() {
        if (window.location.href.indexOf("search") > -1) {
            sessionStorage.setItem('filterRequest', '')
            filterRequest = []
            this.classList.toggle("active");
            document.querySelectorAll(".tag.active").forEach(tag => {
                filterRequest.push(tag.innerHTML);
            });
            console.log(filterRequest)
            renderResults();
            
            
        } else {
            sessionStorage.setItem("filterRequest", this.innerHTML);
            window.location.pathname = 'Adavice-dsp/search.html';
        }
    }
    
    function renderResults() {
        articleList.forEach(article => {
            article.setAttribute("data-filter", "0");
            article.querySelectorAll('.tag').forEach(tag => {
                if (filterRequest.indexOf(tag.innerHTML) !== -1 || article.getAttribute("data-filter") === "1") {
                    article.setAttribute("data-filter", "1");
                } else {
                    tag.setAttribute("data-filter", "0")
                }
            });
            if (article.getAttribute("data-filter") !== "1") {
                article.style.display = "none"
            }
        })
    }
}

