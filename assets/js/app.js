// Open the full screen search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}



// listing-page read-more-btn
$readMoreJS.init({
	target: '#read-more',           // Selector of the element the plugin applies to (any CSS selector, eg: '#', '.'). Default: ''
	numOfWords: 50,               // Number of words to initially display (any number). Default: 50
	toggle: true,                 // If true, user can toggle between 'read more' and 'read less'. Default: true
	moreLink: '<button class="btn main-color bg-white border"> <strong>Read More <i class="bi bi-chevron-down"></i></strong></button>',    // The text of 'Read more' link. Default: 'read more ...'
	lessLink: '<button class="btn main-color bg-white border"> <strong>Show Less <i class="bi bi-chevron-up"></i></strong></button>'         // The text of 'Read less' link. Default: 'read less'
});

// listing-page read-more-btn
$readMoreJS.init({
	target: '#business-details-read-more',           // Selector of the element the plugin applies to (any CSS selector, eg: '#', '.'). Default: ''
	numOfWords: 50,               // Number of words to initially display (any number). Default: 50
	toggle: true,                 // If true, user can toggle between 'read more' and 'read less'. Default: true
	moreLink: '<button class="btn main-color bg-white border"> <strong>Read More <i class="bi bi-chevron-down"></i></strong></button>',    // The text of 'Read more' link. Default: 'read more ...'
	lessLink: '<button class="btn main-color bg-white border"> <strong>Show Less <i class="bi bi-chevron-up"></i></strong></button>'         // The text of 'Read less' link. Default: 'read less'
});


// listing page sticky menu
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("sticky-wrapper");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
	navbar.classList.add("sticky-listing")
	let header = document.getElementById('header');
	// let featureRating = document.getElementById('feature-rating');
	// let featureBtnGroup = document.getElementById('feature-btn-group');
	header.style.display = "none";
	// featureRating.style.display = "none";
	// featureBtnGroup.style.display = "none";
	// console.log(header);
	
  } else {
	navbar.classList.remove("sticky-listing");
	let header = document.getElementById('header');
	// let featureRating = document.getElementById('feature-rating');
	// let featureBtnGroup = document.getElementById('feature-btn-group');
	header.style.display = "block";
	// featureRating.style.display = "block";
	// featureBtnGroup.style.display = "block";
  }
}


// printfor terms page 
function terms_print(divName){
	 var printContent = document.getElementById(divName).innerHTML;
	 var originalContent = document.body.innerHTML;
	 document.body.innerHTML = printContent;
	 window.print();
	 document.body.innerHTML = originalContent;
}