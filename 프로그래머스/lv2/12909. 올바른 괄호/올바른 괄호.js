function solution(s){
    let chk = 0;
    for(let i = 0; i < s.length; i++) {
        if( s[i] === '(') {
            chk++;
        } else if( s[i] === ')') {
            chk--;
            if(chk === -1) return false;
        } 
    }
    if(chk !== 0 ) return false;
    
    return true;
}