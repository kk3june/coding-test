const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
  
const N = +input[0];
const M = +input[1];
const [from, to] = input[M+2].split(' ').map(Number)
const maps = Array.from({length: N +1}, () => []);

for(let i = 2; i < input.length - 1; i++) {
  const [depart, arrive, cost] = input[i].split(' ').map(Number);
  maps[depart].push([arrive,cost]);
}


function solution() {
    console.log(dijkstra(from, to));
}

function dijkstra(start, end) {
    const distance = Array(N + 1).fill(Infinity);
    const visited = Array(N + 1).fill(false);
    
    distance[start] = 0;
    
    for (let i = 0; i < N; i++) {
        // 1. 방문하지 않은 노드 중 최소 거리 노드 찾기
        let minNode = -1;
        for (let j = 1; j <= N; j++) {
            if (!visited[j] && (minNode === -1 || distance[j] < distance[minNode])) {
                minNode = j;
            }
        }
        
        visited[minNode] = true;
        
        // 2. 인접 노드들의 거리 업데이트
        for (const [next, cost] of maps[minNode]) {
            distance[next] = Math.min(distance[next], distance[minNode] + cost);
        }
    }
    
    return distance[end];
}


solution();