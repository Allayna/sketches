var start = new Date().getTime();
var timeTaken = 1000;
var bestTime = 1000;

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
function makeShapeAppear() {
	var top = Math.random() * 400;
	var left = Math.random() * 400;
	var height = (Math.random() * 200) + 100;
	if (Math.random() > 0.5) {
		document.getElementById("shape").style.borderRadius = "50%";
		} 
	else {
		document.getElementById("shape").style.borderRadius = "0";
	}

		 var radius = Math.random() * 50;
	document.getElementById("shape").style.backgroundColor = getRandomColor();
	document.getElementById("shape").style.top = top + "px";
	document.getElementById("shape").style.left = left + "px";
	document.getElementById("shape").style.height = height + "px";
	document.getElementById("shape").style.width = height + "px";
	document.getElementById("shape").style.display = "block";
	start = new Date().getTime();
}
function appearAfterDelay() {
	setTimeout(makeShapeAppear, Math.random() * 2000);
}
appearAfterDelay();
document.getElementById("shape").onclick = function() {
	document.getElementById("shape").style.display = "none";
	var end = new Date().getTime();
	timeTaken = ((end - start) / 1000);
	if (timeTaken <= bestTime) {
		bestTime = timeTaken;
	}
	document.getElementById("timeOutput").innerHTML = timeTaken + " seconds";
	document.getElementById("bestOutput").innerHTML = bestTime + " seconds";
	appearAfterDelay();
}