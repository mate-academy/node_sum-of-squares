'use strict';

const { square } = require('./square');

const sumOfSquares = (a, b) => square(a) + square(b);

module.exports = { sumOfSquares };
