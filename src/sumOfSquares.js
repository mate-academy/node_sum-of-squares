'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

const sumOfSquares = (firstNumber, secondNumber) => {
  const firstSquare = square(firstNumber);
  const secondSquare = square(secondNumber);

  return sum(firstSquare, secondSquare);
};

module.exports.sumOfSquares = sumOfSquares;
