const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on('line',(line) => {
    input.push(line.trim());
}).on('close', () => {
    const N = Number(input[0]);
    const grid = input.slice(1).map(it => it.split('').map(Number));
    const visited = Array(N).fill().map(() => Array(N).fill(false));
    const result = [];
    
    function dfs(x, y) {
        let count = 1;
        visited[y][x] = true;
        
        const dx = [0, 0, -1, 1];
        const dy = [1, -1, 0, 0];
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (nx >= 0 && ny >= 0 && nx < N && ny < N && grid[ny][nx] === 1 && !visited[ny][nx]) {
                count += dfs(nx, ny);
            }
        }
        return count;
    }
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[j][i] && grid[j][i] === 1) {
                result.push(dfs(i, j));  
            }
        }
    }
    
    console.log(result.length);
    console.log(result.sort((a, b) => a - b).join('\n'));
});