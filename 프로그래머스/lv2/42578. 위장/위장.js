function solution(clothes) {
    let answer = 1;
    const obj = {};
    
    clothes.forEach(el => {
        if(!obj[el[1]]){
            obj[el[1]] = [el[0]];
        } else {
            obj[el[1]].push(el[0]);
        }
    })
 
    
    for(const value of Object.values(obj)) {
        answer*=value.length+1;
    }
    
    return answer-1;
}