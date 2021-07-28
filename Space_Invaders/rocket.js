class Rocket {
  constructor(x, y, w, h, speed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.active = true;
  }

  show() {
    fill(26, 175, 255);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.y -= this.speed;
  }

  offScreen() {
    if (this.y < 50 + this.h / 2) {
      return true;
    }
  }

  hits(target) {
      var d = dist(this.x, this.y, target.x, target.y);
  		if (d < target.w / 2) {
  			return true;
  		} else {
  			return false;
  		}
	}
}

class BossRocket {
  constructor(x, y, w, h, speed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.active = true;
  }

  show() {
    if (this.active == true) {
      fill(255, 0, 0);
      rect(this.x, this.y, this.w, this.h);
    }
  }

  move() {
    this.y += this.speed;
  }

  offScreen() {
    if (this.y >= height - this.h / 2) {
      return true;
    }
  }

  hits(target) {
      var d = dist(this.x, this.y, target.x, target.y);
  		if (d < target.w / 2) {
  			return true;
  		} else {
  			return false;
  		}
	}
}
