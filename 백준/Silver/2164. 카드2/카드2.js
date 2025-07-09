const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = +input;

class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(item) {     
        this.items[this.rear] = item;
        this.rear++;
    }
    
    dequeue() {          
        if(this.front === this.rear) return undefined;
        
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    
    size() {
        return this.rear - this.front;
    }
}

function solution() {
    const queue = new Queue();

    for(let i = 1; i <= N; i++) {
        queue.enqueue(i);
    }
    
    while(queue.size() > 1) {
        queue.dequeue();            
        queue.enqueue(queue.dequeue()); 
    }
    
    console.log(queue.dequeue());
}

solution();