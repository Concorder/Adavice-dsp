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
let tags = document.querySelectorAll('.tag');
const onSearchPage = window.location.href.indexOf("search") > -1
if (tags.length > 0) {
	const articleList = document.querySelectorAll(".article_container");
	let filterBase = [];
	let filterRequest = [];
	if (onSearchPage && sessionStorage.getItem('filterRequest')) {
		filterRequest = [sessionStorage.getItem('filterRequest')];
		renderResults();
	}
	// building tag cloud
	tags.forEach(tag => {
		tag.addEventListener("click", filterByTag)
		if (filterBase.indexOf(tag.innerHTML) < 0) {
			filterBase.push(tag.innerHTML)
		}
	});
	console.log(filterBase)
	tagPool = document.querySelector(".tag_pool")
	addTag("all")
	filterBase.forEach(el => {
		addTag(el)
	});

	tags = document.querySelectorAll('.tag');
	
	function addTag(el) {
		let newTag = document.createElement("a");
		newTag.innerText = el;
		newTag.classList.add("tag");
		newTag.addEventListener("click", filterByTag)
		tagPool.appendChild(newTag);
		if (el == sessionStorage.getItem('filterRequest')){
			newTag.classList.add("active");
		}
	}

	function filterByTag() {
		if (onSearchPage) {
			sessionStorage.setItem('filterRequest', '')
			filterRequest = [];
			if (this.innerHTML === "all") {
				tags.forEach(tag=>{
					tag.classList.remove("active")
				})
				this.classList.add("active")
				renderResults()
			 return true
			}
			tags[0].classList.remove("active")
			tags.forEach(tag=>{
				if (tag.innerHTML === this.innerHTML){
					tag.classList.toggle("active")
				}
			})
			document.querySelectorAll(".tag.active").forEach(tag => {
				if (filterRequest.indexOf(tag.innerHTML) < 0) {
					filterRequest.push(tag.innerHTML);
				}
				
			});
			console.log(filterRequest)
			renderResults();
		} else {
			sessionStorage.setItem("filterRequest", this.innerHTML);
			window.location.pathname = 'Adavice-dsp/search.html';
		}
	}
	
	function renderResults() {
		const searchHeading = document.querySelector(".first_block h2");
		let shownCounter = 0;
		let tagsToDisplay = ""
		filterRequest.forEach(tag => {
			tagsToDisplay = tagsToDisplay + "#" + tag + " "
		})
		
		searchHeading.innerText = tagsToDisplay
		articleList.forEach(article => {
			article.setAttribute("data-filter", "0");
			article.querySelectorAll('.tag').forEach(tag => {
				if (filterRequest.indexOf(tag.innerHTML) !== -1 || article.getAttribute("data-filter") === "1") {
					article.setAttribute("data-filter", "1");
					article.classList.remove("hidden")
					shownCounter++
				} else {
					tag.setAttribute("data-filter", "0")
					article.classList.add("hidden")
				}
			});
		})
		if (shownCounter === 0) {
			articleList.forEach(article => {
				article.classList.remove("hidden");
				searchHeading.innerText = "All"
			})
		}
	}
}

