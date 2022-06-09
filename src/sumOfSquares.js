'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

const sumOfSquares = (x, y) => {
  const numA = square(x);
  const numB = square(y);

  return sum(numA, numB);
};

module.exports = { sumOfSquares };
