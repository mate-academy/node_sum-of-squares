'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

exports.sumOfSquares = (x, y) => {
  const firstSquere = square(x);
  const secondSquere = square(y);

  return sum(firstSquere, secondSquere);
};
