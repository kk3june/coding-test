function solution(s) {
    let answer = s.length;
    
    for(let i = 1; i <= parseInt(s.length / 2); i++) {
        let str = '';
        let cnt = 1;
        let curStr = s.substr(0, i);
        
        for( let j = i; j <= s.length; j += i) {
            let nextStr = s.substr(j,i);
            
            if(curStr === nextStr) {
                cnt++;
            } else {
                if(cnt === 1) str = str + curStr
                else str = str + cnt + curStr
                cnt = 1;
                curStr = nextStr
            }
        }
        
        if(cnt === 1) str = str + curStr;
        else str = str + cnt + curStr;
        answer = Math.min(answer, str.length);
    }
    
    return answer;
}