const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(it => BigInt(it));
const [A,B,C] = input;

function multiply(base, count, mod) {
    if(count === 0n) return 1n;
    if(count % 2n === 0n) {
        let half = multiply(base, count/2n, mod);
        return (half * half) % mod;
    } else {
        return (base * multiply(base, count-1n, mod)) % mod;
    }
}

console.log(Number(multiply(A,B,C)));