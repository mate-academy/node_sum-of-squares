'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

// eslint-disable-next-line no-unused-vars
function sumOfSquares(x, y) {
  return sum(square(x), square(y));
};

module.exports = { sumOfSquares };
