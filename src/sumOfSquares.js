'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

const sumOfSquares = (a, b) => sum(square(a), square(b));

module.exports.sumOfSquares = sumOfSquares;
