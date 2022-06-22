// 오답 : 샘플 테스트 케이스 통과, 정확성: 8.3

function solution(id_list, report, k) {
  // 중복 제거된 report 배열
  const newReport = [];
  // id_list별 신고당한 횟수
  const reportBoard = [];
  // 정지된 id 배열
  const stopId = [];
  // 정답
  const answer = [];

  // 1. 중복제거
  const set = new Set(report);
  const delRepeat = [...set];

  for (let i = 0; i < delRepeat.length; i++) {
    newReport.push(delRepeat[i].split(' '));
  }

  // 2. id_list별 신고당한 횟수
  for (let i = 0; i < id_list.length; i++) {
    let chk = id_list[i];
    let count = 0;
    for (let j = 0; j < newReport.length; j++) {
      if (chk === newReport[j][1]) {
        count++;
      }
    }
    reportBoard.push([chk, count]);
  }

  // 3. 정지된 아이디 배열
  for (let k = 0; k < reportBoard.length; k++) {
    if (reportBoard[k][1] >= 2) {
      stopId.push(reportBoard[k][0]);
    }
  }

  // 4. id_list, 중복 제거된 report, 정지된 아이디 배열 사용하여 answer 구하기
  for (let m = 0; m < id_list.length; m++) {
    let count = 0;
    for (let n = 0; n < newReport.length; n++) {
      if (id_list[m] === newReport[n][0] && isStopped(newReport[n][1])) {
        count++;
      }
    }
    answer.push(count);
  }

  function isStopped(el) {
    for (let i = 0; i < stopId.length; i++) {
      if (el === stopId[i]) {
        return true;
      }
    }
  }

  return answer;
}
