'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

function sumOfSquares(a, b) {
  const x = square(a);
  const y = square(b);

  return sum(x, y);
}

module.exports = { sumOfSquares };
