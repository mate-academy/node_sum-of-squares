'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

function sumOfSquares(params1, params2) {
  return sum(square(params1), square(params2));
}

module.exports.sumOfSquares = sumOfSquares;
