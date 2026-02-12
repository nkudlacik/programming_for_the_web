//PROJECT SPECIFICATIONS
let rectX = 0;
let rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
let speed;
function setup() {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 3);
}

function draw() {
    background('#18c09e');
    drawShape();
    rectX += speed;
    if(rectX > width) {
        noLoop();
        fill('#fff');
        text('Your score was ' + clickCount, 100, 300);
    }
}


//EVENT HANDLER
function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log ('hit', clickCount);  
    }
}


//DRAW SHAPE
function drawShape() {
    fill('#ffe432');
    stroke('#000');
    strokeWeight(2);
    rect(rectX, rectY, rectWidth, rectHeight);
}