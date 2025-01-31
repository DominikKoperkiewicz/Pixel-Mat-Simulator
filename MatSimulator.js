const EventEmitter = require('events');

class MatSimulator {

    constructor() {
        this.frameDuration = 100;

        this.rows = 28;
        this.cols = 14;
        this.matArray = new Array(this.rows);

        for (let i = 0; i < this.rows; i++) {
            this.matArray[i] = new Array(this.cols).fill(0); 
        }

        this.eventEmitter = new EventEmitter();
        this.interval = setInterval(() => {
            this.update();
            this.eventEmitter.emit("frameUpdate");

            console.clear();
            this.printMat();
        }, this.frameDuration);
    }

    printMat() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                process.stdout.write(String(this.matArray[i][j]));
                process.stdout.write(" ");
            }
            process.stdout.write("\n");
        }
    }

    turnOnTile(x, y) {
        if( x < 0 || x >= this.cols || y < 0 || y >= this.rows) {
            return;
        }
        this.matArray[Math.floor(y)][Math.floor(x)] = 1;
    }

    turnOffTile(x, y) {
        if( x < 0 || x >= this.cols || y < 0 || y >= this.rows) {
            return;
        }
        this.matArray[y][x] = 0;
    }
    
    update() {

    }
}

module.exports = MatSimulator;