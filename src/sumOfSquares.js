'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

function sumOfSquares(a, b) {
  const squareA = square(a);
  const squareB = square(b);

  return sum(squareA, squareB);
}

module.exports = { sumOfSquares };
