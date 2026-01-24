console.log("snowman.js is loaded");

let grid;
let stroke1 = prompt("What color should we draw the snowman?", "black");
let stroke2 = prompt("What color should the snowman's hat be?", "black");

function setup() {
    createCanvas(1000, 800);
    background("#ccc");
    grid = loadImage("images/100px_grid.png");
}
function draw() {
    //background(grid);
    //sky
    fill(232, 244, 255);
    noStroke();
    rect(0, 0, 1000, 800);
    //sun
    fill(254, 255, 243);
    noStroke();
    ellipse(50, 25, 500);
    //background hills
    fill(189, 223, 255);
    noStroke();
    ellipse(250, 600, 700, 400);
    ellipse(750, 600, 700, 400);
    //foreground hill
    fill(174, 215, 255);
    noStroke();
    ellipse(500, 750, 1500, 400);
    //snowflakes
    fill("white");
    noStroke();
    ellipse(800, 200, 15);
    ellipse(330, 275, 15);
    ellipse(900, 350, 15);
    ellipse(100, 380, 15);
    ellipse(300, 150, 15);
    ellipse(975, 90, 15);
    ellipse(600, 45, 15);
    ellipse(700, 375, 15);
    //snowman body
    fill("#f1f1f1");
    stroke(stroke1);
    strokeWeight(10);
    //base
    ellipse(500, 600, 300);
    //middle
    ellipse(500, 400, 250);
    //head
    ellipse(500, 250, 200);
    //hat brim
    stroke(stroke2);
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