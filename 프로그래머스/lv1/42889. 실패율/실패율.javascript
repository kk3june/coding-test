function solution(N, stages) {
    const answer = [];
    
    let players = stages.length;
    const stageArr = new Array(N).fill(0);
    
    console.log(stageArr)
    // 각 스테이지별 플레이 중인 플레이어 배열
    for( let i = 0; i < stages.length; i++) {
        if(stages[i] <= N) {
            stageArr[stages[i] - 1]++;        
        }
    }
    console.log(stageArr)
    
    // 각 스테이지 별 실패율
    for( let j = 0; j < stageArr.length; j++) {
        let current = stageArr[j];
        answer.push({idx: j + 1, ratio: stageArr[j] / players});
        players -= current;
    }

    // 실패율 내림차순으로 스테이지 정렬
    answer.sort((a,b)=>{
        if(a.ratio>b.ratio){
            return -1;
        }else if (a.ratio<b.ratio){
            return 1;
        }else{
            if(a.idx>b.idx){
                return 1;
            }else{
                return -1;
            }
        }
    })
    
    
    return answer.map(el => el.idx);
}