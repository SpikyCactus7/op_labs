const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 'vscode', 6, 7, true, 'node', false];

const countTypes = {};

for (const item of arr) {
    const type = typeof item;
    if (!(type in countTypes)) {
        countTypes[type] = 0;
    }
    countTypes[type]++;
}

console.log(countTypes); 