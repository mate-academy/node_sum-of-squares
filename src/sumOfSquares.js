'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

const sumOfSquares = (num1, num2) => sum(square(num1), square(num2));

module.exports = { sumOfSquares };
