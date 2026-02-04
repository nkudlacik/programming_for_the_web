function setup() {
    createCanvas(200, 200);
    noLoop();
}

// creating function
function createTile() {
    translate(0, 0);
    fill('red');
    rect(0, 0, 200, 200);
// diagonal lines
    stroke('blue');
    strokeWeight(20);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
//perpendicular lines
    stroke('white');
    strokeWeight(1);
    line(0, 100, 200, 100);
    line(100, 0, 100, 200);
// flower petals
    noStroke();
    fill('yellow');
    circle(100, 75, 40);
    circle(75, 100, 40);
    circle(125, 100, 40);
    circle(100, 125, 40);
// flower center
    fill('green');
    circle(100, 100, 25);
}

// calling function
function draw() {
    createTile();
}