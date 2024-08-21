const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('');

const copied = [...input].reverse();
const result = Boolean(input.join('') === copied.join(''))

console.log(result ? 1 : 0);