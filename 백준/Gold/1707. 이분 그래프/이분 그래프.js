const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let start = 0;
const k = +input[start++];

for(let i = 0; i < k; i++) {
    const [v, e] = input[start++].split(' ').map(Number); // v: 정점 갯수, e: 간선 갯수
    
    const graph = Array.from({length: v + 1}, () => [])

    for(let j = 0; j < e; j++) {
        const [a, b] = input[start++].split(' ').map(Number);
        graph[a].push(b);
        graph[b].push(a);
    }
    
    if(isBipartite(graph, v)) {
      console.log('YES')
    } else {
      console.log('NO')
    }
}


function isBipartite(graph, v) {
  const colors = Array.from({length: v + 1}, () => -1);

  for(let start = 1; start <=v; start++) {
    if(colors[start] === -1) {
      const queue = [start];
      colors[start] = 0;

      while(queue.length > 0) {
        const current = queue.shift();

        for(let neighbor of graph[current]) {
          if(colors[neighbor] === -1) {
            colors[neighbor] = 1 - colors[current];
            queue.push(neighbor);
          } else if(colors[neighbor] === colors[current]){
            return false;
          }
        }
      }
    }
  }
  return true;
}

