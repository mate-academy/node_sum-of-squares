'use strict';

const { square } = require('./square');

const sumOfSquares = (a, b) => {
  return square(a) + square(b);
};

module.exports = { sumOfSquares };
