function solution(numbers) {
    let answer = 0;
    let string = numbers.map(el => el.toString());
    answer = string.sort((a,b) => (b+a) - (a+b)).join('')
    return answer[0] === '0' ? '0' : answer;
}