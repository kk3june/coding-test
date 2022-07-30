function solution(s) {
    var answer = '';
    
    let count = s.length;
    if (count%2 == 0) {
        answer = s[count/2-1] + s[count/2];
    } else {
        let odd = count/2;
        answer = s[Math.round(odd)-1];
    }
    
    return answer;
}