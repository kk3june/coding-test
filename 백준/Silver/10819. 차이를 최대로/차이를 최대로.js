const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(' ').map(it => Number(it));
const visited = Array(N).fill(false);
const permutation = Array(N).fill(0);
let max = 0;

function calculateSum() {
    let sum = 0;
    for(let i = 0; i < N-1; i++){
        sum += Math.abs(permutation[i] - permutation[i+1]);
    }
    if(sum > max) max = sum;
}

function generatePermutation(curIdx) {
    if(curIdx === N){
        calculateSum();
        return;
    }
    for(let i = 0; i < N; i++) {
        if(visited[i]) continue;
        permutation[curIdx] = arr[i];
        visited[i] = true;
        generatePermutation(curIdx+1);
        visited[i] = false;
    }
}

generatePermutation(0);
console.log(max)
