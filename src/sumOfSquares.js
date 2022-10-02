'use strict';

const { square } = require('./square.js');
const { sum } = require('./sum.js');

function sumOfSquares(x, y) {
  return sum(square(x), square(y));
}

module.exports = { sumOfSquares };
