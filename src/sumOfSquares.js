'use strict';

const { square } = require('./square');
const { sum } = require('./sum');

const sumOfSquares = (a, b) => {
  return sum(square(a), square(b));
};

module.exports = { sumOfSquares };
