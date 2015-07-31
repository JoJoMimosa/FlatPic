// SRIPTS.JS

// Fades in thumbnails when they are loaded
function displayThumb(el) {
	el.style.opacity = 1;
}

// On body load
document.body.onload = function() {
	// Set the container and creates the gallery
	var container = document.getElementById("container");
	createGallery();	
}

// Node for every images
var img_obj = document.createElement("img");
img_obj.className = "img";
img_obj.setAttribute("onload","displayThumb(this)");

// "Show more" button
var show_more = document.createElement("button");
show_more.id = "show_more";
show_more.innerHTML = "Montrer plus";
show_more.setAttribute("onclick","createGallery()");

//Loop counter
var count = 0;

// Builds the gallery
function createGallery() {
	// The var limit represents the limit number of images that will be displayed
	// If there are fewer pictures to display than the limit, it is set to that number
	var limit = 24;
	if(img_array.length < 24) {
		limit = img_array.length;
	}

	// Loop used to create the gallery
	for(var i = 0; i < limit; i++) {
		var img = img_obj.cloneNode(true);
		img.src = "thumb/"+img_array[i];
		img.setAttribute("onclick","displayIMG("+count+")");
		container.appendChild(img);
		count++;
	}

	// This array contains the filenames of the pictures that haven't been displayed yet
	// If it is empty, the "Show more" button has to be removed, otherwise it is appended
	img_array.splice(0,limit);
	if(img_array != "") {
		container.appendChild(show_more);
	} else if(document.contains(show_more)) {
		container.removeChild(show_more);
	}
}

// Display the picture in "full-screen" mode
var display = document.getElementById("display");
var mask = document.getElementById("mask");
var index = 0;

function displayIMG(ind) {
	document.body.style.overflowY = "hidden";
	var bg = document.createElement("img");
	bg.onload = function() {
		setTimeout(function() {
			display.style.background = "url(full/"+img_copy[ind]+") 50% 50% / contain no-repeat fixed rgb(0, 0, 0)";
			mask.style.opacity = 0;
		},200);
	}
	bg.src = "full/"+img_copy[ind];
	display.style.zIndex = 99;
	display.style.opacity = 1;
	mask.style.opacity = 1;
	setTimeout(function() {
		bg.onload = function() {
			display.style.background = "url(full/"+img_copy[ind]+") 50% 50% / contain no-repeat fixed rgb(0, 0, 0)";
			mask.style.opacity = 0;
		}
	},200);
	index = ind;
}

// Close the "full-screen" image display
function closeDisplay() {
	display.style.opacity = 0;
	document.body.style.overflowY = "visible";
	setTimeout(function() {
		display.style.zIndex = -1;
		display.style.background = "#000";
	},200);
}


// Display next picture
var next = document.getElementById("next");
function nextIMG() {
	if(img_copy[index+1] !== undefined) {
		displayIMG(index+1);
	}
}

// Display previous picture
var prev = document.getElementById("prev");
function prevIMG() {
	if(img_copy[index-1] !== undefined) {
		displayIMG(index-1);
	}
}