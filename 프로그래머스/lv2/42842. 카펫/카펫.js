function solution(brown, yellow) {
    let answer = [];
    const sumWidthHeight = (brown + 4) / 2;
    const minWidth = sumWidthHeight/2;
    const maxWidth = sumWidthHeight-3;
    
    for(let width = maxWidth; width >= minWidth; width--) {
        const height = sumWidthHeight - width;
        const innerCount = (width-2) * (height-2);
        
        if(innerCount === yellow) {
            answer = [width, height];
            break;
        }
    }
    
    return answer;
}