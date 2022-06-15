'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

const sumOfSquares = (first, second) => {
  return sum(square(first), square(second));
};

module.exports.sumOfSquares = sumOfSquares;
