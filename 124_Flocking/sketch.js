const flock = [];

let alignSlider, cohesionSlider, separationSlider;

function setup() {
  createCanvas(800, 500);
  alignSlider = createSlider(0, 2, 1, 0.1);
  alignSlider.position(20, 10);
  cohesionSlider = createSlider(0, 2, 1, 0.1);
  cohesionSlider.position(20, 40);
	separationSlider = createSlider(0, 2, 1.4, 0.1);
	separationSlider.position(20, 70);
  for (let i = 0; i < 150; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  background(51);
  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
	stroke(255);
	strokeWeight(1);
	noFill();
	text('alignment : ' + alignSlider.value(), 160, 17);
	text('cohesion : ' + cohesionSlider.value(), 160, 47);
	text('separation : ' + separationSlider.value(), 160, 77);
}