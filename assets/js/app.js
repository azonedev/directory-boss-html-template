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
