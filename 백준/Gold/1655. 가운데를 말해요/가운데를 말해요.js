const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0];
const arr = input.slice(1);

class MaxHeap {
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

  top() {
    return this.size() > 0 ? this.heap[1] : null;
  }

  extractMax() {
    if (this.size() === 0) return 0;
    if (this.size() === 1) return this.heap.pop();

    const max = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.bubbleDown();
    return max;
  }

  bubbleUp() {
    let index = this.size();
    while (index > 1) {
      const parentIndex = Math.floor(index / 2);
      if (this.heap[index] <= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 1;
    while (index * 2 <= this.size()) {
      let maxChildIndex = index * 2;
      if (
        index * 2 + 1 <= this.size() &&
        this.heap[index * 2 + 1] > this.heap[maxChildIndex]
      ) {
        maxChildIndex = index * 2 + 1;
      }

      if (this.heap[index] >= this.heap[maxChildIndex]) break;
      [this.heap[index], this.heap[maxChildIndex]] = [
        this.heap[maxChildIndex],
        this.heap[index],
      ];
      index = maxChildIndex;
    }
  }
}

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

  top() {
    return this.size() > 0 ? this.heap[1] : null;
  }

  extractMin() {
    if (this.size() === 0) return 0;
    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.bubbleDown();
    return min;
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
  const leftHeap = new MaxHeap();  
  const rightHeap = new MinHeap();
  const answer = [];

  arr.forEach((num) => {
    if (leftHeap.size() === 0 || num <= leftHeap.top()) {
      leftHeap.insert(num);
    } else {
      rightHeap.insert(num);
    }

    if (leftHeap.size() > rightHeap.size() + 1) {
      rightHeap.insert(leftHeap.extractMax());
    } else if (rightHeap.size() > leftHeap.size()) {
      leftHeap.insert(rightHeap.extractMin());
    }

    answer.push(leftHeap.top());
  });
  
  console.log(answer.join("\n"));
}

solution();