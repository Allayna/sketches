class Tile {

  constructor(x, y, wh, index, next) {
    this.x = x;
    this.y = y;
    this.wh = wh;
		this.index = index;
		if (this.index % 2 == 0) {
			this.color = 230;
			this.tcolor = 20;
		} else {
			this.color = 0;
			this.tcolor = 255;
		}
		this.next = next;
		this.snadder = 0;
  }
	
	getCenter() {
    let cx = this.x + this.wh / 2;
    let cy = this.y + this.wh / 2;
    return [cx, cy];
  } 
	
	show(tiles) {
		fill(this.color);
		noStroke();
		rect(this.x, this.y, this.wh, this.wh);
					
		noStroke();
		fill(this.tcolor)
		textSize(14);
		text(this.index + 1/* + '->' + this.next*/, this.x + 2, this.y + this.wh - 2);
	}
	
	highlight(tiles) {
		fill(0, 0, 200, 100);
		noStroke();
		rect(this.x, this.y, this.wh, this.wh);
	}
	
	showSnadders() {
    if (this.snadder != 0) {
      let myCenter = this.getCenter();
      let nextCenter = tiles[this.index + this.snadder].getCenter();
      strokeWeight(6);
      if (this.snadder < 0) {
        stroke(255, 0, 0, 200);
      } else {
        stroke(0, 255, 0, 200);
      }
      line(myCenter[0], myCenter[1], nextCenter[0], nextCenter[1]);
    }
  }
}