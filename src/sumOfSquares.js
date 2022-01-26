'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

exports.sumOfSquares = (x, y) => {
  const firstSquer = square(x);
  const secondSquer = square(y);

  return sum(firstSquer, secondSquer);
};
