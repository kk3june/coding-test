const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');
input.map(el => +el);

const chess = [1,1,2,2,2,8];
const add = [];

for(let i = 0; i < input.length; i++) {
  {input[i] === chess[i] ? add.push(0) : add.push(chess[i]-input[i])}
}

console.log(add.join(' '));