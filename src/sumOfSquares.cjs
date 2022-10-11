'use strict';

const { sum } = require('./sum.cjs');

const { square } = require('./square.cjs');

const sumOfSquares = (x, y) => sum(square(x), square(y));

module.exports = { sumOfSquares };
