function solution(dartResult) {
    const dartArr = dartResult.split('');
    const stack = [];
    const sum = [];

    for( let i = 0; i < dartArr.length; i++) {
        if( !isNaN(dartArr[i])) {
            if(dartArr[i] === '0' && dartArr[i -1] === '1') {
                stack.pop();
                stack.push(10);
            } else {
            if( stack.length > 0) sum.push(stack.pop());
                stack.push(+dartArr[i])
            }
        }
        if(dartArr[i] === 'S') stack[0] = Math.pow(stack[0],1);
        if(dartArr[i] === 'D') stack[0] = Math.pow(stack[0],2);
        if(dartArr[i] === 'T') stack[0] = Math.pow(stack[0],3);
        if(dartArr[i] === '*') {
            stack[0] = stack[0] * 2;
            if(sum.length > 0) {
                const num = sum.pop() * 2;
                sum.push(num);
            }
        }
        if(dartArr[i] === '#') {
            stack[0] = stack[0] * -1;
        }
    }
    if(stack.length > 0) sum.push(stack[0])
    
    return sum.reduce((acc,cur) => acc + cur);
}