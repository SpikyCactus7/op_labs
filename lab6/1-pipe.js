'use strict';

const pipe = (...fns) => {
  for (const f of fns) {
    if (typeof f !== 'function') {
      throw new Error('All compose arguments should be functions');
    }
  }
  return (x) => {
    let res = x;
    for (const f of fns) {
      res = f(res);
    }
    return res;
  };
};
module.exports = { pipe };
