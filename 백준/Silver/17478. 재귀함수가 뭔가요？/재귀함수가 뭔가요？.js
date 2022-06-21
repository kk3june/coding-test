const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const question = [
  '어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.',
  '"재귀함수가 뭔가요?"',
  '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.',
  '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.',
  '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."',
  '"재귀함수는 자기 자신을 호출하는 함수라네"',
  '라고 답변하였지.',
];
const num = parseInt(input);
const hyphen = '____';
let answer = '';

for (let i = 0; i <= num; i++) {
  if (i === 0) {
    answer += question[0] + '\n';
    answer += question[1] + '\n';
    answer += question[2] + '\n';
    answer += question[3] + '\n';
    answer += question[4] + '\n';
  } else if (i === num) {
    answer += hyphen.repeat(i) + question[1] + '\n';
    answer += hyphen.repeat(i) + question[5] + '\n';
    answer += hyphen.repeat(i) + question[6] + '\n';
  } else {
    answer += hyphen.repeat(i) + question[1] + '\n';
    answer += hyphen.repeat(i) + question[2] + '\n';
    answer += hyphen.repeat(i) + question[3] + '\n';
    answer += hyphen.repeat(i) + question[4] + '\n';
  }

  if (i === num) {
    for (let j = i - 1; j >= 0; j--) {
      answer += hyphen.repeat(j) + question[6] + '\n';
    }
  }
}

console.log(answer);
