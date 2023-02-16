'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

function sumOfSquares(a, b) {
  const squareOfa = square(a);
  const squareOfb = square(b);

  return sum(squareOfa, squareOfb);
}

module.exports = { sumOfSquares };
