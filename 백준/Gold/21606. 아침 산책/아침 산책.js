const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const type = input[1].split('').map(Number);
const graph = Array.from({length: n + 1}, () => []);

for(let i = 2; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function getRoutes() {
  let count = 0;
  for(let i = 1; i <= n; i++) {
    if(type[i] === 1) {
      const visited = Array(n+1).fill(false);
      visited[i] = true;
      const queue = [i];

      while(queue.length > 0) {
        const current = queue.shift();

        for(let neighbor of graph[current]) {
          if(!visited[neighbor]) {
            if(type[neighbor - 1] === 0) {
              visited[neighbor] = true;
              queue.push(neighbor);
            } else {
              if(neighbor !== i) {
                count++;
              }
            }
          }
        }
      }
    }
  }
  console.log(count);
}

getRoutes();