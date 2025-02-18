const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    let idx = 1;
    const T = Number(input[0]);

    for(let t = 0; t < T; t++) {
        const [M,N,K] = input[idx++].split(' ').map(Number);
        const grid = Array(N).fill().map(() => Array(M).fill(0))
        
        for(let i = 0; i < K; i++) {
            const [x,y] = input[idx++].split(' ').map(Number);
            grid[y][x] = 1;
        }
        
        const dx = [0,0,-1,1];
        const dy = [-1,1,0,0];
        
        function dfs(x,y) {
            grid[y][x] = 0;
            for(let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if(nx >= 0 && ny >= 0 && nx < M && ny < N && grid[ny][nx] === 1) {
                    dfs(nx, ny);
                }
            }
        }
        
        let count = 0;
        for(let j = 0; j < N; j++) {
            for(let k = 0; k < M; k++) {
                if(grid[j][k] === 1) {
                    dfs(k, j);
                    count++;
                }
            }
        }
        console.log(count)
    }
})