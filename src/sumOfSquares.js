'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

function sumOfSquares() {
  return sum(square(x) + square(y));
}

module.exports = { sumOfSquares }
