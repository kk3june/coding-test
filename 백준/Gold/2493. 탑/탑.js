const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const heights = input[1].split(' ').map(Number);

function solution() {
    const stack = [];  
    const answer = []; 
    
    for(let i = 0; i < N; i++) {
        while(stack.length > 0 && stack[stack.length-1][1] < heights[i]) {
            stack.pop();
        }
        if(stack.length === 0) {
            answer.push(0);
        } else {
            answer.push(stack[stack.length-1][0] + 1); 
        }
        stack.push([i, heights[i]]);
    }
    
    console.log(answer.join(' '));
}

solution();