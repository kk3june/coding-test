const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const noHearSet = new Set(input.slice(0, N));
const noSeeSet = new Set(input.slice(N));
const answer = [];

noSeeSet.forEach(el => {
    if(noHearSet.has(el)) answer.push(el);
})

answer.sort();
console.log(answer.length + '\n' + answer.join('\n'));