'use strict';

function sum(...number) {
  return number.reduce((a, b) => a + b);
};

module.exports = { sum };
