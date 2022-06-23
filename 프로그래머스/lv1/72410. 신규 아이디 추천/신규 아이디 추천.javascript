function solution(new_id) {
    let answer = new_id.toLowerCase().replace(/[^\w-.]/g, '').replace(/\.{2,}/g, '.').replace(/^\.|\.$/g, '').replace(/^$/g, 'a').slice(0,15).replace(/\.$/g,'')
    
    const len = answer.length;
    
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3- len);
}