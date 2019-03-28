var ship;
var asteroids = [];
var lasers = [];
var score = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship();
	spawn();
}

function spawn() {
	for (var i = 0; i < 10; i++) {
		asteroids.push(new Asteroid());
	}
}

function draw() {
	background(0);
	fill(255);
	textSize(20)
	text('Score: ' + score, 10, 25)

	if (asteroids.length === 0) {
		text('Press Space to Restart!', 10, 50);
	}

	for (var i = 0; i < asteroids.length; i++) {
		if (ship.hits(asteroids[i])) {
			score = 0;
			asteroids = [];
			setTimeout(spawn, 3000);
			break;
		}
		asteroids[i].render();
		asteroids[i].update();
		asteroids[i].edges();
	}

	for (var i = lasers.length - 1; i >= 0; i--) {
		lasers[i].render();
		lasers[i].update();
		if (lasers[i].offscreen()) {
			lasers.splice(i, 1);
		} else {
			for (var j = asteroids.length - 1; j >= 0; j--) {
				if (lasers[i].hits(asteroids[j])) {
					if (asteroids[j].r > 20) {
						var newAsteroids = asteroids[j].breakup();
						asteroids = asteroids.concat(newAsteroids);
					}
					asteroids.splice(j, 1);
					lasers.splice(i, 1);
					score += 1;
					break;
				}
			}
		}
	}

	ship.render();
	ship.turn();
	ship.update();
	ship.edges();
}

function keyReleased() {
	ship.setRotation(0);
	ship.boosting(false);
}


function keyPressed() {
	if (key == ' ') {
		if (asteroids.length > 0) {
			lasers.push(new Laser(ship.pos, ship.heading));
		} else {
			spawn();
		}
	} else if (keyCode == RIGHT_ARROW) {
		ship.setRotation(0.1);
	} else if (keyCode == LEFT_ARROW) {
		ship.setRotation(-0.1);
	} else if (keyCode == UP_ARROW) {
		ship.boosting(true);
	}
}