// GLOBAL VARIABLES //
let vid;
let size;
let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,^`'. ";
let canvas;

// SETUP FUNCTION //
function setup() {
    let canvas = createCanvas(640, 480);
    canvas.parent("canvas-container");

    // LOAD VIDEO & HIDE DEFAULT HTML VIDEO ELEMENT //
    vid = createVideo("media/dancer-transparent.mp4", videoLoaded);
    vid.hide();
    size = 1;

    // ASCII TEXT STYLE SETTINGS //
    textFont("monospace");     
    textAlign(CENTER, CENTER); 
    textSize(6);               
    fill("#00ff62");           
}

// VIDEO VOLUME & LOOP SETTINGS //
function videoLoaded() {
    vid.volume(0);
    vid.loop();
}

// VIDEO LOOP SAFEGUARD //
function draw() {
    if (vid.elt.ended) {
        vid.time(0);
        vid.play();
    }

    // ASCII RENDERING //
    background(0);
    drawAscii(vid, 0);
}

// FUNCTION TO LOAD PIXEL DATA FROM EACH FRAME //
function drawAscii(img, yOffset) {
    img.loadPixels();

    // SKIP EVERY OTHER PIXEL FOR PERFORMANCE //
    for (let i = 0; i < img.width; i += 2) {
        for (let j = 0; j < img.height; j += 2) {

            // CALCULATE INDEX IN PIXEL ARRAY //
            let index = (i + j * img.width) * 4;

            // EXTRACT RGB COLOR VALUES //
            let r = img.pixels[index + 0];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];

            // BRIGHTNESS = AVERAGE OF RGB VALUES //
            let bright = (r + g + b) / 3;

            // MAP BRIGHTNESS TO ASCII CHARACTER INDEX //
            let charIndex = floor(map(bright, 0, 255, 0, asciiChar.length - 1));
            let char = asciiChar.charAt(charIndex);

            // CALCULATE POSITION TO DRAW CHARACTER //  
            let x = i * size + size / 2;
            let y = j * size + size / 2 + yOffset;

            // DRAW ASCII CHARACTER AT CALCULATED POSITION //
            text(char, x, y);
        }
    }
}