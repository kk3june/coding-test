const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);
const answer = [];
const visited = new Array(n).fill(false);

function solution(arr) {
    if(arr.length === m) {
        answer.push(arr.join(' '));
        return;
    }
    
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            visited[i] = true;
            arr.push(nums[i]);
            solution(arr);
            arr.pop();
            visited[i] = false;
        }
    }
}

solution([]);
console.log(answer.join('\n'));