class Player {
  constructor(x, y, w, h, speed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
  }

  show() {
    fill(0, 0, 255);
    noStroke();
    image(playerImg, this.x, this.y, this.w, this.h);
  }

  move(dir) {
    this.x += dir;
  }
}
