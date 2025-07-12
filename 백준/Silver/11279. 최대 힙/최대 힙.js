const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];

class MaxHeap {
    constructor() {
        this.heap = [null];  // 인덱스 0은 사용하지 않음
    }
    
    size() {
        return this.heap.length - 1;
    }
    
    // 삽입: O(log N)
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    // 최댓값 제거: O(log N)
    extractMax() {
        if(this.size() === 0) return 0;
        if(this.size() === 1) return this.heap.pop();
        
        const max = this.heap[1];           // 최댓값 저장
        this.heap[1] = this.heap.pop();    // 마지막 원소를 루트로
        this.bubbleDown();                 // 힙 조건 복구
        return max;
    }
    
    // 위로 올리기 (삽입 후)
    bubbleUp() {
        let index = this.size();
        while(index > 1) {
            const parentIndex = Math.floor(index / 2);
            if(this.heap[index] <= this.heap[parentIndex]) break;
            
            // 부모와 교환
            [this.heap[index], this.heap[parentIndex]] = 
            [this.heap[parentIndex], this.heap[index]];
            
            index = parentIndex;
        }
    }
    
    // 아래로 내리기 (제거 후)
    bubbleDown() {
        let index = 1;
        while(index * 2 <= this.size()) {
            let maxChildIndex = index * 2;  // 왼쪽 자식
            
            // 오른쪽 자식이 있고 더 크면
            if(index * 2 + 1 <= this.size() && 
               this.heap[index * 2 + 1] > this.heap[maxChildIndex]) {
                maxChildIndex = index * 2 + 1;
            }
            
            // 현재 노드가 최대 자식보다 크거나 같으면 종료
            if(this.heap[index] >= this.heap[maxChildIndex]) break;
            
            // 최대 자식과 교환
            [this.heap[index], this.heap[maxChildIndex]] = 
            [this.heap[maxChildIndex], this.heap[index]];
            
            index = maxChildIndex;
        }
    }
}

function solution() {
    const heap = new MaxHeap();
    const result = [];
    
    for(let i = 1; i <= N; i++) {
        const x = +input[i];
        
        if(x === 0) {
            result.push(heap.extractMax());
        } else {
            heap.insert(x);
        }
    }
    
    console.log(result.join('\n'));
}

solution();