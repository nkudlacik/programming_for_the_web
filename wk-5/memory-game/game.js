//GLOBAL VARIABLES
const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {

}

//CANVAS SETUP
function setup() {
    createCanvas(800, 600);
    background('#498a41');
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 5; i++) {
        cards.push(new Card(startingX, startingY));
        startingX += 120;
        }
        startingY += 150;
        startingX = 100;
    }
}

//MOUSE PRESSED FUNCTION
function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        if(cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped');
        }
    }
}

//CARD CLASS
class Card {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 100;
        this.face = DOWN;
        this.show();
    }

    show() {
        if (this.face === DOWN) {
            fill('#ffffff');
            rect(this.x, this.y, this.width, this.height, 10);
        } else {
            fill('#f5cf0f');
            rect(this.x, this.y, this.width, this.height, 10);
        }
    }

    didHit(mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
           mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
           } else {
            return false;
           }
    }

    flip() {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}