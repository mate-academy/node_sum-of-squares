'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

module.exports.sumOfSquares = function(x, y) {
  return sum(square(x), square(y));
};
