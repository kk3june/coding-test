function solution(citations) {
    let answer = 0;
    const newArr = citations.sort((a,b) => b-a);
    
    for(let i = 0; i < newArr.length; i++) {
        let count = 0;    
        const standard = newArr[i];
        newArr.forEach(function(el) {
            if(el >= standard) count++; 
        })
        
        if(standard >= count) answer = count;
    }
    return answer;
}