'use strict';

const { square } = require('./square');
const { sum } = require('./sum');

const sumOfSquares = (firstNumber, secondNumber) => {
  return sum(square(firstNumber), square(secondNumber));
};

module.exports.sumOfSquares = sumOfSquares;
