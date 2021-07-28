function game() {
  noStroke();
  fill(0, 255, 0);
  rect(width / 2, 25, width, 50);

  if (frameCount % 60 == 0) {
    step *= -1;
  }

  for (let m of meteors) {
    m.show()
  }

  for (let a of aliens) {
    a.show();
    a.move();
    if (a.breach()) {
      lives = 0;
    }
  }


  for (let r of rockets) {
    r.show();
    r.move();
  }

  boss.show();
  boss.move();

  if(boss.alive) {
    missle.show();
    missle.move();
  }

  if (bossHitPoints == 0) {
    boss.alive = false;
  }

  if (missle.hits(player1) && missle.active == true) {
    missle.active = false;
    lifeLost.play();
    lives -= 1;
  }

  for (let k = meteors.length - 1; k >= 0; k--) {
    if (missle.hits(meteors[k])) {
      missle.active = false;
      explosionSound.play();
      if (meteors[k].w > 35 || meteors[k].w > 20) {
        meteors[k].w -= 15;
      } else if (meteors[k].w <= 20) {
        meteors.splice(k, 1);
      }
    }
  }

  if (missle.offScreen()) {
    missle.active = false;
  }

  if (missle.active == false) {
    missle = new BossRocket(boss.x, boss.y, 5, 20, 5);
    fireSound.play();
    missle.active = true;
  }

  for (let i = rockets.length - 1; i >= 0; i--) {
    if (rockets[i].offScreen() || rockets[i].active == false) {
      rockets.splice(i, 1);
    } else {
      for (let j = aliens.length - 1; j >= 0; j--) {
        if (rockets[i].hits(aliens[j])) {
          rockets[i].active = false;
          explosionSound.play();
          score ++;
          aliens.splice(j, 1);
        }
      }
      for (let k = meteors.length - 1; k >= 0; k--) {
        if (rockets[i].hits(meteors[k])) {
          rockets[i].active = false;
          explosionSound.play();
          if (meteors[k].w > 35 || meteors[k].w > 20) {
            meteors[k].w -= 15;
          } else if (meteors[k].w <= 20) {
            meteors.splice(k, 1);
          }

        }
      }
      if (rockets[i].hits(boss) && boss.alive) {
        rockets[i].active = false;
        explosionSound.play();
        score ++;
        if (bossHitPoints >= 20) {
          bossHitPoints -= 20;
        }
      }
    }
  }

  player1.show();
  if (keyIsDown(LEFT_ARROW)) {
    player1.move(-player1.speed);
  } else if (keyIsDown(RIGHT_ARROW)) {
    player1.move(player1.speed);
  }

  splashTime = splashTime;
  gameTime = int((totalTime - splashTime) / 1000);

  fill(0);
  textSize(20);
  textFont(titleFont);
  text('Time:', 510, 35);
  text('Score:', 55, 35);
  text('Lives:', 275, 35);
  textSize(15);
  textFont(bodyFont);
  text(timeLimit - gameTime, 570, 35);
  text(score, 115, 35);
  text(lives, 330, 35);

  stroke(255);
  strokeWeight(5);
  line(0, 450, width, 450);

  if (aliens.length == 0 && bossHitPoints == 0) {
    endGame('win');
  }
  if (gameTime >= timeLimit || lives == 0) {
    endGame('lose');
  }
}

function splash() {
  splashTime = totalTime;

  stroke(0, 255, 0);
  noFill();
	textSize(40);
	textFont(titleFont);
	text('SPACE INVADERS', width / 2, 100);
  text('HOW TO PLAY', width / 2, 250);

	textSize(15);
  noStroke();
  fill(0,255,0);
	textFont(bodyFont);
	text('CODED BY ALLAYNA, 2021', width / 2, 130);
	text('PRESS LEFT AND RIGHT ARROWS TO MOVE', width / 2, 290);
	text('PRESS SPACE TO FIRE ROCKETS', width / 2, 320);
	text('WATCH OUT FOR BOSS ROCKETS', width / 2, 350);
	text('DESTROY ALL ALIENS TO WIN', width / 2, 380);
	text('CLICK THE SCREEN TO BEGIN', width / 2, 450);
}

function endGame(result) {
  background(0);
  noFill();
  strokeWeight(3);
  textSize(40);
  textFont(titleFont);

  if (result == 'win') {
    backgroundMusic.stop();
    winSound.play();
    stroke(0, 255, 0);
    rect(width / 2, height / 2, width, height);
    text('YOU WIN', width / 2, 230);
    textSize(15);
    noStroke();
    fill(0,255,0);
  	textFont(bodyFont);
    text('YOU TOOK ' + gameTime + ' SECONDS TO WIN!', width / 2, 270)
    text('REFRESH TO PLAY AGAIN', width / 2, 350)
  }

  if (result == 'lose') {
    backgroundMusic.stop();
    loseSound.play();
    stroke(255, 0, 0);
    rect(width / 2, height / 2, width, height);
    text('YOU LOSE', width / 2, 230);
    textSize(15);
    noStroke();
    fill(255, 0, 0);
  	textFont(bodyFont);
    text('YOU LOST AFTER ' + gameTime + ' SECONDS', width / 2, 270)
    text('REFRESH TO PLAY AGAIN', width / 2, 350)
  }
  noLoop();
}
