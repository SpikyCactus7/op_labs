'use strict';

const sum = (...args) => args.reduce((ac, el) => (ac + el), 0);

module.exports = { sum };
