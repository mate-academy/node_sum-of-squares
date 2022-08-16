'use strict';

const { sum } = require('./sum.js');
const { square } = require('./square');

function sumOfSquares(x, y) {
  return sum(square(x), square(y));
};

module.exports = {
  sumOfSquares,
};
