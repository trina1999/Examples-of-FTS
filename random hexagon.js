// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);
}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

// Render loop that draws shapes with p5
function draw(){
  // For consistent sizing regardless of portrait/landscape
  const dim = Math.min(width, height);
  
  // Black background
  background(0);
  
  // Stroke only with a specific join style and thickness
  noFill();
  stroke(255);
  strokeJoin(MITER);

  // Get time in seconds
  const time = millis() / 1000;
  
  const rings = 10;
  const sides = 6;
  const maxRadius = dim * 0.4;
  for (let i = 0; i < rings; i++) {
    // Get a normalized 't' value that isn't 0
    const t = (i + 1) / rings;
    
    // Scale it by max radius
    const radius = t * maxRadius;

    // Min and max line thickness
    const maxThickness = maxRadius / rings * 1;
    const minThickness = maxRadius / rings * 0.001;
    
    // Get a value that ping pongs between 0 and 1
    // We offset by t * N to give it some variety
    const pingPong = sin(t * 3.0 + time) * 0.5 + 0.5;
    
    // Compute the actual thickness
    const thickness = lerp(minThickness, maxThickness, pingPong);

    // Draw line
    strokeWeight(thickness);
    polygon(width / 2, height / 2, radius, sides, PI / 2);
  }
}

// Draw a basic polygon, handles triangles, squares, pentagons, etc
function polygon(x, y, radius, sides = 3, angle = 0) {
  beginShape();
  for (let i = 0; i < sides; i++) {
    const a = angle + TWO_PI * (i / sides);
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
