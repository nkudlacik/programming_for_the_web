//GLOBAL VARIABLES
const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
    totalPairs: 5,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
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

//DRAW FUNCTION
//unable to put background color here; overrides card images
function draw () {
    background('#498a41')
    if (gameState.numMatched === gameState.totalPairs) {
        fill('yellow');
        textSize(66);
        text('You Win!', 400, 425);
        noLoop();
    }
    //used variable n instead of k; k already used in mousepressed
    for (let n = 0; n < cards.length; n++) {
        if(!cards[n].isMatch) {
            cards[n].face = DOWN;
        }
        cards[n].show();
    }
    //SCOREBOARD
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(255);
    textSize(36);
    text('Attempts: ' + gameState.attempts, 100, 500);
    text('Matches: ' + gameState.numMatched, 100, 450);
}

//MOUSE PRESSED FUNCTION
function mousePressed () {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        //FIRST CHECK FLIPPED CARDS LENGTH
        //THEN TRIGGER THE FLIP
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardfaceImg === gameState.flippedCards[1].cardfaceImg) {
            //CARDS MATCH! TIME TO SCORE
            //MARK CARDS AS MATCH SO THEY DON'T FLIP BACK
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            //EMPTY THE FLIPPED CARDS ARRAY
            gameState.flippedCards.length = 0;
            //INCREMENT THE SCORE
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
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
        this.isMatch = false;
        this.show();
    }

//CARD FUNCTIONS & METHODS
    show() {
        if (this.face === UP || this.isMatch) {
            fill('#f5cf0f');
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardfaceImg, this.x, this.y);
        } else {
            fill('#ffffff');
            rect(this.x, this.y, this.width, this.height, 10);
            image(cardback, this.x, this.y);
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