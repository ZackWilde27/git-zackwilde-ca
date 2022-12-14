// JavaScript Document

console.log("Zack's JavaScript is working");

// VARIABLES
//
var Character = {Glasses:"images/glasses1.png", Hat:"images/hat1.png", Shirt:"images/shirt1.png", Backg:"images/face.jpg"};

var glassesList = ["images/glasses1.png", "images/glasses2.png", "images/glasses3.png", "images/x.png"];

var hatList = ["images/hat1.png", "images/hat2.png", "images/hat3.png", "images/hat4.png", "images/x.png"];

var shirtList = ["images/shirt1.png", "images/shirt2.png", "images/shirt3.png", "images/shirt4.png", "images/shirt5.png", "images/shirt6.png"];

var bgList = ["images/face.jpg", "images/back2.jpg", "images/back3.jpg", "images/back4.jpg", "images/back5.jpg"];

var glassesOption = 0;

var hatOption = 0;

var shirtOption = 0;

var bgOption = 0;

// UPDATING IMAGES
//
// Function to update character preview, because I'm going to need to do it a lot.
// Component: 0 = glasses, 1 = hat, 2 = shirt, 3 = background. Only updates the component that changed.
function Reveal(Component){
	switch(Component){
		case 0:
			document.getElementById('glasses').innerHTML = "<img src='" + Character.Glasses + "'>";
			break
		case 1:
			document.getElementById('hat').innerHTML = "<img src='" + Character.Hat + "'>";
			break
		case 2:
			document.getElementById('shirt').innerHTML = "<img src='" + Character.Shirt + "'>";
			break
		case 3:
			document.getElementById('back').innerHTML = "<img src='" + Character.Backg + "'>";
			break
	}
}

// Function to update the thumbnail image on an option, because I'm going to need it a lot.
function updateImg(id, image){
	// Reroutes the image path to the thumbnail version.
	document.getElementById(id).src = image.substr(0, 7) + "smaller/" + image.substr(7, (image.length - 7));
}

// BUTTONS
//
function gRight(){
	glassesOption += 1;
	
	// Clamping variable to list length, so I can add without updating the code.
	// I've discovered that getting an array's length will include a shadow object at the end, so the list length is always subtracted by 1
	if(glassesOption > (glassesList.length - 1)){
		glassesOption = 0;
	}
	console.log(glassesOption);
	Character.Glasses = glassesList[glassesOption];
	updateImg("gImg", Character.Glasses);
	Reveal(0);
}

function gLeft(){
	glassesOption -= 1;
	// Clamping variable
	if(glassesOption < 0){
		glassesOption = glassesList.length - 1;
	}
	console.log(glassesOption);
	Character.Glasses = glassesList[glassesOption];
	updateImg("gImg", Character.Glasses);
	Reveal(0);
}

function hRight(){
	hatOption += 1;
	// Clamping variable
	if(hatOption > (hatList.length - 1)){
		hatOption = 0;
	}
	console.log(hatOption);
	Character.Hat = hatList[hatOption];
	updateImg("hImg", Character.Hat);
	Reveal(1);
}

function hLeft(){
	hatOption -= 1;
	// Clamping variable
	if(hatOption < 0){
		hatOption = (hatList.length - 1);
	}
	console.log(hatOption);
	Character.Hat = hatList[hatOption];
	updateImg("hImg", Character.Hat);
	Reveal(1);
}

function sRight(){
	shirtOption += 1;
	// Clamping variable
	if(shirtOption > (shirtList.length - 1)){
		shirtOption = 0;
	}
	console.log(shirtOption);
	Character.Shirt = shirtList[shirtOption];
	updateImg("sImg", Character.Shirt);
	Reveal(2);
}

function sLeft(){
	shirtOption -= 1;
	// Clamping variable
	if(shirtOption < 0){
		shirtOption = (shirtList.length - 1);
	}
	console.log(shirtOption);
	Character.Shirt = shirtList[shirtOption];
	updateImg("sImg", Character.Shirt);
	Reveal(2);
}

function bRight(){
	bgOption += 1;
	// Clamping variable
	if(bgOption > (bgList.length - 1)){
		bgOption = 0;
	}
	console.log(bgOption);
	Character.Backg = bgList[bgOption];
	updateImg("bImg", Character.Backg);
	Reveal(3);
}

function bLeft(){
	bgOption -= 1;
	// Clamping variable
	if(bgOption < 0){
		bgOption = (bgList.length - 1);
	}
	console.log(bgOption);
	Character.Backg = bgList[bgOption];
	updateImg("bImg", Character.Backg);
	Reveal(3);
}

