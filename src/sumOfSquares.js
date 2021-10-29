'use strict';

const { square } = require('./square');
const { sum } = require('./sum');

module.exports function sumOfSquares(x, y) {
	return sum(square(x), square(y));
};
