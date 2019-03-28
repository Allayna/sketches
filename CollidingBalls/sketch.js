let balls = [];

class Ball {
	constructor(x, y, r, xspeed, yspeed) {
		this.x = x;
		this.y = y;
		this.r = r
		this.xspeed = xspeed;
		this.yspeed = yspeed;
	}
	show() {
		noStroke();
		fill(this.fillr, this.fillg, this.fillb, 150);
		ellipse(this.x, this.y, this.r * 2);
	}
	move() {
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
	}
	bounce() {
		if (this.x > width - this.r || this.x < 0 + this.r) {
			this.xspeed *= -1;
			this.fillr = random(255);
			this.fillg = random(255);
			this.fillb = random(255);
		}
		if (this.y > height - this.r || this.y < 25 + this.r) {
			this.yspeed *= -1;
			this.fillr = random(255);
			this.fillg = random(255);
			this.fillb = random(255);
		}
	}

	intersects(other) {
		let d = dist(this.x, this.y, other.x, other.y);
		return (d < this.r + other.r);
	}
}

function setup() {
	createCanvas(800, 600);
}

function mousePressed() {
	//click on top right 'x' clears array
	if (mouseY < 25 && mouseX > 775) {
		balls.length = 0;
		//if mouse is close to top bar will only spawn small balls
	} else if (mouseY < 55) {
		//array limit of 15
		if (balls.length < 25) {
			let r = 8;
			let c = new Ball(mouseX, mouseY, r, random(-5,5), random(-5,5));
			balls.push(c);
		}
		//otherwise spawn range of size balls
	} else {
		//array limit of 15
		if (balls.length < 25) {
			let r = random(8, 35);
			let c = new Ball(mouseX, mouseY, r, random(-5,5), random(-5,5));
			balls.push(c);
		}
	}
}

function draw() {
	background(0);

	//borders
	fill(90);
	rect(width - width, height - height, width, height - height + 25)
	stroke(90);
	strokeWeight(5);
	noFill();
	rect(width - width, height - height, width, height);

	//clear x
	stroke(255)
	strokeWeight(2);
	line(width - 22, height - height + 5, width - 7, height - height + 20)
	line(width - 22, height - height + 20, width - 7, height - height + 5)
	//line(778, 5, 793, 20);
	//line(778, 20, 793, 5);

	//text
	strokeWeight(0);
	fill(255);
	textSize(17);
	text("Click to add Balls", width - width + 15, 19);

	for (c of balls) {
		c.move();
		c.bounce();
		c.show();
		for (other of balls) {
			if (c !== other && c.intersects(other)) {
				other.xspeed *= -1;
				other.yspeed *= -1;
			}
		}
	}
}