const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const [N, ...arr] = input.map((e) => Number(e));
const result = arr.sort((a, b) => a - b);
console.log(result.join('\n'));