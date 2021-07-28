class Meteor {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
  }

  show() {
    fill(255);
    noStroke();
    image(meteorImg, this.x, this.y, this.w, this.w);
  }
}
