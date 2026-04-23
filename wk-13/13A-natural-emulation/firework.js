class Firework {

// INITIALIZATION (CONSTRUCTOR) //
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-5, -10));
        this.explode = false;

        this.color = color(random(colors));

        this.firework = new Particle(
            this.pos.x,
            this.pos.y,
            this.vel.x,
            this.vel.y,
            this.explode,
            this.color
        );

        this.particles = [];
        this.num = 50;
        this.done = false;
    }

// UPDATE (MOVEMENT & LOGIC) //
    update() {
        if (!this.explode) {
            this.firework.update();

            if (this.firework.vel.y > 0) {
                this.exploded();
            }

        } else {

            for (let i = this.particles.length - 1; i >= 0; i--) {
                this.particles[i].finished();
                this.particles[i].update();

                if (this.particles[i].done) {
                    this.particles.splice(i, 1);
                }
            }

            this.finished();
        }
    }

// DISPLAY (DRAWING) //
    display() {
        if (!this.explode) {
            this.firework.display();
        } else {
            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].display();
            }
        }
    }

// EXPLODE (SPAWN PARTICLES) //
    exploded() {
        this.explode = true;

        for (let i = 0; i < this.num; i++) {

            let vel = p5.Vector.random2D();
            vel.mult(random(1, 3));

            this.particles[i] = new Particle(
                this.firework.pos.x,
                this.firework.pos.y,
                vel.x,
                vel.y,
                true,
                this.color
            );
        }
    }

// CLEANUP (IF FIREWORK EXPLODED) //
    finished() {
        this.done = (this.particles.length === 0);
    }
}