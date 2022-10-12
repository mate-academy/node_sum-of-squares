'use strict';

const { square } = require('./square');
const { sum } = require('./sum');

const sumOfSquare = (a, b) => sum(square(a), square(b));

module.exports = { sumOfSquare };
