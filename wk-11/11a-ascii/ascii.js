// VARIABLES //
let img1, img2, img3;
let size;
let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,^`'. ";
let spacing = 315;

// PRELOAD IMAGES //
function preload() {
    img1 = loadImage("images/mom.jpg");
    img2 = loadImage("images/dad.jpg");
    img3 = loadImage("images/nicole.jpg");
}

// CANVAS SETUP //
function setup() {
    createCanvas(400, 1230);

// IMAGE RESIZING //
    img1.resize(100, 0);
    img2.resize(100, 0);
    img3.resize(100, 0);
    size = width / img1.width;

// TEXT SETTINGS //
    textFont("monospace");
    textAlign(CENTER, CENTER);
    textSize(6);
    fill("#0700d5");
    noLoop();
}

// ASCII IMAGE DRAWING FUNCTION //
function drawAscii(img, yOffset) {
    img.loadPixels();

// LOOP THROUGH PIXELS //
    for (let i = 0; i < img.width; i++) {
        for (let j = 0; j < img.height; j++) {
            let pixelIndex = (i + j * img.width) * 4;

// PIXEL RGBA VALUES //
            let r = img.pixels[pixelIndex + 0];
            let g = img.pixels[pixelIndex + 1];
            let b = img.pixels[pixelIndex + 2];

// CONVERTING RGBA TO GRAYSCALE //
            let bright = (r + g + b) / 3;

// MAPPING BRIGHTNESS TO ASCI CHARACTERS //
            let tIndex = floor(map(bright, 0, 255, 0, asciiChar.length - 1));
            let t = asciiChar.charAt(tIndex);

// ASCII CHARACTER POSITIONING //
            let x = i * size + size / 2;
            let y = j * size + size / 2 + yOffset;

            text(t, x, y);
        }
    }
}

// VERTICAL IMAGES DRAWING FUNCTION //
function draw() {
    drawAscii(img1, 0);
    drawAscii(img2, img1.height + spacing);
    drawAscii(img3, img1.height + spacing + img2.height + spacing);
}