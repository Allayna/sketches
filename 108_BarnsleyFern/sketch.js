let x = 0;
let y = 0;

function setup() {
	createCanvas(windowHeight, windowHeight);
	background(0);
}

function nextPoint() {
    let nextX;
    let nextY;
    let r = random(1);

    if (r < 0.01) {
        nextY = 0.16 * y;
        nextX = 0;
    } else if (r < 0.86) {
        nextX = 0.85 * x + 0.04 * y;
        nextY = -0.04 * x + 0.85 * y + 1.6;
    } else if (r < 0.93) {
        nextX = 0.2 * x + -0.26 * y;
        nextY = 0.23 * x + 0.22 * y + 1.6;
    } else {
        nextX = -0.15 * x + 0.28 * y;
        nextY = 0.26 * x + 0.24 * y + 0.44;
    }
    x = nextX;
    y = nextY;
}

function drawPoint() {
	stroke(random(150), 0, random(90));
	strokeWeight(0.5);
	
	let px = map(x, -2.1820, 2.6558, 0, width);
  let py = map(y, 0, 9.9983, height, 0);

	point(px, py);
}

function draw() {
	for (let i = 0; i < 500; i++) {
		drawPoint();
		nextPoint();
	}
}