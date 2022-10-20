'use strict';

const { square } = require('./square');
const { sum } = require('./sum');

function sumOfSquares(x, y) {
  const squareX = square(x);
  const squareY = square(y);

  return sum(squareX, squareY);
}

module.exports = { sumOfSquares };
