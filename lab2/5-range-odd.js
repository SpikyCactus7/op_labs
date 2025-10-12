'use strict';

const rangeOdd = (start, end) => {
    if (end - start < 0) {
        const arr = [];
        for (let n = start; n <= end; n++) {
            if (n % 2 !== 0) arr.push(n);
        }
        return arr;
    };
};
module.exports = { rangeOdd };