function solution(n) {
  let answer = Array(n).fill(0);
  answer[1] = 1;
  answer[2] = 2;
  for (let i = 3; i <= n; i++) {
    let current = answer[i - 2] + answer[i - 1];
    answer[i] = current % 1000000007;
  }

  return answer[n];
}