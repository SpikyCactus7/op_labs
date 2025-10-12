'use strict';

const square = (x) => x * x;

const cube = (x) => x * x * x;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const arr = [];
  for (let i = 0; i <= 9; i++) {
    const x = average(square(i), cube(i));
    arr.push(x);
  }
  return arr;
};

console.log(calculate());

module.exports = { square, cube, average, calculate };
