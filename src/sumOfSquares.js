'use strict';

const sum = require('./sum');
const square = require('./square');

function sumOfSquares(x, y) {
  return sum.sum(square.square(x), square.square(y));
}

module.exports = { sumOfSquares };
