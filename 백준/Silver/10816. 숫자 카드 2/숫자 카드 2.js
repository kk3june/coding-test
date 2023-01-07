const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const possess = input[1].split(' ').map(Number);
const M = parseInt(input[2]);
const chk = input[3].split(' ').map(Number);
const answer = [];
const map = new Map();

for(card of possess) {
    if(map.has(card)) map.set(card, map.get(card) + 1);
    else map.set(card, 1);
}

for(num of chk) {
    if(map.has(num)) answer.push(map.get(num));
    else answer.push(0);
}

console.log(answer.join(' '))
