const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let T = Number(input.shift());

function solution(data){
    for(let i = T; i > 0; i--) {
      let count = 0;
      const coordinate = data.shift().split(' ').map(Number);
      const [x1, y1, x2, y2] = coordinate;

      const t = Number(data.shift());
      const arr = data.splice(0, t).map(el => el.split(' ').map(Number));

      for(let i = 0; i < arr.length; i++) {
          const [x, y, r] = arr[i];
          const d1 = (x1 - x) ** 2 + (y1 - y) ** 2 >= r**2;
          const d2 = (x2 - x) ** 2 + (y2 - y) ** 2 >= r**2;
          if(d1 !== d2) count++;
      }
      console.log(count);
    }
}

solution(input);