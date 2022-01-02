'use strict';

const square = (a) => {
  if (typeof a !== 'number' || a === 0) {
    return 0;
  }

  return Math.pow(a, 2);
};

module.exports = { square };
