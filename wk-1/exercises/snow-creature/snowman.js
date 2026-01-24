console.log("snowman.js is loaded");

let grid;
//let stroke1 = prompt("What color should we draw the snowman?", "black");
//let stroke2 = prompt("What color should the snowman's hat be?", "black");

function setup() {
    createCanvas(1000, 800);
    background("#ccc");
    grid = loadImage("images/100px_grid.png");
}
function draw() {
    background(grid);
    //snowman legs
    fill("#f1f1f1");
    stroke(0);
    strokeWeight(10);
    //base
    ellipse(500, 600, 300);
    //middle
    ellipse(500, 400, 250);
    //head
    ellipse(500, 250, 200);
    //hat brim
    stroke(0);
    strokeWeight(10);
    line(380, 150, 620, 150);
    //hat body
    quad(450, 50, 550, 50, 575, 150, 425, 150);
    //eyes
    stroke(0);
    strokeWeight(30);
    point(460, 225)
    point(550, 250)
    //pipe stem
    stroke(0);
    strokeWeight(10);
    line(440, 280, 500, 280);
    //pipe bowl
    quad(440, 270, 450, 270, 450, 290, 440, 290);
    //buttons
    stroke(0);
    strokeWeight(30);
    point(500, 385)
    point(500, 430)
    point(500, 475)
}