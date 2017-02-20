// inherits background.js
var bgpage = chrome.extension.getBackgroundPage();
var totalSeconds = 0;
var playing = false;
var varTimer;

// primary function to connect to extension
document.addEventListener('DOMContentLoaded', function () {

	// listens for a mouse click
	// document.querySelector(connect to html id).addEventListener('type of event', which function to call if event happens);
    document.querySelector('#start').addEventListener('click', start);
	document.querySelector('#stopPLEASE').addEventListener('click', stopPLEASE);
	
});

function start()
{
	if (varTimer)
	{
		clearInterval(varTimer);
	}
	varTimer = setInterval(increment, 1000);
}

function stopPLEASE()
{
	clearInterval(varTimer);
}

function increment()
{
	 ++totalSeconds;
	 document.getElementById("numberLabel").textContent = totalSeconds%60;
}
