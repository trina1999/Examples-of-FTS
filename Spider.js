function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 128, 0);

  strokeWeight(min(width, height) / 50);

  // web
  stroke(200);
  line(width * .5, 0, width * .5, height * .5);

  // spider is black
  fill(0);
  stroke(0);

  // first left leg
  line(width * .5, height * .5, width * .25, height * .25);
  line(width * .25, height * .25, width * .05, height * .5);

  // first right leg
  line(width * .5, height * .5, width * .75, height * .25);
  line(width * .75, height * .25, width * .95, height * .5);

  // second left leg
  line(width * .5, height * .5, width * .25, height * .4);
  line(width * .25, height * .4, width * .05, height * .7);

  // second right leg
  line(width * .5, height * .5, width * .75, height * .4);
  line(width * .75, height * .4, width * .95, height * .7);

  // third left leg
  line(width * .5, height * .5, width * .25, height * .6);
  line(width * .25, height * .6, width * .05, height * .9);

  // third right leg
  line(width * .5, height * .5, width * .75, height * .6);
  line(width * .75, height * .6, width * .95, height * .9);

  // fourth left leg
  line(width * .5, height * .5, width * .25, height * .75);
  line(width * .25, height * .75, width * .4, height * .9);

  // fourth right leg
  line(width * .5, height * .5, width * .75, height * .75);
  line(width * .75, height * .75, width * .6, height * .9);

  // body
  ellipse(width * .5, height * .5, width * .15, height * .15);

  // eyes
  fill(255);
  ellipse(width * .5 - width * .04, height * .5 - height * .025,
          width * .05, height * .05);
  ellipse(width * .5 + width * .04, height * .5 - height * .025,
          width * .05, height * .05);

  // mouth
  noFill();
  stroke(255);
  arc(width * .5, height * .525, width * .075, height * .05, 0, PI);
}
