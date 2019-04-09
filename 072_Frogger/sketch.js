let frog;
let cars = [];
let logs = [];
let grid = 50;
let chances = 5;
let score = 0;

function resetGame() {
  frog = new Frog(width / 2 - grid / 2, height - grid, grid);
  frog.attach(null);
}

function setup() {
  createCanvas(800, 450);
  resetGame();
	scoreP = createP('');
	
  let index = 0;
  
	   //row 1 is start - safe

  //row 2
    for (let i = 0; i < 3; i++) {
    let x = i * 300;
        cars[index] = new Car(x, height - grid * 2, grid*2, grid, 2);
        index ++;
    }

    // ROW 2
    for (i = 0; i < 3; i++) {
        let x = i * 300 + 200;
        cars[index] = new Car(x, height-grid*3, grid, grid, -3.5);
        index ++;
    }

    // ROW 3
    for (i = 0; i < 4; i++) {
        let x = i * 250 + 25;
        cars[index] = new Car(x, height-grid*4, grid, grid, 1.2);
        index ++;
    }

//row 5 is mid - safe

  //row 6
	index = 0;
    for (let i = 0; i < 3; i++) {
    let x = i * 250 + 100;
    logs[index] = new Log(x, height-grid*6, grid*3, grid, 0.9);
    index++;
  };
  
  //row 7
  for (let i = 0; i < 3; i++) {
    let x = i * 350 + 100;
    logs[index] = new Log(x, height-grid*7, grid*3, grid, -1);
    index++;
  };
  
  //row 8
  for (let i = 0; i < 3; i++) {
    let x = i * 400 + 10;
    logs[index] = new Log(x, height-grid*8, grid*4, grid, 0.5);
    index++;
  }
}

function draw() {
  background(0);
  fill(255, 100);
  
	//safe lanes
	rect(0, 0, width, grid);
  rect(0, height-grid, width, grid);
  rect(0, height-grid*5, width, grid);
	
  for (let i = 0; i < cars.length; i++){
			cars[i].update();
			cars[i].show();

			if (frog.intersects(cars[i])){
					resetGame();
				score += -1;
			}
    }

  for(i = 0; i < logs.length; i++){
        logs[i].update();
        logs[i].show();
    }

  if (frog.y < height-grid*5 && frog.y > 0) {
    let ok = false;
        
        for(i = 0; i<logs.length; i++){
            if (frog.intersects(logs[i])) {
                ok = true;
                frog.attach(logs[i]);
      }
    }
    if (!ok) {
      resetGame();
    }
  } else {
    frog.attach(null);
  }
	
	if (frog.y == 0) {
		score += 1;
		console.log(score);
		resetGame();
	}
	scoreP.html('Score: ' + score);
  frog.update();
  frog.show();
}

function keyPressed() {

  if (keyCode === UP_ARROW) {
    frog.move(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    frog.move(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    frog.move(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    frog.move(-1, 0);
  }
}
