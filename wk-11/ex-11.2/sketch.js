  // CANVAS //
function setup() {
  createCanvas(600, 600);
  background("#f463b5");
  angleMode(RADIANS);

  translate(375, 200);

// WHITE SPIRALS x 3 //
  for (let r = 0; r < 3; r++) {
    for (let i = 0; i < 600; i++) {
        rotate(0.1);
        let size = 200 - i * 2;
        let offset = i * 2;
        stroke("#f463b5");
        strokeWeight(6);
        ellipse(offset, offset, size);
  }
}

// BLACK SPIRAL //
for (let i = 0; i < 600; i++) {
    rotate(0.2);

    let size = 200 - i * 2;
    let offset = i * 2;
    noFill();
    stroke(0);
    strokeWeight(6);
    ellipse(offset, offset, size);
  }

  // WHITE CIRCLES //
  for (let i = 0; i < 600; i++) {
    rotate(0.4);
    let size = 150 - i * 18;
    let offset = i * 10;
    noFill();
    stroke("#ffffff");
    strokeWeight(1);
    ellipse(offset, offset, size);
  }
}