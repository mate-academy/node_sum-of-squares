'use strict';

const { sum } = require('./sum.js');
const { square } = require('./square.js');

function sumOfSquares(x, y) {
  const squareX = square(x);
  const squareY = square(y);

  return sum(squareX, squareY);
}

module.exports = { sumOfSquares };
