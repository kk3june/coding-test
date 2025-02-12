const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const arr = input.slice(1).map(Number)
    const dp = Array(12).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    
    for(let i = 4; i <= 11; i++) {
        dp[i] = dp[i-3] + dp[i-2] + dp[i-1];
    }
    
    arr.forEach(it => console.log(dp[it]))
});