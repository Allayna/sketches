let spritesheet;
let spritedata;
let animation = [];
let horses = [];

function preload() {
  spritedata = loadJSON('horse/horse.json');
  spritesheet = loadImage('horse/horse.png');
}

function setup() {
  createCanvas(800, 480);
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  for (let i = 0; i < 5; i++) {
    horses[i] = new Sprite(animation, 0, i * 75, random(0.1, 0.3));
  }
}

function draw() {
  background(0);

  for (let horse of horses) {
    horse.show();
    horse.animate();
  }
}