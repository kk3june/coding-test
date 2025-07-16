const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const d = +input[n+1];

class MinHeap {
   constructor() {
       this.heap = [null];
   }
   
   size() {
       return this.heap.length - 1;
   }
   
   insert(value) {
       this.heap.push(value);
       this.bubbleUp();
   }
   
   extractMin() {
       if (this.size() === 0) return null;
       if (this.size() === 1) return this.heap.pop();
       
       const min = this.heap[1];
       this.heap[1] = this.heap.pop();
       this.bubbleDown();
       return min;
   }
   
   top() {
       return this.size() > 0 ? this.heap[1] : null;
   }
   
   bubbleUp() {
       let index = this.size();
       while(index > 1) {
           const parentIndex = Math.floor(index / 2);
           if (this.heap[index] >= this.heap[parentIndex]) break;
           [this.heap[index], this.heap[parentIndex]] = [
               this.heap[parentIndex],
               this.heap[index],
           ];
           index = parentIndex;
       }
   }
   
   bubbleDown() {
       let index = 1;
       while(index * 2 <= this.size()) {
           let minChildIndex = index * 2;
           
           if(index * 2 + 1 <= this.size() && 
              this.heap[index * 2 + 1] < this.heap[minChildIndex]) {
               minChildIndex = index * 2 + 1;
           }
           
           if (this.heap[index] <= this.heap[minChildIndex]) break;
           [this.heap[index], this.heap[minChildIndex]] = [
               this.heap[minChildIndex],
               this.heap[index],
           ];
           index = minChildIndex;
       }
   }
}

function solution() {
   const lines = [];
   
   for(let i = 1; i <= n; i++){
       const [home, office] = input[i].split(' ').map(Number);
       const start = Math.min(home, office);
       const end = Math.max(home, office);
       lines.push([start, end]);
   }
   
   lines.sort((a,b) => a[1] - b[1]);
   
   const minHeap = new MinHeap();
   let maxCount = 0;
   
   for(let i = 0; i < lines.length; i++){
       const [currentStart, currentEnd] = lines[i];
       
       minHeap.insert(currentStart);
       
       const windowStart = currentEnd - d;
       
       while(minHeap.size() > 0 && minHeap.top() < windowStart) {
           minHeap.extractMin();
       }
       
       maxCount = Math.max(maxCount, minHeap.size());
   }
   
   console.log(maxCount);
}

solution();