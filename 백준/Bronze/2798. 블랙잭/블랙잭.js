const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0].split(' ')[0]);
const m = parseInt(input[0].split(' ')[1]);
const cards = input[1].split(' ').map(el => +el);

let answer = 0;

for(let i = 0; i < n; i++){
    for(let j = i+1; j < n; j++ ) {
        for(let k = j+1; k < n; k++) {
            const sum = cards[i] + cards[j] + cards[k];
            if( sum <= m && sum >= answer ) answer = sum;
        }
    }
}
console.log(answer);

