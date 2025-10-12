'use strict';

const inc = (x) => ++x;

const a = 9;
const b = inc(a);
console.log(a, b);

module.exports = { inc };
