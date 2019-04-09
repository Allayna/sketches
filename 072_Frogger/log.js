class Log extends Car {

    constructor(x, y, width, height, speed) {
        super(x, y, width, height);
        this.speed = speed;
    }

    show(){
        fill(111, 77, 43);
        rect(this.x, this.y, this.width, this.height);
    }
}