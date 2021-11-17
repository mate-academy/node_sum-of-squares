'use strict';

const { square } = require('./square');
const { sum } = require('./sum');

const sumOfSquares = (firstNumber, secondNumber) => sum(
  square(firstNumber), square(secondNumber)
);

module.exports = {
  sumOfSquares,
};
