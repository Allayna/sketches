let points;
let current;
let percent = .5;
let previous;

let x, y;

function setup() {
	createCanvas(windowWidth, windowHeight);
	points = [];
	const n = 6;
	
	for (let i = 0; i < n; i++) {
		let angle = i * TWO_PI / n;
		let v = p5.Vector.fromAngle(angle);
		v.mult(height / 2);
		v.add(width / 2, height / 2);
		points.push(v);
	}
	reset();
}

function draw() {
	for (let i = 0; i < 100; i++) {
		strokeWeight(1);
		stroke(255,200)
		point(x, y);
		let next = random(points);
		if (next !== previous) {
			current.x = lerp(current.x, next.x, percent);
			current.y = lerp(current.y, next.y, percent);
			point(current.x, current.y);
		}
		previous = next;
	}
}

function reset() {
	background(0);
	
	
	current = createVector(random(width), random(height));
	for (let p of points) {
		point(p.x, p.y);
	}
}