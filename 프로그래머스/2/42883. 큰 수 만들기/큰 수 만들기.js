function solution(number, k) {
    const stack = [];
    let count = 0;
    
    for(let num of number) {
        while(count < k && stack.length > 0 && stack[stack.length-1] < num) {
            stack.pop();
            count++;
        }
        stack.push(num);
    }
    
    while(count < k) {
        stack.pop();
        count++;
    }
    
    return stack.join('')
}