// inherits background.js
var bgpage = chrome.extension.getBackgroundPage();
var totalSeconds = 0;
var playing = false;
var varTimer;
window.bad = ["reddit", "facebook", "https://www.facebook.com/"]; //This doesn't really do anything right now
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    window.url = tabs[0].url;
}); //This finds the url

// primary function to connect to extension
document.addEventListener('DOMContentLoaded', function () {

	// listens for a mouse click
	// document.querySelector(connect to html id).addEventListener('type of event', which function to call if event happens);
    document.querySelector('#start').addEventListener('click', start);
	document.querySelector('#stopPLEASE').addEventListener('click', stopPLEASE);
	document.querySelector('#URL').addEventListener('click', geturl);
	document.querySelector('#Bad').addEventListener('click', naughtytime);
	
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

function geturl()
{

   document.getElementById("urlplz").textContent = url;
}
//The function below checks if the URL includes a bad string (This is seemingly the best way)
 function naughtytime () {
if (url.includes("reddit")||url.includes("facebook") ||url.includes("twitter"))  
{document.getElementById("Nortee").textContent = "Oh No!";}
else {document.getElementById("Nortee").textContent = "Good";}
}