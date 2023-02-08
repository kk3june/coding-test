const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
const [n, m] = input;
const visited = new Array(n).fill(false);
const output = [];
const answer = [];


function DFS(L, startNum) {
    if(startNum === m ) {
        answer.push(output.join(' '));
        return;
    }
    for(let i = L; i < n; i++) {
        if(visited[i] === true) continue;
        visited[i] = true;
        output.push(i+1);
        DFS(i, startNum+1);
        output.pop();
        visited[i] = false;
    }
    
}
DFS(0,0);
console.log(answer.join('\n').trim());


