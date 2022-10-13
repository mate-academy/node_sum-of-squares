'use strict';

module.exports = (x, y) => require('./sum')(require('./square')(x),
  require('./square')(y));
