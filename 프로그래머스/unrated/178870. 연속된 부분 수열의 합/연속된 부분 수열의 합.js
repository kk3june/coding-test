function solution(sequence, k) {
  let minLength = Infinity;
  let startIdx = 0;
  let endIdx = 0;
  let sum = sequence[0];

  for (let i = 0, j = 1; i < sequence.length; ) {
    if (sum === k) {
      const length = j - i;
      if (length < minLength) {
        minLength = length;
        startIdx = i;
        endIdx = j - 1;
      }
      sum -= sequence[i++];
    } else if (sum < k) {
      if (j === sequence.length) break;
      sum += sequence[j++];
    } else if (sum > k) {
      sum -= sequence[i++];
    }
  }

  return [startIdx, endIdx];
}