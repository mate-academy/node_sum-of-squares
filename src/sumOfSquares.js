'use strict';

const { square } = require('./square.js');
const { sum } = require('./sum.js');

const sumOfSquares = (a, b) => {
  return sum(square(a), square(b));
};

module.exports.sumOfSquares = sumOfSquares;
