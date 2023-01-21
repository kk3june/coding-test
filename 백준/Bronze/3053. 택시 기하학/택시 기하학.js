const input = require('fs').readFileSync('dev/stdin').toString().trim();
const radius = parseInt(input);
const euclid = radius * radius * Math.PI;
const texi = ((radius * 2) * radius * 0.5) * 2;

console.log(euclid.toFixed(6));
console.log(texi.toFixed(6));
