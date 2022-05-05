'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

const sumOfSquares = (a, b) => {
  const squaresA = square(a);
  const squaresB = square(b);

  return sum(squaresA, squaresB);
};

module.exports = {
  sumOfSquares,
};
