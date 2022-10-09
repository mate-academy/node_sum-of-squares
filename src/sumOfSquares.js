'use strict';

const { square } = require('./square');
const { sum } = require('./sum');

const sumOfSquares = (x, y) => {
  const squareX = square(x);
  const squareY = square(y);
  const result = sum(squareY, squareX);

  return result;
};

module.exports.sumOfSquares = sumOfSquares;
