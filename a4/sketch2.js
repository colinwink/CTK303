function setup() {
  let cnv2 = createCanvas(1200, 900);
  cnv2.id('canvas4');
  cnv2.parent('movecanvas2')
  background(102);
}

function draw() {
  // Call the variableEllipse() method and send it the
  // parameters for the current mouse position
  // and the previous mouse position
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

// The simple method variableEllipse() was created specifically
// for this program. It calculates the speed of the mouse
// and draws a small ellipse if the mouse is moving slowly
// and draws a large ellipse if the mouse is moving quickly

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  fill(125, 249, 255)
  rect(x, y, speed, speed);
}
