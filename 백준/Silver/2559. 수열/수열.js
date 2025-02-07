const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    const [N,K] = input[0].split(' ').map(it => Number(it));
    const temps = input[1].split(' ').map(it => Number(it));
    
    let maxSum = -Infinity;
    
    for(let i = 0; i <= N-K; i++) {
        let sum = 0;
        for(let j = 0; j < K; j++) {
            sum += temps[i+j]
        }
        maxSum = Math.max(maxSum, sum);
    }
    console.log(maxSum)
})