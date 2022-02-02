'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

function sumOfSquare() {
  return sum(square(x) + square(y));
}

module.exports = { sumOfSquare}