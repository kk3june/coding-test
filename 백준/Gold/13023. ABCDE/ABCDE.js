const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const graph = Array.from({length: N}, () => []);

for(let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

const visited = new Array(N).fill(false);
let found = false;

function dfs(idx, depth) {
    if(depth === 5) {
        found = true;
        return;
    } 
    
    visited[idx] = true;
    
    for(let neighbor of graph[idx]) {
        if(found) return;
        
        if(!visited[neighbor]) {
            dfs(neighbor, depth + 1);
        }
    }
    visited[idx] = false;
}

for(let i = 0; i < N; i++) {
    dfs(i, 1);
    
    if(found) {
        console.log(1);
        return;
    }
}

console.log(0)