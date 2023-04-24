function solution(word) {
    let answer = -1;
    const vowel = ['A', 'E', 'I', 'O', 'U'];
    
    let checker = true;
    
    function dfs(w) {
        if(checker) {
            answer++;
            if(w === word) {
                checker = false;
                return;
            } else if ( w !== word && w.length < 5) {
                for(let i = 0; i < vowel.length; i++) {
                    dfs(w + vowel[i]);
                }
            } else {
                return;
            }
        }
    }
    
    dfs('')
    return answer;
}