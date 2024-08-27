function solution(r1, r2) {
    var answer = 0;
    let maxY;
    let minY;
    
    for(let x = 1; x <= r2; x++) {
        maxY = Math.floor(Math.sqrt(r2**2-x**2));
        if(r1 > x) {
            minY = Math.ceil(Math.sqrt(r1**2-x**2));
        } else {
            minY = 0
        }
        answer += (maxY - minY +1)
    } 
    
    return answer *4;
}