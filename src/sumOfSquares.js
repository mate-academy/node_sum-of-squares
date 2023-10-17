'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

// eslint-disable-next-line no-unused-vars
function sumOfSquares(a, b) {
  return sum(square(a) + square(b));
}
