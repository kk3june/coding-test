const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function(line){
  input.push(line);
}).on('close', function(){
  let testCase = Number(input[0]);
  for(let i =1; i < testCase + 1; i++) {
    let firstParam = Number(input[i].split(' ')[0]);
    let secondParam = Number(input[i].split(' ')[1]);
    console.log(firstParam + secondParam);
  }
  process.exit();
});