'use strict';

const { square } = require('./square');
const { sum } = require('./sum');

const sumOfSquares = (...params) => {
  const squares = params.map(param => square(param));
  const result = sum(squares[0], squares[1]);

  return result;
};

module.exports.sumOfSquares = sumOfSquares;
