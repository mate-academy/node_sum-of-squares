'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

module.exports = {
  sumOfSquares(x, y) {
    return sum(square(x), square(y));
  },
};
