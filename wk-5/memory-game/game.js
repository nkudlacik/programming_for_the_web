//GLOBAL VARIABLES
let myCard;
const DOWN = 'down';
const UP = 'up';

//CANVAS SETUP
function setup() {
    createCanvas(1000, 500);
    background('#498a41');
    myCard = new Card();
}

//MOUSE PRESSED FUNCTION
function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));
}

//CARD CLASS
class Card {
    constructor() {
        this.x = 100;
        this.y = 100;
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