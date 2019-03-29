let angle = 0;
let w = 24;
let ma;
let maxD;
let interact;

function setup() {
	createCanvas(400, 400, WEBGL);
	interact = createCheckbox('Interact');
}

function draw() {
	background(0);
	ma = atan(cos(QUARTER_PI));
	maxD = dist(0, 0, 200, 200);
	ortho(-325, 325, -325, 325, 0, 1000);
	if (interact.checked()) {
	rotateY(-(mouseX / (width / 2)))
	rotateX(-(mouseY / (height / 2)))
	} else {
		rotateX(-ma);
  	rotateY(-QUARTER_PI);
	}
	
	
	for (let z = 0; z < height; z += w) {
		for (let x = 0; x < width; x += w) {
			push();
			let d = dist(x, z, width / 2, height / 2);
			let offset = map(d, 0, maxD, -PI, PI);
			let a = angle + offset;
			let h = floor(map(sin(a), -1, 1, 100, 300));
			normalMaterial()
			translate(x - width / 2, 0 / 2, z - height / 2);
			box(w, h, w);
			pop();
		}
	}
	
	angle -= 0.1;
}