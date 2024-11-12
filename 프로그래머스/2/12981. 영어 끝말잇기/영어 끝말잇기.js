function solution(n, words) {
    const stack = [words[0]];
    let playerNumber = 1;
    let lastWord;

    for(let i = 1; i < words.length; i++) {
        lastWord = words[i-1].split('').pop();
        
        if(lastWord !== words[i].split('').shift() || stack.includes(words[i]) || words[i].length === 1) {
            return [i % n + 1, Math.floor(i/n)+1]
        } else {
            stack.push(words[i])
        }
    }
    return [0,0]
}