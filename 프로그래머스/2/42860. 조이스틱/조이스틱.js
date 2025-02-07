function solution(name) {
    // 1. 알파벳 계산
    let mouseUpDown = [...name].reduce((acc, cur) => acc + Math.min(cur.charCodeAt(0) - 'A'.charCodeAt(0), 26 - (cur.charCodeAt(0) - 'A'.charCodeAt(0))),0);
    let mouseLeftRight = name.length -1;

    // 2. 좌우 계산
    for(let i = 0; i < name.length; i++) {
        let nextIndex = i+1;
        
        while(i < name.length && name[nextIndex] === 'A') {
            nextIndex++
        }
        mouseLeftRight = Math.min(mouseLeftRight, i + (name.length - nextIndex) + Math.min(i, name.length - nextIndex));
    }
    return mouseUpDown + mouseLeftRight
}
