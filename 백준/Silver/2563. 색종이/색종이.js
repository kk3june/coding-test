const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(el => +el))
let arr = new Array(100).fill().map(el => new Array(100).fill(0));
let answer = 0;

for(let i = 1; i < input.length; i++) {
    let x = +input[i][0];
    let y = +input[i][1];
    for(let j = 0; j < 10; j++) {
        for(let m = 0; m < 10; m++) {
            arr[x+j][y+m] = 1;
        }
    }
}

for(let i = 0; i < 100; i++) {
    for(let j = 0; j < 100; j++){
        if(arr[i][j] === 1) answer++;
    }
}

console.log(answer);