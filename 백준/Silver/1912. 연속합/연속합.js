const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on('line',(line) => {
    input.push(line.trim()) 
}).on('close', () => {
    const N = Number(input[0]);
    const arr = input[1].split(' ').map(Number);

    let maxSum = arr[0]; 
    let currentSum = arr[0];

    for (let i = 1; i < N; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum); 
    }

    console.log(maxSum);
});