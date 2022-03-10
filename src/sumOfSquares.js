'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

function sumOfSquares(x, y) {
  const squareX = square(x);
  const squareY = square(y);

  return sum(squareX, squareY);
}

module.exports.sumOfSquares = sumOfSquares;
