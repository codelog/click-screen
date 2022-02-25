let scrWidth 	= document.getElementById('width');
let scrHeight 	= document.querySelector("#height span");
let pageX		= document.querySelector("#pageX");
let pageY		= document.querySelector("#pageY");
let screenX		= document.querySelector("#screenX");
let screenY		= document.querySelector("#screenY");


let screenTopLeft		= document.querySelector(".split-child:first-of-type");
let screenTopRight		= document.querySelector(".split-child:nth-of-type(2)");
let screenBottomLeft	= document.querySelector(".split-child:nth-of-type(3)");
let screenBottomRight	= document.querySelector(".split-child:last-of-type");

function cleanTxt() {
	screenTopLeft.innerHTML 	= "";
	screenTopRight.innerHTML 	= "";
	screenBottomLeft.innerHTML 	= "";
	screenBottomRight.innerHTML = "";
}

function mousemove(event) {
	pageX.innerHTML 	= event.pageX;
	pageY.innerHTML 	= event.pageY;
	screenX.innerHTML 	= event.clientX;
	screenY.innerHTML 	= event.clientY;
}

function screenTL() {
	cleanTxt();
	screenTopLeft.innerHTML = "Izquierda arriba";
}

function screenTR() {
	cleanTxt();
	screenTopRight.innerHTML = "Derecha arriba";
}

function screenBL() {
	cleanTxt();
	screenBottomLeft.innerHTML = "Izquierda abajo";
}

function screenBR() {
	cleanTxt();
	screenBottomRight.innerHTML = "Derecha abajo";
}

//  ON LOAD PAGE
window.onload = function() {
	scrWidth.innerHTML 	= window.innerWidth;
	scrHeight.innerHTML = window.innerHeight;
};

//  ON RESIZE PAGE
window.onresize = function() {
	scrWidth.innerHTML 	= window.innerWidth; 
	scrHeight.innerHTML = window.innerHeight;
};

window.addEventListener('mousemove', mousemove);