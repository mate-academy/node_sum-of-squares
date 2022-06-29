'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

function sumOfSquares(x, y) {
  const a = square(x);
  const b = square(y);
  const result = sum(a, b);

  return result;
};

module.exports.sumOfSquares = sumOfSquares;
