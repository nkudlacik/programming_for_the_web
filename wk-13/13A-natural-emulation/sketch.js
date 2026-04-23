// GLOBAL VARIABLES //
let gravity;
let fireworks = [];
let colors = [];

// SETUP & COLORS //
function setup() {
    let cnv = createCanvas(800, 600);
    cnv.parent("p5container"); // attach canvas to HTML div

    gravity = createVector(0, 0.1);

    colors = ["#6e3647", "#e4c089", "#435e43", "#e2b2b2"];
}

// DRAW LOOP //
function draw() {
    background('#141b29');

// CREATE NEW FIREWORKS //
    if (random(1) < 0.03) {
        fireworks.push(new Firework(random(width), height));
    }

// UPDATE & DISPLAY FIREWORKS //
    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].display();

// REMOVE EXPLODED FIREWORKS //
        if (fireworks[i].done) {
            fireworks.splice(i, 1);
        }
    }
}