'use strict';

const range = (start = 15, end = 30) => {
  const leng = end - start;
  if (leng < 0) return [];
  const arr = new Array(leng);
  for (let i = start; i <= end; i++) {
    arr[i++] = i;
  }
  return arr;
};

const arr = range(15, 30);
console.log(arr);

module.exports = { range };
