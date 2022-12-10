const input = require('fs').readFileSync('dev/stdin').toString().trim().split('');

const answer = input.map(el => +el);
console.log(answer.sort((a,b) => b-a).join(''))

