const [n, ...words] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
Array.from(new Set(words))
    .sort((a, b) => a > b ? 1 : (a < b ? -1 : 0))
    .sort((a, b) => a.length - b.length)
    .forEach(i => console.log(i));