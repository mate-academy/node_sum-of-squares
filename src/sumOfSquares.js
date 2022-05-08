'use strict';

const { square } = require('./square');
const { sum } = require('./sum');

const sumOfSquares = (x, y) => sum(square(x), square(y));

module.exports = { sumOfSquares };
