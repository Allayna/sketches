var path = [];
var angle = 0;
var resolution = 5;
var sun;
var end;
var circles;

function setup() {
  createCanvas(600, 600);
	circles = createCheckbox('Show Circles');
  sun = new Orbit(width/2, height/2, width/4, 0);
  var next = sun;
  for (var i = 0; i < 10; i++) {
    next = next.addChild();
  }
  end = next;
}

function draw() {
  background(20);

  for (var i = 0; i < resolution; i++) {
    var next = sun;
    while (next != null) {
      next.update();
      next = next.child;
    }
    var part = {
      pos: createVector(end.x, end.y),
    };
    path.push(part);
  }

  var next = sun;
  while (next != null) {
    next.show();
    next = next.child;
  }

  noFill();
  for (var i = 1; i < path.length; i++) {
    var prevPos = path[i - 1].pos;
    var part = path[i];
    var pos = part.pos;
		strokeWeight(1.5);
    stroke(255);
    line(prevPos.x, prevPos.y, pos.x, pos.y);
  }
}