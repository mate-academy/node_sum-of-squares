'use strict';

const square = require('./square');
const sum = require('./sum');

function sumOfSquares(x, y) {
  return sum(square(x), square(y));
};

module.exports = sumOfSquares;
