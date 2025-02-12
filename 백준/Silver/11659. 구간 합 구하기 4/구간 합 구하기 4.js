const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

const input = [];
rl.on('line',(line) => {
    input.push(line.split(' ').map(Number))
}).on('close', () => {
    const [N, M] = input[0];
    const score = input[1];
    const target = input.slice(2);
    
    const prefixSum = Array(N+1).fill(0);
    for(let i = 0; i < N; i++) {
        prefixSum[i+1] = prefixSum[i] + score[i]
    }
    
    const result = target.map(([start, end]) => {
        return prefixSum[end] - prefixSum[start -1]
    })
    console.log(result.join('\n'))
})