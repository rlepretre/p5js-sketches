function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("#fff");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background("#fff");
  
  let angularVelocity = 0.1
  let amplitude = 200;
  let period = 40
  
  h1 = new Helix(angularVelocity, amplitude, period, 0)
  h2 = new Helix(angularVelocity, amplitude, period, PI*1.3)
  print("Hi!")
}

function draw() {
  background(255);
  let windowCenter = createVector(width/2, height/2);
  let mouseVector = createVector(mouseX, mouseY)
  
  for(let i = 0; i < h1.dots.length; i++){
    dot1 = h1.dots[i]
    dot2 = h2.dots[i]
    strokeWeight(1);
    stroke(200);
    line(dot1.x, dot1.y, dot2.x, dot2.y)
  }

  h1.show()
  h2.show()



}

