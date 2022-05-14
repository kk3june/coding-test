const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let num = 0;

for (let i = 0; i < input.length; i++) {
  const charCode = input.charCodeAt(i);

  if (["S", "V", "Y", "Z"].indexOf(input[i]) !== -1) {
    num += Math.floor((charCode - 65) / 3) + 2;
  } else {
    num += Math.floor((charCode - 65) / 3) + 3;
  }
}

console.log(num);
