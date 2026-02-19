//CANVAS SETUP
function setup() {
    createCanvas(1000, 500);
    background('#498a41');
    let myCard = new Card();
}

//CARD CLASS
class Card {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.width = 80;
        this.height = 100;
        this.show();
    }
    show() {
        fill('#ffffff');
        rect(this.x, this.y, this.width, this.height, 10);
    }
}