const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const a = new Set(input[0].split(' ').map(Number));
const b = new Set(input[1].split(' ').map(Number));
const aMinusB = [];
const bMinusA = [];

for(const el of a) {
    if(!b.has(el)) aMinusB.push(el);
}
for(const el of b) {
    if(!a.has(el)) bMinusA.push(el);
}

console.log(aMinusB.length + bMinusA.length);