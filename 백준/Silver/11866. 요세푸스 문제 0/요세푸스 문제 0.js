const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const [N,K] = input;

function solution() {
    const arr = Array(N).fill().map((_, i) => i+1);
    const answer = [];
    let currentIndex = 0;
    
    while(arr.length > 0) {
        currentIndex = (currentIndex + K - 1) % arr.length;

        answer.push(arr[currentIndex]);
        arr.splice(currentIndex, 1);

        if(currentIndex === arr.length) currentIndex = 0;
    }
    
    console.log('<' + answer.join(', ') + '>');
}

solution();