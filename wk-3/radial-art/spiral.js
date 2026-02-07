let rotateBy = 5;
function setup() {
    createCanvas(600, 600);
    background('#36454f');
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    stroke('#ccff00');
    strokeWeight(1);
    ellipse(150, 150 + alt, 150 - alt);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;  
}

function mousePressed() {
    noLoop();
}