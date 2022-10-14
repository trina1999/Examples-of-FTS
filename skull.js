// This sketch draws a spooky skull!
// Try changing its size or position,
// or try giving it a hat or a body!

function setup() {
  createCanvas(500, 500);
}

function draw() {

  // Draw a dark gray background.
  background(100);
  noStroke();

  // Change the fill color to white.
  fill(255);

  // Draw the top circle part of the skull.
  ellipse(250, 200, 300, 200);

  // Draw the bottom rectangle part of the skull.
  rect(175, 250, 150, 100);

  // Change the fill color to black.
  fill(0);

  // Draw the eyes.
  ellipse(175, 200, 50, 50);
  ellipse(325, 200, 50, 50);

  // Draw the teeth lines.
  rect(200, 300, 10, 50);
  rect(250, 300, 10, 50);
  rect(300, 300, 10, 50);
}
