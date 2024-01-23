class Helix {
  constructor(angularVelocity, amplitude, period, phaseShift){
    this.startAngle = 0;
    this.angularVelocity = angularVelocity;
    this.amplitude = amplitude;
    this.period = period;
    this.phaseShift = phaseShift;
    this.angle = this.startAngle;
    print("Activated")
    // Let's keep track of each dot of the wave
    this.dots = []
  }
  
  show(){
    this.dots = []
    this.angle = float(this.startAngle);
    this.startAngle += this.angularVelocity/10
    
    for(let x = 0; x <= width; x += this.period){
      let y = sin(this.angle + this.phaseShift)*this.amplitude
      let waveDot = createVector(x,y + 300)
      stroke(100);
      strokeWeight(10);
      point(waveDot);
      this.dots.push(waveDot)
      this.angle += this.angularVelocity;
    }
  }
}