const articleList = document.querySelectorAll(".article_container");
let filterBase = {};
const tags = document.querySelectorAll('.tag');
tags.forEach(tag=>{
    if (filterBase[tag.innerHTML]){
        filterBase[tag.innerHTML]++ ;
    } else {filterBase[tag.innerHTML] = 1}
});
console.log(filterBase)
//filter tags
// let filterRequest = sessionStorage.getItem('filterRequest');
let filterRequest = ["tag1", "tag4"]
if (filterRequest.length>0){
    articleList.forEach(article=>{
        article.querySelectorAll('.tag').forEach(tag=>{
            if (filterRequest.indexOf(tag.innerHTML)!== -1 || article.getAttribute("data-filter") == "1"){
                article.setAttribute("data-filter", "1");
            }
        })
        if (article.getAttribute("data-filter") !== "1"){
            article.style.display = "none"
        }
    })
}
