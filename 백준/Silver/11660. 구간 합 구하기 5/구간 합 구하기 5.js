const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
}).on('close', () => {
    const [N, M] = input[0];
    const table = input.slice(1, N+1);
    const coords = input.slice(N+1);
    
    const prefixSum = Array(N+1).fill().map(() => Array(N+1).fill(0));
    for(let i = 1; i <= N; i++) {
        for(let j = 1; j <= N; j++) {
            prefixSum[i][j] = table[i-1][j-1] + prefixSum[i-1][j] + prefixSum[i][j-1] - prefixSum[i-1][j-1]
        }
    }
    
    const result = coords.map(([x1,y1,x2,y2]) => {
        return prefixSum[x2][y2] - prefixSum[x1-1][y2] - prefixSum[x2][y1-1] + prefixSum[x1-1][y1-1];
    });
    
    console.log(result.join('\n'));
})