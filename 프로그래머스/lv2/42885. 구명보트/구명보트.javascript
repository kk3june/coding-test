function solution(people, limit) {
    let answer = 0;
    people.sort((a,b) => b - a);
    let idx = 0;
    let len = people.length - 1;
    
    while(idx < len) {
        let sum = people[idx] + people[len];
        if( sum > limit) {
            idx++;
        } else {
            idx++;
            len--;
        }
        answer++;
    }
    if(idx === len) answer++; 
    
    return answer;
}