function BreakState() {
	this.length = function() {
		return localStorage["break-selection"] || 15;
	};
	this.delay = 10;
	this.html = "popup.html";
	this.opt = {
		type: "basic",
		title: "Break's over!",
		message: "Your pomodoro period will start in 10 seconds.",
		iconUrl: "icon.png"
	};
	this.notificationBaseId = "breakOver";
	this.nextState = "pomodoro";
}
