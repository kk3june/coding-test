const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [l, c] = input[0].split(' ').map(Number);
const strings = input[1].split(' ').sort();

function solution(idx, password, vowelCount) {
    if(password.length === l) {
        const count = l - vowelCount;
        if(vowelCount >= 1 && count >= 2) {
            console.log(password.join(''));
        }
        return;
    }
    
    if(idx === c) return;

    const isVowel = 'aeiou'.includes(strings[idx]);
    solution(idx+1, [...password, strings[idx]], vowelCount + (isVowel ? 1 : 0));

    solution(idx+1, password, vowelCount);
}

solution(0, [], 0);