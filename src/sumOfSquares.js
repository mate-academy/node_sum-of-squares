'use strict';

function sumOfSquares(...numbers) {
  return numbers.reduce((a, b) => (a * a) + (b * b));
};

module.exports = { sumOfSquares };
