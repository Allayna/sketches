let walls = [], ray, pt, particle, xoff = 0, yoff = 1000, interactive;

function setup() {
	interactive = createCheckbox('interactive');
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 4; i++)
		{
			let x1 = random(width);
			let x2 = random(width);
			let y1 = random(height);
			let y2 = random(height);
			walls[i] = new Boundary(x1, y1, x2, y2);
		}
	walls.push(new Boundary(0, 0, width, 0));
	walls.push(new Boundary(width, 0, width, height));
	walls.push(new Boundary(width, height, 0, height));
	walls.push(new Boundary(0, height, 0, 0));
	
	particle = new Particle();
	
}

function draw() {
	background(0);
	for (wall of walls) {
		wall.show();
	}
	if (interactive.checked()) {
		particle.update(mouseX, mouseY)
	} else {
		particle.update(noise(xoff) * width, noise(yoff) * height);
		xoff += 0.005;
		yoff += 0.005;
	}
	particle.show();
	particle.look(walls);
}