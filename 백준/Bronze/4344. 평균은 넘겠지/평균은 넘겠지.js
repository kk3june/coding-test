const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= +input[0]; i++) {
  const row = input[i].split(" ");
  let count = 0;
  let sum = 0;
  let avg = 0;

  for (let j = 1; j <= +row[0]; j++) {
    sum += +row[j];

    if (j === +row[0]) {
      avg = sum / row[0];

      for (let k = 1; k <= +row[0]; k++) {
        if (row[k] > avg) {
          count++;
        }
      }
      const num = ((count / row[0]).toFixed(5) * 100).toFixed(3);
      console.log(num + "%");
    }
  }
}
