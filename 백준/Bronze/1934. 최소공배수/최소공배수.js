const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = +input.shift();

for(let i = 0; i < input.length; i++) {
    const chk = input[i].split(' ').map(Number).sort((a,b) => a - b);
    
    const gcd = (a,b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a,b) => a * b / gcd(a,b);
    
    console.log(lcm(chk[0], chk[1]));
}