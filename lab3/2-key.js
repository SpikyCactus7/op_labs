'use strict';

const generateKey = (length, possible) => {
  const possibleLength = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    key = Math.floor(Math.random() * possibleLength);
  }
  return key;
};

module.exports = { generateKey };