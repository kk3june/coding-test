const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let lineidx = 0;
let isFirst = true;

while(true) {
    const line = input[lineidx++].split(' ').map(Number);
    const k = line[0];
    
    if(k === 0) break;
    
    if(!isFirst) console.log();
    isFirst = false;
    
    const S = line.slice(1);
    makeLotto(0, [], S);
}

function makeLotto(idx, selected, S) {
    if(selected.length === 6) {
        console.log(selected.join(' '));
        return;
    }
    
    if(idx === S.length) return;
    
    selected.push(S[idx]);
    makeLotto(idx+1, selected, S);
    selected.pop()
    makeLotto(idx+1, selected, S);
}