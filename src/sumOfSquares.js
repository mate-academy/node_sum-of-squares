'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

function sumOfSquares(x, y) {
  const first = square(x);
  const second = square(y);

  return sum(first, second);
}

module.exports = { sumOfSquares };
