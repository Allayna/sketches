class Boss {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dir = 1;
    this.alive = true;
  }

  show() {
    if (this.alive) {
      image(bossImg, this.x, this.y, this.w, this.h);
      fill(255, 0, 0);
      textFont(bodyFont);
      textSize(10);
      text(bossHitPoints, this.x, this.y - 20)
     }
  }

  move() {
    this.x += this.dir;

    if ((this.x - (this.w / 2)) <= 5 || (this.x + (this.w / 2)) >= width - 5) {
      this.dir *= -1;

    }
  }
}
