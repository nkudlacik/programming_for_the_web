// VARIABLES //
let img1;
let size;
let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,^`'. ";

// PRELOAD IMAGE //
function preload() {
    img1 = loadImage("images/mom.jpg");
}

// CANVAS SETUP //
function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("p5container");

    img1.resize(100, 0);
    size = width / img1.width;

    textFont("monospace");
    textAlign(CENTER, CENTER);
    textSize(6);
}

// DRAW LOOP //
function draw() {
    background('#f0e5d8');

    let t = frameCount * 0.05;

    drawAscii(img1, 0, t);
}

// ASCII RENDER FUNCTION //
function drawAscii(img, yOffset, t) {
    img.loadPixels();

    for (let i = 0; i < img.width; i++) {
        for (let j = 0; j < img.height; j++) {

            let pixelIndex = (i + j * img.width) * 4;

            let r = img.pixels[pixelIndex + 0];
            let g = img.pixels[pixelIndex + 1];
            let b = img.pixels[pixelIndex + 2];

            let bright = (r + g + b) / 3;

            let tIndex = floor(map(bright, 0, 255, 0, asciiChar.length - 1));
            let tChar = asciiChar.charAt(tIndex);

            let x = i * size + size / 2;
            let y = j * size + size / 2 + yOffset;

// RADIAL SINE AURA COLOR FIELD //

            let dx = i - img.width / 2;
            let dy = j - img.height / 2;
            let d = sqrt(dx * dx + dy * dy);

            let peach = color('#fcaba2');
            let orange = color('#f47e39');

            let n = sin(t - d * 0.1);
            let amt = map(n, -1, 1, 0, 1);

            let c = lerpColor(peach, orange, amt);

            fill(c);

            text(tChar, x, y);
        }
    }
}