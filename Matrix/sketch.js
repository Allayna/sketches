var symbolSize = 26;
var streams = [];
var stream;

function setup() {
	createCanvas(
		window.innerWidth,
		window.innerHeight
	);
	var x = 0;
	for (var i = 0; i <= width / symbolSize; i++) {
		stream = new Stream();
		stream.generateSymbols(x, random(-1000, 0));
		streams.push(stream);
		x += symbolSize;
	}
	textSize(symbolSize);
};

function draw() {
	background(0, 150);
	streams.forEach(function(stream) {
		stream.render();
	});
}