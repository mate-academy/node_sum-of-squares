'use strict';

const sum = (...numbers) => {
  let cart = 0;

  for (const iterator of numbers) {
    cart += iterator;
  }

  return cart;
};

module.exports.sum = sum;
