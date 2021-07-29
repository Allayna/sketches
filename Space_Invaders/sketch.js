let totalTime, splashTime, gameTime, player1, boss, bossSpeed, alienSpeed, missle;
let fireSound, explosionSound, backgroundMusic, startSound, winSound, loseSound, lifeLost;
let meteorImg, bossImg, playerImg, alienImg1, alienImg2, titleFont, bodyFont;

let timeLimit = 60;
let lives = 3;
let score = 0;
let stage = 'splash';

let aliens = [];
let alienW = 40;
let alienStartX = 50;
let alienInterval = 70;
let step = 1;
let direction = 1;

let bossDir = 1;
let bossHitPoints = 100;

let rockets = [];
let rocketLimit = 1;

let meteors = [];
let meteorInterval = 150;


function preload() {
  playerImg = loadImage('media/player_ship.png');
	alienImg1 = loadImage('media/alien.png');
  alienImg2 = loadImage('media/alien2.png')
  meteorImg = loadImage('media/rock.png');
  bossImg = loadImage('media/boss.png');

  fireSound = loadSound('media/8bit_pew.m4a')
	explosionSound = loadSound('media/8bit_explosion.m4a');
	backgroundMusic = loadSound('media/8bit_song.mp3');
  startSound = loadSound('media/8bit_charge.m4a');
  winSound = loadSound('media/8bit_win.m4a');
  loseSound = loadSound('media/8bit_lose.m4a');
  lifeLost = loadSound('media/8bit_life.m4a')

	titleFont = loadFont('media/Pixel_bubble_font.ttf');
	bodyFont = loadFont('media/Pixel_font.ttf');
}

function setup() {
  createCanvas(600, 500);
  backgroundMusic.play();

  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);

  player1 = new Player(300, 475, 50, 30, 3);
  boss = new Boss(150, 100, 100, 30);
  missle = new BossRocket(boss.x, boss.y, 5, 20, 5);

  for (let i = 0; i < 4; i++) {
    meteors.push(new Meteor(80 + (meteorInterval * i), 400, 50));
  }
  for (let i = 0; i < 8; i++) {
    aliens.push(new Alien(alienStartX + (alienInterval * i), 150, alienW, alienW));
  }
  for (let i = 0; i < 8; i++) {
    aliens.push(new Alien(alienStartX + (alienInterval * i), 200, alienW, alienW));
  }
}

function draw() {
  totalTime = millis();

  background(0);

  strokeWeight(3);
  stroke(0, 255, 0);
  noFill();
  rect(width / 2, height / 2, width, height);

  if (stage == 'game') {
    game();
  } else if (stage == 'splash') {
    splash();
  } else if (stage == 'win') {
    win();
  } else if (stage == 'lose') {
    lose();
  }
}

function keyPressed() {
  if (key == ' ') {
    if (stage == 'game' && rockets.length < rocketLimit) {
        fireSound.play();
        rockets.push(new Rocket(player1.x, player1.y, 5, 20, 5));
    } else if (stage == 'splash') {
      stage = 'game';
      if (!startSound.isPlaying()) {
        startSound.play();
      }
    }
  }
}
