//PROJECT VARIABLES
let rotateBy = 5;
let colors = ['#ccff00', '#fff', '#e90097', '#00e9b7', '#000'];
let colorIndex = 0;
let lastRotation = 0;

//CANVAS SETUP
function setup() {
    createCanvas(600, 600);
    background('#36454f');
    angleMode(DEGREES);

//USER INSTRUCTIONS POP-UP WINDOW
    window.alert("Click anywhere on your screen to freeze the Spirograph! Refresh the page to start a new design!");
}

//DRAWING FUNCTION & ITS PARAMETERS
function makeArm(length, width, offset) {
    noFill();
    stroke(colors[colorIndex]);
    strokeWeight(0.5);
    ellipse(offset, length, width);
}

//DRAWING THE SPIRAL
function draw() {
    push();
    translate(width / 2, height / 2);
    rotate(rotateBy);
     
//MAKE ARM
    let alt = Math.round(rotateBy / 360);
    let length = 200 + alt;
    let widthEllipse = 450 - alt; 
    let offset = 10;
    makeArm(length, widthEllipse, offset);
    pop();

//COLOR VARIATIONS
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