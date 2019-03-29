var k;
var d;
var n;
var nslider;
var dSlider;

function setup() {
	createCanvas(400, 400);
	dSlider = createSlider(1, 15, 8, 0.1);
	nSlider = createSlider(1, 15, 5, 0.1);
}

function draw() {
	background(51);
	translate(width / 2, height / 2);
	d = dSlider.value();
	n = nSlider.value();
	k = n / d;
	beginShape();
	for (var a = 0; a < TWO_PI * d; a += 0.02) {
		var r = 200 * cos(k * a);
		var x = r * cos(a);
		var y = r * sin(a);
		noFill();
		stroke(255);
		strokeWeight(1);
		vertex(x, y);
	}
	endShape();
}
