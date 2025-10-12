'use strict';

const generateKey = (length, possible) => {
  const possibleLength = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
  const index = Math.floor(Math.random() * possibleLength);
  key += characters[index];
  }
  return key;
};

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgihjklmnopqrstuvwxyz1234567890';
const key = generateKey(12, characters);
console.log(key);

module.exports = { generateKey };