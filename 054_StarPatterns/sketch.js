var poly;
var polys = [];
var angle;
var delta;
var bg = 51;

var deltaSlider;
var angleSlider;

function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);
	
	deltaSlider = createSlider(0, 25, 1);
	angleSlider = createSlider(0, 90, 60);
	
	var inc = 100;
	for (var x = 0; x < width; x += inc) {
		for (var y = 0; y < height; y += inc) {
			poly = new Polygon();
			poly.addVertex(x, y);
			poly.addVertex(x + inc, y);
			poly.addVertex(x + inc, y + inc);
			poly.addVertex(x, y + inc);
			poly.close();
			polys.push(poly);
		}
	}
}

function draw() {
	background(bg);
	angle = angleSlider.value();
	delta = deltaSlider.value();
	for (var i = 0; i < polys.length; i++) {
		polys[i].hankin();
		polys[i].show();
	}
}