var drops = [];

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(227, 228, 247);
  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].fall();
  }
}
