const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [V, E] = input[0].split(' ').map(Number);

// Union-Find 자료구조
class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n + 1 }, (_, i) => i);
    }
    
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // 경로 압축
        }
        return this.parent[x];
    }
    
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX !== rootY) {
            this.parent[rootX] = rootY;
            return true; // 합쳐짐 (사이클 없음)
        }
        return false; // 이미 같은 그룹 (사이클 발생)
    }
}

function kruskal() {
    const edges = [];
    
    // 모든 간선 정보 수집
    for (let i = 1; i <= E; i++) {
        const [a, b, c] = input[i].split(' ').map(Number);
        edges.push([c, a, b]); // [가중치, 정점1, 정점2]
    }
    
    // 간선을 가중치 오름차순으로 정렬
    edges.sort((a, b) => a[0] - b[0]);
    
    const uf = new UnionFind(V);
    let totalWeight = 0;
    let edgeCount = 0;
    
    // 간선을 하나씩 검사
    for (let [weight, u, v] of edges) {
        // 사이클이 생기지 않으면 선택
        if (uf.union(u, v)) {
            totalWeight += weight;
            edgeCount++;
            
            // 스패닝 트리는 정점 n개에 간선 n-1개
            if (edgeCount === V - 1) {
                break;
            }
        }
    }
    
    return totalWeight;
}

console.log(kruskal());