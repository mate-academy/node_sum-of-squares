/* eslint-disable no-console */
'use strict';

const { sum } = require('./sum.js');
const { square } = require('./square.js');

function sumOfSquares(x, y) {
  return sum(square(x), square(y));
};

// console.log(sumOfSquares(-7, -5));

module.exports = { sumOfSquares };
