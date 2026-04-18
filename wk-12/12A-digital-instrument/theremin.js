// SONIC FUNCTIONALITY //
let osc;

// SOUND GENERATOR (SINE) SETUP //
function setup() {
  createCanvas(500, 400);

  osc = new p5.Oscillator('sine');
  osc.start();
  osc.amp(0);
}

function mousePressed() {
  userStartAudio();
}




// VISUAL FUNCTIONALITY //
function draw() {
  background(20);

  // SAFE MOUSE VALUES (CONSTRAINED TO CANVAS) //
  let safeX = constrain(mouseX, 0, width);
  let safeY = constrain(mouseY, 0, height);

  // MOUSE MAP - FREQUENCY & AMPLITUDE //
  let freq = map(safeX, 0, width, 100, 1000);
  let amp = map(safeY, height, 0, 0, 1);

  // SOUND CONTROL (ONLY WHEN INTERACTING INSIDE CANVAS) //
  if (
    mouseIsPressed &&
    mouseX >= 0 &&
    mouseX <= width &&
    mouseY >= 0 &&
    mouseY <= height
  ) {
    osc.freq(freq);
    osc.amp(amp, 0.1);
  } else {
    osc.amp(0, 0.1);
  }

  // MOUSE MAP - CIRCLE SIZE & COLOR //
  let size = map(amp, 0, 1, 20, 200);
  let colorVal = map(freq, 100, 1000, 50, 255);

  fill(colorVal, 100, 255);
  noStroke();
  ellipse(safeX, safeY, size);



// TEXT //
  // INSTRUMENT TITLE & CASCADING TEXT STYLING //
  fill(255);
  textSize(14);
  textFont('Courier New');
  textLeading(15);
  text("Digital Theremin", 20, 345);

  // INSTRUMENT INSTRUCTIONS //
  text(
    "Click and drag your mouse to manipulate frequency and amplitude.",
    20,
    360,
    320
  );

  // LIVE USER INPUT TEXT DISPLAY //
  fill(colorVal, 100, 255);
  text("Frequency: " + floor(freq), 360, 370);
  text("Amplitude: " + amp.toFixed(2), 360, 385);
}