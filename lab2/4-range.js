'use strict';

const range = (start = 15, end = 30) => {
  const leng = end - begin;
  if (leng < 0) return [];
  const arr = new Array(leng);
  for (let n = start; n <= end; n++) {
    arr[i++] = n;
  }
  return arr;
};

module.exports = { range };
