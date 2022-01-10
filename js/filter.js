const articleList = document.querySelectorAll(".article_container");
let filterBase = {};
const tags = document.querySelectorAll('.tag');
tags.forEach(tag => {
	tag.addEventListener("click", filterByTag)
	if (filterBase[tag.innerHTML]) {
		filterBase[tag.innerHTML]++;
	} else {
		filterBase[tag.innerHTML] = 1
	}
});
console.log(filterBase)

//filter tags
let filterRequest = []
if (window.location.href.indexOf("tags") > -1 && sessionStorage.getItem('filterRequest')) {
	filterRequest = [sessionStorage.getItem('filterRequest')];
	renderResults()
}

function filterByTag() {
	if (window.location.href.indexOf("tags") > -1) {
		sessionStorage.setItem('filterRequest','')
		filterRequest = []
		this.classList.toggle("active");
		document.querySelectorAll(".tag.active").forEach(tag => {
			filterRequest.push(tag.innerHTML);
		});
		console.log(filterRequest)
		renderResults();
		
		
	} else {
		sessionStorage.setItem("filterRequest", this.innerHTML);
		window.location.pathname = 'Adavice-dsp/tags.html';
	}
}

function renderResults() {

		articleList.forEach(article => {
			article.setAttribute("data-filter", "0");
			article.querySelectorAll('.tag').forEach(tag => {
				if (filterRequest.indexOf(tag.innerHTML) !== -1 || article.getAttribute("data-filter") == "1") {
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

	




