'use strict';

const methods = (iface) => {
  const keys = [];
  for (const key in iface) {
    const fn = iface[key];
    if (typeof fn === 'function') {
      keys.push([key, fn.length]);
    }
  }
  return keys;
};

module.exports = { methods };
