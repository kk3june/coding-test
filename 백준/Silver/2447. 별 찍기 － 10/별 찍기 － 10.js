const input = require('fs').readFileSync('dev/stdin').toString().trim();

const num = parseInt(input);
const lines = [];

function loop(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      faintStar(i, j, num);
    }
    lines.push('\n');
  }
}

function faintStar(i, j, num) {
  if (i % 3 === 1 && j % 3 === 1) {
    lines.push(' ');
  } else {
    if (num === 1) {
      lines.push('*');
    } else {
      faintStar(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
    }
  }
}

loop(num);

console.log(lines.join(''));
