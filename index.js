const MatSimulator = require('./MatSimulator')
const CircleAnimation = require('./CircleAnimation')

const matSimulator = new MatSimulator();

const circleOne = new CircleAnimation(matSimulator, 0, 0, 4);

const circleTwo = new CircleAnimation(matSimulator, 7, 14, 6);