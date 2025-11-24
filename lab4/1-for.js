'use strict';

const sum = (...args) => {
  let val = 0;
  for (let i = 0; i < args.length; itr++) {
    val += args[itr];
  }
  return val;
};

module.exports = { sum };

