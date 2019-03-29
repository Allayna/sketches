function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(0);

  let hr = hour();
  let mn = minute();
  let sc = second();
  let mo = month();
  let da = day();
  let yr = year();
  let clhr;

  let secondAngle = map(sc, 0, 60, 0, 360);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);


  if (hr > 12) {
    clhr = hr - 12;
  } else {
    clhr = hour();
  }

  fill(255);
  noStroke();
  textSize(18);
  //text(nf(clhr,2,0) + ':' + nf(mn,2,0) + ':' + nf(sc,2,0) + '\n' + nf(mo,2,0) + '/' + nf(da,2,0) + '/' + yr, 10, 25);

  translate(200, 200);

  rotate(-90);
  strokeWeight(8);
  noFill();

  stroke(255, 100, 150);
  arc(0, 0, 300, 300, 0, secondAngle);

  push()
  strokeWeight(2);
  rotate(secondAngle);
  line(0, 0, 120, 0);
  pop();

  stroke(150, 100, 255);
  arc(0, 0, 280, 280, 0, minuteAngle);

  push()
  strokeWeight(4);
  rotate(minuteAngle);
  line(0, 0, 98, 0);
  pop();

  stroke(150, 255, 100);
  arc(0, 0, 260, 260, 0, hourAngle);

  push()
  strokeWeight(7);
  rotate(hourAngle);
  line(0, 0, 65, 0);
  pop();

  strokeWeight(4);
  ellipse(0, 0, 10, 10)
}