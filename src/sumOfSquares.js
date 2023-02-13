'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

function sumOfSquares(x, y) {
  const squareOfX = square(x);
  const squareOfY = square(y);

  return sum(squareOfX, squareOfY);
}

module.exports.sumOfSquares = sumOfSquares;
