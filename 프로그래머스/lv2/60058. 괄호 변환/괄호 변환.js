function solution(p) {
    let answer = '';
    
    if(p.length === 0) {
        return p;
    }
    
    const [pos, correct] = check(p);
    
    let u = p.slice(0, pos);
    let v = p.slice(pos);
    
    if (correct) {
        return u + solution(v);
    }
    answer = '(' + solution(v) + ')';
    for(let i = 1; i < u.length -1; i++) {
        if(u[i] == '(') {
            answer += ')';
        } else {
            answer += '(';
        }
    }
    return answer;
}

function check(str) {
    let correct = true;
    let left = 0;
    let right = 0;
    const mystack = [];
    
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            left++;
            mystack.push('(')
        } else {
            right++;
            if(mystack.length === 0) {
                // stack에 열린 괄호가 없는 경우
                correct = false;
            } else {
                // stack에 열린괄호가 있는 경우 
                mystack.pop();
            }
        }
        
        if(left === right) return [i+1, correct]
    }
    // 균형잡힌 괄호 문자열이 아닐 경우 대비
    return 0, false
}