function solution(priorities, location) {
    const newArr = [...priorities]
    let cnt = 0;
    
    while (true) {
        let max = Math.max(...newArr)
        let n = newArr.shift();
        
        if(n === max) {
            cnt++
            if(location === 0) return cnt;
        } else {
            newArr.push(n)
        }
        location--;
        
        if(location === -1) location = newArr.length -1;
    }
    
    
}