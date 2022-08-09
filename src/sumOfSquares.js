'use strict';

const { sum } = require('./sum.js');
const { square } = require('./square.js');

function sumOfSquares(a, b) {
  return sum(square(a), square(b));
}

module.exports = { sumOfSquares };
