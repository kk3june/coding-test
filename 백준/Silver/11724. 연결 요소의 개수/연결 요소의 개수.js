const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", (line) => {
    input.push(line.trim().split(' ').map(Number));
}).on("close", () => {
    const [N, M] = input[0];
    const edgesList = input.slice(1);
    const grid = Array.from({ length: N + 1 }, () => [])
    const visited = Array(N+1).fill(false);
    let count = 0;
    
    for(let [u,v] of edgesList) {
        grid[u].push(v);
        grid[v].push(u)
    }
    
    function dfs(node) {
        visited[node] = true;
        for(let next of grid[node]) {
            if(!visited[next]) dfs(next)
        }
    }
    
    for(let i = 1; i <= N; i++){
       if(!visited[i]) {
           count++;
           dfs(i)
       }
    }
    
    console.log(count);
})