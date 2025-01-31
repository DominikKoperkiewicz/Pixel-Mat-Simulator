

class CircleAnimation {

    static ROTATION_SPEED = 0.25;

    constructor(matSimulator, circleX, circleY, radius) {
        this.circleXPosition = circleX;
        this.circleYPosition = circleY;
        this.radius = radius;
        this.angle = Math.random() * 2 * Math.PI;
        this.x = Math.floor(this.circleXPosition + Math.cos(this.angle) * this.radius);
        this.y = Math.floor(this.circleYPosition + Math.sin(this.angle) * this.radius);
        this.matSimulator = matSimulator;

        // Add element update to main loop
        matSimulator.eventEmitter.on("frameUpdate", () => {
            this.update();
        });

    }

    update() {
        // Turn off last position
        this.matSimulator.turnOffTile(this.x, this.y);

        // Calculate new position
        this.angle += CircleAnimation.ROTATION_SPEED;
        this.x = this.circleXPosition + Math.cos(this.angle) * this.radius;
        this.y = this.circleYPosition + Math.sin(this.angle) * this.radius;

        // OPTIONAL: CLAMPING - if point is outside the area, clamp it to the walls
        this.x = Math.max(Math.min( this.x , this.matSimulator.cols-1), 0);
        this.y = Math.max(Math.min( this.y , this.matSimulator.rows-1), 0);

        // Turn on new position
        this.matSimulator.turnOnTile(this.x, this.y);
    }

}

module.exports = CircleAnimation;