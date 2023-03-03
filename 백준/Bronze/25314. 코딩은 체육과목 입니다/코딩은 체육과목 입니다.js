const input = require('fs').readFileSync('dev/stdin').toString().trim();
const num = Number(input);

let repeat = num/4;
let answer = '';

for(let i = 0; i < repeat; i++ ) {
    answer += 'long ';
}

console.log(answer + 'int');
