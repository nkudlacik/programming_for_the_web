//GLOBAL VARIABLES
const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {

}

//CARD IMAGES
let cardfaceArray = [];
let cardback;
function preload() {
    cardback = loadImage('images/card-back.png');
    cardfaceArray = [
        loadImage('images/charlie.png'),
        loadImage('images/dee.png'),
        loadImage('images/dennis.png'),
        loadImage('images/frank.png'),
        loadImage('images/mac.png')
    ]
}

//SETUP
function setup() {
    createCanvas(800, 600);
    background('#498a41');
    let selectedFaces = [];
    for (let z = 0; z < 5; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        cardfaceArray.splice(randomIdx, 1);
    }

    selectedFaces = shuffleArray(selectedFaces);

    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 5; i++) {
            const faceImg = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImg));
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
            console.log('flipped', cards[k]);
        }
    }
}

//CARD CLASS
class Card {
    constructor(x, y, cardfaceImg) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 100;
        this.face = DOWN;
        this.cardfaceImg = cardfaceImg;
        this.show();
    }

//CARD FUNCTIONS & METHODS
    show() {
        if (this.face === DOWN) {
            fill('#ffffff');
            rect(this.x, this.y, this.width, this.height, 10);
            image(cardback, this.x, this.y);
        } else {
            fill('#f5cf0f');
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardfaceImg, this.x, this.y);
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

//RANDOM PLACEMENT OF IMAGES
function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        const idx = Math.floor(Math.random() * counter);
        counter--;
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
    }