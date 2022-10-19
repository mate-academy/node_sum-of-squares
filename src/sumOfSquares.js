'use strict';

const square = require('./square);
const sum = require('./sum');

module.exports = (x, y) => sum(square(x), square(y));
