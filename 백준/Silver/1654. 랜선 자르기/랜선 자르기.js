const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on('line',(line) => {
    input.push(line.trim())
}).on('close', () => {
    const [K, N] = input[0].split(' ').map(Number);
    const lines = input.slice(1).map(Number);
    
    let low = 1; // 최소 길이는 1
    let high = Math.max(...lines);
    let result = 0;
    
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let count = 0;
        
        for(let line of lines){
            count += Math.floor(line / mid);
        }
        
        if(count >= N) {
            result = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    console.log(result);
})