'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

function sumOfSquares(x, y) {
  return (sum(square(x), square(y)));
};

sumOfSquares(2, 3);

module.exports = { sumOfSquares };
