'use strict';

const rangeOdd = (start, end) => {
    if (end - start > 0) {
        const arr = [];
        for (let n = start; n <= end; n++) {
            if (n % 2 !== 0) arr.push(n);
        }
        return arr;
    };
};

const arr = rangeOdd(15, 30);
console.log(arr);

module.exports = { rangeOdd };