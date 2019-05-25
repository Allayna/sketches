let points;
let current;
let percent = 0.5;
let previous;

function setup() {
  createCanvas(windowWidth, windowHeight);
  points = [];
  const n = 5;

  for (let i = 0; i < n; i++) {
    // let v = createVector(random(width), random(height));
    let angle = i * TWO_PI / n;
    let v = p5.Vector.fromAngle(angle);
    v.mult(width / 2);
    v.add(width / 2, height / 2);
    points.push(v);
  }

  reset();
}

function reset() {
  current = createVector(random(width), random(height));
  background(0);
}

function draw() {

  if (frameCount % 100 == 0) {
    //reset();
  }

  for (let i = 0; i < 1000; i++) {
    strokeWeight(0.5);
    stroke(random(200, 255), 0, (200, 255));
    let next = random(points);
    if (next !== previous) {
      current.x = lerp(current.x, next.x, percent);
      current.y = lerp(current.y, next.y, percent);
      point(current.x, current.y);
    }
    previous = next;
  }
}