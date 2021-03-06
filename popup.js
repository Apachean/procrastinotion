// inherits background.js
var bgpage = chrome.extension.getBackgroundPage();
var totalSeconds = 0;
var playing = false;
var workTimeLimit = Number(localStorage.workTimeLimit) || 300;
var surfTimeLimit = Number(localStorage.surfTimeLimit) || 300;

var varTimer;

// primary function to connect to extension
document.addEventListener('DOMContentLoaded', function () {
	load();
	// listens for a mouse click
	// document.querySelector(connect to html id).addEventListener('type of event', which function to call if event happens);
    document.querySelector('#resume').addEventListener('click', resume);
	document.querySelector('#pause').addEventListener('click', pause);
	 document.querySelector('#setWork').addEventListener('click', setWork);
	document.querySelector('#setSurf').addEventListener('click', setSurf);
	
});

function load()
{
	if (varTimer)
	{
		clearInterval(varTimer);
	}
	// update worktime, surftime every 100
	varTimer = setInterval(getbgpageTime, 100);
}

function getbgpageTime()
{
	// there is a delay, but it won't matter once we change from seconds to minutes
	
	if (bgpage.getSurfTime() > surfTimeLimit)
	{
		// over the limit
		document.getElementById("surfTime").style.color = "red";
		// send notification once
	}
	else
	{
		// within the limit
		document.getElementById("surfTime").style.color = "green";
	}
	
	if (bgpage.getWorkTime() < workTimeLimit)
	{
		// not worked long enough
		document.getElementById("workTime").style.color = "red";
	}
	else
	{
		// worked enough or more
		document.getElementById("workTime").style.color = "green";
		// send notification
	}
	
	document.getElementById("surfTime").textContent = bgpage.getSurfTime();
	document.getElementById("surfTimeLimit").textContent = "/" + surfTimeLimit;
	document.getElementById("workTime").textContent = bgpage.getWorkTime();
	document.getElementById("workTimeLimit").textContent = "/" + workTimeLimit;
}

function resume()
{
	bgpage.resumeTimer();
}

function pause()
{
	bgpage.pauseTimer();
}

function setWork()
{var newWork = prompt ("Please enter your new Work Time","");
 workTimeLimit=newWork;
 localStorage.workTimeLimit=newWork;
}


function setSurf()
{var newSurf = prompt ("Please enter your new Surf Time","");
 surfTimeLimit = newSurf;
 localStorage.surfTimeLimit=newSurf;
}
