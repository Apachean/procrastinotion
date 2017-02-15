// inherits background.js
var bgpage = chrome.extension.getBackgroundPage();

// primary function to connect to extension
document.addEventListener('DOMContentLoaded', function () {

	// listens for a mouse click
	// document.querySelector(connect to html id).addEventListener('type of event', which function to call if event happens);
    document.querySelector('#plusFive').addEventListener('click', plusMe);
	document.querySelector('#minusFive').addEventListener('click', minusMe);
	
});

function plusMe()
{
	// lol okay, if you try += 5 it adds 5 as a string to it
	// but if you try -= it minus as an integer
	// so this fix works -= -
	document.getElementById("numberLabel").textContent -= -5;
}
	//If you make it +document.getElementById("numberLabel").textContent += 5 it adds as an integer

function minusMe()
{
	document.getElementById("numberLabel").textContent -= 5;
}
