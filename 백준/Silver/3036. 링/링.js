const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = +input[0];
const arr = input[1].split(' ').map(Number);
const answer = [];

for(let i = 1; i < T; i++) {
    const ring = arr[0];
    const newRing = arr[i];
    if(ring % newRing === 0) {
        answer.push((ring/newRing) + '/' + 1);
    } else {
        const getGcd = (a,b) => a % b === 0 ? b : getGcd(b, a%b);
        const gcd = getGcd(newRing, ring);
        answer.push((ring/gcd) + '/' + (newRing/gcd));
    }
}
console.log(answer.join('\n'));
