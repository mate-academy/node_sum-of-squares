'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

function sumOfSquares(x, y) {
  return sum(square(x), square(y));
};

// console.log(sumOfSquares(2, 5));

module.exports = { sumOfSquares };
