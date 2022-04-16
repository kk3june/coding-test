const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  outpuot: process.stdout,
})

rl.on('line', function(line) {
  for( let i = 1; i < 10; i++ ) {
    console.log( line + ' * ' + i + ' = ' + (line * i));
  }
}).on('close', function(){
  process.exit();
})