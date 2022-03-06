'use strict';

const { square } = require('./square');
const { sum } = require('./sum');

const sumOfSquares = function sumOfSquares(x, y) {
  return sum(square(x), square(y));
};

module.exports.sumOfSquares = sumOfSquares;
