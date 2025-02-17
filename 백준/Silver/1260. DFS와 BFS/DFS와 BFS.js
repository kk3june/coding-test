const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
    const [N,M,V] = input[0].split(' ').map(Number);
    const edgeList = input.slice(1).map((it) => it.split(' ').map(Number));
    const edges = Array(N+1).fill().map(() => Array(N+1).fill(0));
    
    edgeList.forEach(([x,y]) => {
        edges[x][y] = 1;
        edges[y][x] = 1;
    })
    
    // dfs
    const dfsVisited = Array(N+1).fill(false)
    const dfsResult = [];
    
    function dfs(v){
        dfsVisited[v] = true;
        dfsResult.push(v);
        
        for(let i = 1; i <= N; i++) {
            if(!dfsVisited[i] && edges[v][i] === 1) {
                dfs(i)
            }
        }
    }
    dfs(V)
    
    // bfs
    const bfsVisited = Array(N+1).fill(false)
    const bfsResult = [];
    
    function bfs(v) {
        const queue = [v];
        bfsVisited[v] = true; 

        while(queue.length) {
            const node = queue.shift();
            bfsResult.push(node);
            for(let i = 1; i <= N; i++) {
                if(!bfsVisited[i] && edges[node][i] === 1) {
                    bfsVisited[i] = true;
                    queue.push(i)
                }
            }
        }
    }
    bfs(V);
    
    console.log(dfsResult.join(' '))
    console.log(bfsResult.join(' '))
});
