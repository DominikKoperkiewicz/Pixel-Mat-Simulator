const MatSimulator = require('./MatSimulator')
const EventEmitter = require('events');

class CircleAnimation {

    constructor(matSimulator, circleX, circleY, radius) {
        this.circleXPosition = circleX;
        this.circleYPosition = circleY;
        this.radius = radius;
        this.angle = 0;
        this.x = Math.floor(this.circleXPosition + Math.cos(this.angle) * this.radius);
        this.y = Math.floor(this.circleYPosition + Math.sin(this.angle) * this.radius);
        this.matSimulator = matSimulator;

        matSimulator.eventEmitter.on("frameUpdate", () => {
            this.update();
        });

    }

    update() {
        this.matSimulator.turnOffTile(this.x, this.y);
        const rotationSpeed = 0.25;
        this.angle += rotationSpeed;
        this.x = Math.floor(this.circleXPosition + Math.cos(this.angle) * this.radius);
        this.y = Math.floor(this.circleYPosition + Math.sin(this.angle) * this.radius);
        this.matSimulator.turnOnTile(this.x, this.y);


    }

}

module.exports = CircleAnimation;