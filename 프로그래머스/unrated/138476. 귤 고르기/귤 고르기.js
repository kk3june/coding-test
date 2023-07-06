function solution(k, tangerine) {
    var answer = 0;
  
    const map = new Map();
    
    for(let i = 0; i < tangerine.length; i++) {
        const target = map.get(tangerine[i]);
        map.set(tangerine[i], target ? target + 1 : 1);
    }
        
    const arr = Array.from(map.values()).sort((a,b) => b - a)
        
    for(let j = 0; j < arr.length; j++) {
    if( k <= 0) break;
            
    k -= arr[j]
    answer++
        
    }
    return answer;
}