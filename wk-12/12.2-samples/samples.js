// VARIABLES //
let sound1, sound2, sound3;
let buttons = [];

// SOUND LIBRARY //
function preload() {
  sound1 = loadSound('sounds/sad.mp3');
  sound2 = loadSound('sounds/good.mp3');
  sound3 = loadSound('sounds/great.mp3');
}

// CANVAS //
function setup() {
  createCanvas(600, 350);

// BUTTONS //
  buttons = [
    { x: 100, y: 150, w: 120, h: 80, sound: sound1, label: ":(", active: false },
    { x: 240, y: 150, w: 120, h: 80, sound: sound2, label: ":)", active: false },
    { x: 380, y: 150, w: 120, h: 80, sound: sound3, label: ":D", active: false }
  ];
}

// DRAW FUNCTION //
function draw() {
  background('#4a005b');  

  for (let b of buttons) {

// HOVER STATE //
    let hovering =
      mouseX > b.x &&
      mouseX < b.x + b.w &&
      mouseY > b.y &&
      mouseY < b.y + b.h;

// CLICKED STATE COLOR //
    if (b.active) {
      fill('#ff2e9f'); 
    } else if (hovering) {

// HOVER STATE COLOR //
      fill('#dd008c'); 
    } else {

// DEFAULT STATE COLOR//
      fill('#a7016a'); 
    }

    rect(b.x, b.y, b.w, b.h, 10);

// BUTTON LABELS //
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text(b.label, b.x + b.w / 2, b.y + b.h / 2);
  }

// TITLE //
  fill(255);
  textFont('Tahoma');
  textSize(40);
  textAlign(CENTER);
  text("How Are You Feeling Today?", width / 2, 80);

// SUBTITLE //
  fill(255);
  textFont('Tahoma');
  textSize(20);
  textAlign(CENTER);
  text("⊹ ࣪ ˖ Click A Button to Soundtrack Your Day! ࣪ ˖⊹", width / 2, 290);
}

// DETECTING MOUSE PRESSES //
function mousePressed() {
  for (let b of buttons) {
    if (
      mouseX > b.x &&
      mouseX < b.x + b.w &&
      mouseY > b.y &&
      mouseY < b.y + b.h
    ) {

// SOUND WILL PLAY OVER ITSELF WHEN BUTTON IS PRESSED //
      if (b.sound.isPlaying()) {
        b.sound.stop();
      }

      b.sound.play();

// VISUAL FEEDBACK FOR ACTIVE BUTTON //
      b.active = true;

      setTimeout(() => {
        b.active = false;
      }, 150);
    }
  }
}