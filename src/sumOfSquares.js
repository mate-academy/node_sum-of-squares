'use strict';

const sum = require('./sum').sum;
const square = require('./square').square;

module.exports = {
  sumOfSquares(x, y) {
    return sum(square(x), square(y));
  },
};
