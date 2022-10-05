'use strict';

const { square } = require('./square.js');
const { sum } = require('./sum.js');

module.exports.sumOfSquares = function sumOfSquares(x, y) {
  return sum(square(x), square(y));
};
