'use strict';

const compose = (...fns) => {
  const handlers = [];
  const func = (x) => {
    if (fns.length === 0) return x;
    const last = fns.length - 1;
    let res = x;
    try {
      for (let i = last; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      return null;
    }
  };
  func.on = (err, handler) => {
    if (err === 'error') handlers.push(handler);
  };
  return func;
};

module.exports = { compose };
