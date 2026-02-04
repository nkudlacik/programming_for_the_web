function setup() {
    createCanvas(600,600);
    noLoop();
}


// creating function
function createTile(originX, originY, primaryColor, secondaryColor, flowerPetalColor, flowerCenterColor) {
    translate(originX, originY);
    fill(primaryColor);
    stroke('white');
    rect(0, 0, 200, 200, 8);
// diagonal lines
    stroke(secondaryColor);
    strokeWeight(20);
    line(10, 10, 190, 190);
    line(190, 10, 10, 190);
//perpendicular lines
    stroke('white');
    strokeWeight(1);
    line(0, 100, 200, 100);
    line(100, 0, 100, 200);
// flower petals
    noStroke();
    fill(flowerPetalColor);
    circle(100, 75, 40);
    circle(75, 100, 40);
    circle(125, 100, 40);
    circle(100, 125, 40);
// flower center
    fill(flowerCenterColor);
    circle(100, 100, 25);
}

// calling function
function draw() {
    createTile(0, 0, 'orange', 'blue', 'purple', 'white');
    createTile(0, 200, 'red', 'purple', 'yellow', 'green');
    createTile(0, 200, 'green', 'black', 'pink', 'blue');
    createTile(200, -400, 'pink', 'brown',  'light green', 'yellow');
    createTile(0, 200, 'orange', 'blue', 'purple', 'white');
    createTile(0, 200, 'red', 'purple', 'yellow', 'green');
    createTile(200, -400, 'green', 'black', 'pink', 'blue');
    createTile(0, 200, 'pink', 'brown',  'light green', 'yellow');
    createTile(0, 200, 'orange', 'blue', 'purple', 'white');
    
}