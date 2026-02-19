//GLOBAL VARIABLES
const rectWidth = 110;
const rectHeight = 150;

let startingX = 200;
let startingY = 100;
let myCards = [];
let startingId = 0;

//CANVAS
function setup () {
    createCanvas(1000, 500);
    background('#498a41');

//GAME CARDS
    for(let k = 0; k < 2; k++) {
        for (let i = 0; i < 5; i++) {
            rect(startingX, startingY, rectWidth, rectHeight);

            myCards.push({ x: startingX, y: startingY, id: startingId });

            startingX += rectWidth + 20;
            startingId++;
        }
        startingY += rectHeight + 20;
        startingX = 200;
    }
    console.log(myCards);
}

//MOUSE PRESSED FUNCTION
function mousePressed() {
    for(let j = 0; j < myCards.length; j++) {
        if (
            mouseX > myCards[j].x &&
            mouseX < myCards[j].x + rectWidth &&
            mouseY > myCards[j].y &&
            mouseY < myCards[j].y + rectHeight
        ) {
            console.log('card has been clicked!', myCards[j].id);
        }
    }
}
