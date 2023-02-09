const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
const [n, m] = input;
const answer = [];
const output = [];

function DFS(L) {
  if(L === m) {
    answer.push(output.join(' '))
    return;
  }
  for(let i = 0; i < n; i++) {
    output.push(i+1);
    DFS(L+1);
    output.pop();
  }
}

DFS(0);
console.log(answer.join('\n'));
