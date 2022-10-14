const w = 800

function setup() {
  createCanvas(w, w);
  background(255);
  noFill();
}

function draw() {
  triangle(random(w), random(w), random(w), random(w), random(w), random(w));
}
