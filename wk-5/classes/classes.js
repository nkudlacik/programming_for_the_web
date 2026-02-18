//GLOBAL VARIABLES
let bubbles = [];

//PROJECT SPECIFICATIONS
function setup() {
    createCanvas(600, 400);

    //CREATING BUBBLES
    for (let i = 0; i < 3; i++) {
        bubbles.push(new Bubble(200, 150));
    }
}

//DRAWING BUBBLES
function draw() {
    background('#290068');

    //FOR LOOP
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

//DEFINING CLASS
class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke('#00daa0');
        strokeWeight(1);
        noFill();
        ellipse(this.x, this.y, 24, 25);
    }
}
