'use strict';

const sum = require('./sum.js');
const square = require('./square.js');

module.exports = function sumOfSquares(x, y) {
  return sum(square(x), square(y));
};
