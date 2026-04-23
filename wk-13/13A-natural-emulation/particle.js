class Particle {

// INITIALIZATION (CONSTRUCTOR) //
    constructor(x, y, vx, vy, explode, color) {
        this.pos = createVector(x, y);
        this.vel = createVector(vx, vy);
        this.explode = explode;
        this.color = color;

        this.size = this.explode ? 2 : 10;

        this.life = 255;
        this.done = false;
    }

// UPDATE (MOVEMENT) //
    update() {
        if (!this.explode) {
            this.vel.add(gravity);
        }

        this.pos.add(this.vel);
        this.life -= 2;
    }

// DISPLAY (DRAWING) //
    display() {
        noStroke();
        fill(this.color, this.life);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }

// CLEANUP (IF FIREWORK EXPLODED) //
    finished() {
        this.done = (this.life < 0);
    }
}