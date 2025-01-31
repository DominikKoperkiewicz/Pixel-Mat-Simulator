const EventEmitter = require('events');


class MatSimulator {

    constructor() {
        this.frameDuration = 100;
        this.rows = 28;
        this.cols = 14;
        this.matArray = Array.from({ length: this.rows }, () => Array(this.cols).fill(0));

        // Initializing main loop
        this.eventEmitter = new EventEmitter();
        this.interval = setInterval(() => {
            this.eventEmitter.emit("frameUpdate");

            console.clear();
            this.printMat();
        }, this.frameDuration);
    }

    // Print current mat state in console
    printMat() {
        console.log(this.matArray.map(row => row.join(" ")).join("\n"));
        /*
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                process.stdout.write(String(this.matArray[i][j]));
                process.stdout.write(" ");
            }
            process.stdout.write("\n");
        }*/
    }

    // Turn on specific pixel 
    turnOnTile(x, y) {
        if( x < 0 || x >= this.cols || y < 0 || y >= this.rows) {
            return;
        }
        this.matArray[Math.floor(y)][Math.floor(x)] = 1;
    }

    // Turn off specific pixel 
    turnOffTile(x, y) {
        if( x < 0 || x >= this.cols || y < 0 || y >= this.rows) {
            return;
        }
        this.matArray[Math.floor(y)][Math.floor(x)] = 0;
    }
}

module.exports = MatSimulator;