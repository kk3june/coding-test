const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const arr = input.slice(0, N)
const map = new Map(arr.map((v,i) => [v, i+1]));
const chk = input.slice(N);
const answer = [];

chk.forEach(v => {
  if(Number.isNaN(+v)) answer.push(map.get(v))
  else answer.push(arr[+v-1]);
})

console.log(answer.join('\n'))