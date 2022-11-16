const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const matrixNum = input[0].split(' ').map(el => +el);
const n = matrixNum[0];
const m = matrixNum[1];

const a = [];
const b = [];
let answer = '';

for(let i = 1; i < input.length; i++) {
    const row = input[i].split(' ').map(el => +el);
    if(i <= n) a.push(row);
    else b.push(row);
}

for(let j = 0; j < n; j++) {
    for(let k = 0; k < m; k++) {
        if(k === m-1) answer += parseInt(a[j][k]) + parseInt(b[j][k]); 
        else answer += parseInt(a[j][k]) + parseInt(b[j][k]) + ' ';
    }
    if( j < n-1 ) answer += '\n';
}

console.log(answer);
