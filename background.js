var totalSeconds = 33;
var workingTime = 0;
var surfingTime = 0;
var timerState = 1;

// make the array work in checkURL(url)
var arrayOfSurfSites = ["facebook", "youtube"]; //this doesn't work yet

var varTimer;

// Fires when tab is changed
chrome.tabs.onActivated.addListener(function(activeInfo) {
	chrome.tabs.get(activeInfo.tabId, function (tab) {
		if (timerState==1) checkURL(tab.url);		
	});
});

// Fires when url is changed
chrome.tabs.onUpdated.addListener(function(tabId, props) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		if (timerState==1) checkURL(tabs[0].url);
	});
});

// Fires when chrome loads -- gets first active page
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	if (timerState==1) checkURL(tabs[0].url);
});

function resumeTimer()
{
	timerState = 1;
	
	// no idea but it made it work soooooooooooo
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		checkURL(tabs[0].url);
	});
}

function pauseTimer()
{
	clearInterval(varTimer);
	timerState = 0;
}


function resumeWorkTime()
{
	if (varTimer)
	{
		clearInterval(varTimer);
	}
	varTimer = setInterval(incrementWork, 60000);
}

function pauseWorkTime()
{
	clearInterval(varTimer);
}

function incrementWork()
{
	++workingTime;
	chrome.browserAction.setBadgeText({text: String(workingTime)});
}

function resumeSurfTime()
{
	if (varTimer)
	{
		clearInterval(varTimer);
	}
	varTimer = setInterval(incrementSurf, 60000);
}

function pauseSurfTime()
{
	clearInterval(varTimer);
}

function incrementSurf()
{
	++surfingTime;
	chrome.browserAction.setBadgeText({text: String(surfingTime)});
}

//The function below checks if the URL includes a bad string (This is seemingly the best way)
function checkURL(url) 
{
	if (url.includes("twitter")|| url.includes("facebook") || url.includes("youtube")|| url.includes("reddit")|| url.includes("game")|| url.includes("instagram")|| url.includes("tumblr"))
	{
		chrome.browserAction.setBadgeBackgroundColor({color:[254, 84, 66, 1]}); // red
		//chrome.browserAction.setBadgeText({text: "Bad"});
		chrome.browserAction.setBadgeText({text: String(surfingTime)});
		
		pauseWorkTime();
		resumeSurfTime();
	}
	else 
	{
		chrome.browserAction.setBadgeBackgroundColor({color:[0, 172, 140, 1]}); // green
		//chrome.browserAction.setBadgeText({text: "Good"});
		chrome.browserAction.setBadgeText({text: String(workingTime)});
		
		pauseSurfTime();
		resumeWorkTime();
	}
}

function getWorkTime()
{
	return workingTime;
}

function getSurfTime()
{
	return surfingTime;
}




