// CANVAS & VIDEO VARIABLES //
let vid;
let size;
let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,^`'. ";
let canvas;

// AUDIO & INTERACTION VARIABLES //
let songs = [];
let currentSong;
let nextSong;
let radio;

// FADE CONTROL VARIABLES //
let fadeDuration = 600;
let fading = false;
let fadeStartTime;

// SONG COLOR SYSTEM //
let songColors = [
    "#ff0095",
    "#1544ff",
    "#00ff48"
];

let currentColor;
let targetColor;

// START GATE //
let started = false;

// ATTACH START HANDLER //
window.onload = function () {
    document.getElementById('start-btn').addEventListener('click', startExperience);
};

// SETUP //
function setup() {
    let canvas = createCanvas(640, 480);
    canvas.parent("canvas-container");

    vid = createVideo("media/dancer-transparent.mp4", videoLoaded);
    vid.hide();
    size = 1;

    // LOAD SONGS //
    songs[0] = createAudio("media/dance-this-mess-around.mp3");
    songs[1] = createAudio("media/cobra.mp3");
    songs[2] = createAudio("media/ballet.mp3");

    songs.forEach(song => {
        song.volume(0);
        song.hide();
    });

    currentSong = songs[0];
    currentSong.volume(1);

    // COLORS INITIALIZATION //
    currentColor = color(songColors[0]);
    targetColor = songColors[0];

    // RADIO BUTTON UI //
    radio = createRadio();
    radio.option('0', '1');
    radio.option('1', '2');
    radio.option('2', '3');
    radio.selected('0');
    radio.parent("canvas-container");
    radio.changed(changeSong);

    textFont("monospace");
    textAlign(CENTER, CENTER);
    textSize(6);
}

// START FUNCTION //
function startExperience() {
    if (started) return;

        userStartAudio();
        currentSong.play();
        vid.loop();

    // SAFE DOM REMOVAL //
    let screen = document.getElementById('start-screen');
    if (screen) screen.remove();
    started = true;
}

// VIDEO //
function videoLoaded() {
    vid.volume(0);
    vid.loop();
}

// DRAW LOOP //
function draw() {
    if (!started) return;

    if (vid.elt.ended) {
        vid.time(0);
        vid.play();
    }

    // COLOR TRANSITION //
    currentColor = lerpColor(currentColor, color(targetColor), 0.3);

    // AUDIO FADE //
    if (fading) {
        let elapsed = millis() - fadeStartTime;
        let t = constrain(elapsed / fadeDuration, 0, 1);

        currentSong.volume(1 - t);
        nextSong.volume(t);

        if (t >= 1) {
            currentSong.pause();
            currentSong = nextSong;
            fading = false;
        }
    }

    background(0);
    drawAscii(vid, 0);

    updateButtonColors();
}

// SWITCH SONGS //
function changeSong() {
    if (fading) return;

    let selected = radio.value();
    nextSong = songs[selected];

    targetColor = songColors[selected];

    nextSong.volume(0);
    nextSong.currentTime = 0;
    nextSong.play();

    fadeStartTime = millis();
    fading = true;
}

// AUDIO ENABLE //
function mousePressed() {
    userStartAudio();
}

// BUTTON GRADIENT SYSTEM //
function updateButtonColors() {
    let labels = selectAll('label');

    for (let i = 0; i < labels.length; i++) {
        let base = color(targetColor);
        let black = color(0);
        let intensity = (i == radio.value()) ? 0.95 : 0.35;
        let bg = lerpColor(black, base, intensity);
        let txt = (i == radio.value()) ? color(0) : base;

        labels[i].style('background', bg);
        labels[i].style('color', txt);
        labels[i].style('border-color', targetColor);
    }
}

// ASCII RENDER //
function drawAscii(img, yOffset) {
    img.loadPixels();

    for (let i = 0; i < img.width; i += 2) {
        for (let j = 0; j < img.height; j += 2) {

            let index = (i + j * img.width) * 4;

            let r = img.pixels[index + 0];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];

            let bright = (r + g + b) / 3;

            let charIndex = floor(map(bright, 0, 255, 0, asciiChar.length - 1));
            let char = asciiChar.charAt(charIndex);

            let x = i * size + size / 2;
            let y = j * size + size / 2 + yOffset;

            fill(currentColor);
            text(char, x, y);
        }
    }
}

// FORCE SAFE START HANDLER //
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('start-btn');

    btn.addEventListener('click', () => {

        // START AUDIO SAFELY ON USER INTERACTION //
        if (typeof userStartAudio === 'function') {
            userStartAudio();
        }

        // START VIDEO //
        if (vid) {
            vid.loop();
        }

        // START SONG //
        if (currentSong) {
            currentSong.play();
        }

        // REMOVE OVERLAY //
        const screen = document.getElementById('start-screen');
        if (screen) screen.remove();

        // UNLOCK DRAW LOOP //
        started = true;
    });
});