'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

function sumOfSquares(x, y) {
  const a = square(x);
  const b = square(y);

  return sum(a, b);
};

module.exports = { sumOfSquares };
