'use strict';
const { sum } = require('./sum.js');
const { square } = require('./square.js');

const sumOfSquares = (x, y) => {
  return sum(square(x), square(y));
};

module.exports = { sumOfSquares };
