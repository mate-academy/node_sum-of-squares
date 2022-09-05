'use strict';

const { sum } = require('./sum.js');
const { square } = require('./square.js');

exports.sumOfSquares = function sumOfSquares(a, b) {
  const first = square(a);
  const second = square(b);

  return sum(first, second);
};
