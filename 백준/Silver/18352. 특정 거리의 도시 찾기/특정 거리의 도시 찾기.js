const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, K, X] = input[0].split(' ').map(Number);
const road = input.slice(1).map(it => it.split(' ').map(Number));
const arr = Array.from({length: N + 1}, () => []);
const result = [];

function solution() {
  road.forEach(it => {
    const [from, to] = it
    arr[from].push(to)
  })

  bfs(X, K);
  console.log(result.length ? result.sort((a,b) => a-b).join('\n') : -1)
}

function bfs(start, targetDist) {
  const queue = [[start, 0]];
  const visited = Array.from({length: N+1}, () => false);
  visited[start] = true;

  while(queue.length) {
    const [node, dist] = queue.shift();

    if(dist === targetDist) {
      result.push(node);
      continue;
    }

    if(dist < targetDist) {
      for(let next of arr[node]) {
        if(!visited[next]) {
          visited[next] = true;
          queue.push([next, dist+1]);
        }
      }
    }
  }
}

solution();