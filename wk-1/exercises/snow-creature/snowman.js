console.log("snowman.js is loaded");

let grid;

function setup() {
    createCanvas(1000, 800);
    background("#ccc");
    grid = loadImage("images/100px_grid.png");
}
function draw() {
    background(grid);
    //snowman legs
    fill("#f1f1f1");
    stroke(34, 95, 199);
    strokeWeight(20);
    //left leg
    ellipse(350, 650, 200);
    //right leg
    ellipse(650, 650, 200);
    //body
    ellipse(500, 450, 350, 400);
    //head
    ellipse(500, 200, 200);
}