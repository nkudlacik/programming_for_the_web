let rotateBy = 5;
function setup() {
    createCanvas(600, 600);
    background('#36454f');
    angleMode(DEGREES);
    window.alert("Click anywhere on your screen to freeze the Spirograph! Refresh the page to start a new design!");
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    stroke('#ccff00');
    strokeWeight(1);
    ellipse(10, 200 + alt, 450 - alt);
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