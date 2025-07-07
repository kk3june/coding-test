const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const arr = input.splice(1);

function isVps(values) {
    let count = 0;
    for(let val of values) {
        if(val === '(') count++;
        else if(val === ')') count--;
        
        if(count < 0) return false;
    }
    return count === 0;
}

function solution() {
    arr.forEach(it => {
        if(isVps(it)) console.log('YES');
        else console.log('NO')
    })
}

solution();