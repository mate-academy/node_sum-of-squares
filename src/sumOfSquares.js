'use strict';

const { square } = require('./square');
const { sum } = require('./sum');

function sumOfSquares(x, y) {
  const a = square(x);
  const b = square(y);

  const c = sum(a, b);

  return c;
}

module.exports.sumOfSquares = sumOfSquares;
