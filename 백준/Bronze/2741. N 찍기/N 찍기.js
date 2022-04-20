const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line',function(line){
  const num = parseInt(line);
  let result = '';
  
  for(let i = 1; i <= num; i++) {
    result += i + '\n';
  }
  console.log(result);
}).on('close', function() {
  process.exit();
})
