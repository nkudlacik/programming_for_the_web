//GLOBAL VARIABLES
const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 150;
let cards = [];
const gameState = {
    totalPairs: 5,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
}
let song;
let button;

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
    ];

//LOAD MUSIC
    song = loadSound('music/theme-music.mp3');
}

//SETUP
function setup() {
    let canvas = createCanvas(800, 600);
    canvas.style('border-radius', '20px');
    canvas.style('overflow', 'hidden'); 

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
//MUSIC BUTTON
    button = createButton('Play Theme');
    button.position(355, 560);
    button.mousePressed(toggleMusic);
}

//VICTORY MESSAGE
function draw () {
    background('#3f8b35')
    if (gameState.numMatched === gameState.totalPairs) {
//MAIN MESSAGE
        fill('yellow');
        textFont('Lucida Console');
        textStyle(ITALIC);
        textSize(60);
        text('You Are The Golden God!', 70, 480);
//SUBTITLE MESSAGE
        fill('#0e3e08');
        textStyle(ITALIC);
        textSize(25);
        text('~ No Charlie Work for You ~', 230, 513);
        noLoop();
    }

    for (let n = 0; n < cards.length; n++) {
        if(!cards[n].isMatch) {
            cards[n].face = DOWN;
        }
        cards[n].show();
    }

//TITLE & SCOREBOARD
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill('white');
    textFont('Lucida Console');
    textStyle(ITALIC);
    textSize(60);
    text('The Gang Learns Javascript', 60, 90);
    textSize(35);
    text('Wildcard Matches: ' + gameState.numMatched, 480, 575);
    text('Jabroni Attempts: ' + gameState.attempts, 25, 575);
}

//MOUSE PRESSED FUNCTION
function mousePressed () {
    if (gameState.waiting) {
        return;
    }

    for (let k = 0; k < cards.length; k++) {
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            gameState.flippedCards.push(cards[k]);
        }
    }

    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardfaceImg === gameState.flippedCards[1].cardfaceImg) {

            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;

            gameState.flippedCards.length = 0;

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

    show() {
        if (this.face === UP || this.isMatch) {
            fill('#ffffff');
            noStroke();
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardfaceImg, this.x, this.y);
        } else {
            fill('#ffffff');
            noStroke();
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

//TOGGLE MUSIC FUNCTION
function toggleMusic() {
    if (song.isPlaying()) {
        song.pause();
        button.html('Play Theme');
    } else {
        song.loop();
        button.html('Pause Theme');
    }
}