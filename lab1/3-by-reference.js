'use strict';

const inc = (obj) => {
  if (typeof obj === 'object') {
    obj.n++;
  }
};
const obj = { n: 6 };
inc(obj);
console.log(obj);

module.exports = { inc };
