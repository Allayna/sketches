function Symbol(x, y, speed, first) {
	this.x = x;
	this.y = y;
	this.value;
	this.speed = speed;
	this.switchInterval = round(random(10, 20));
	this.first = first;

	this.setToRandomSymbol = function() {
		if (frameCount % this.switchInterval == 0) {
			this.value = String.fromCharCode(
				0x30A0 + round(random(0, 96))
			);
		}
	}

	this.rain = function() {
		this.y = (this.y >= height) ? 0 : this.y += this.speed;
	}
}