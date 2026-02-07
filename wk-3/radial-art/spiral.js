// SPECIFICATIONS
let rotateBy = 5;
let colors = ['#ccff00', '#e90097'];
let colorIndex = 0;
let lastRotation = 0;

//FUNCTIONS
function setup() {
    createCanvas(600, 600);
    background('#36454f');
    angleMode(DEGREES);
    window.alert("Click anywhere on your screen to freeze the Spirograph! Refresh the page to start a new design!");
}

//DRAWING THE SPIRAL

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    stroke(colors[colorIndex]);
    strokeWeight(0.5);
    ellipse(10, 200 + alt, 450 - alt);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);

//COLOR VARIATION

    let fullRotationCount = Math.floor(rotateBy / 360);
    if (fullRotationCount > lastRotation) {
        colorIndex = (colorIndex + 1) % colors.length;
        lastRotation = fullRotationCount;
    }

    rotateBy += 5;  
}

//STOP DRAWING ON CLICK

function mousePressed() {
    noLoop();
}