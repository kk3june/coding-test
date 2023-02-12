const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
const [n, m] = input;
const visited = new Array(n)
const answer = [];
const output = [];

function DFS(L, num) {
  if(L === m) {
    answer.push(output.join(' '));
    return;
  };
  for(let i = num; i < n; i++) {
    output.push(i+1);
    DFS(L+1, i);
    output.pop();
  }
}

DFS(0,0);
console.log(answer.join('\n'));