'use strict';

const { square } = require('./square');
const { sum } = require('./sum');

function sumOfSquares(x, y) {
  const squaredX = square(x);
  const squaredY = square(y);

  return sum(squaredX, squaredY);
}

module.exports = { sumOfSquares };
