const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
const [n, m] = input;
const visited = new Array(n);
const output = [];
const answer = [];

function DFS(L) {
    if(L === m ) {
        answer.push(output.join(' '))
        return;
    };
    
    for(let i = 0; i < n; i++) {
        if(visited[i] === true) continue;
        visited[i] = true;
        output.push(i+1);
        DFS(L+1);
        output.pop();
        visited[i] = false;
    }
}

DFS(0);

console.log(answer.join('\n').trim())