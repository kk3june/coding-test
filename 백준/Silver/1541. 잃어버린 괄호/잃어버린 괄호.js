const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const input = [];
rl.on('line', (line) => {
    input.push(line.trim())
}).on('close', () => {
    const formular = input[0];

    const splitedByMinus = formular.split('-');
    let result = splitedByMinus.shift().split('+').map(Number).reduce((acc,cur) => acc + cur,0);
    splitedByMinus.forEach(group => {
        const sum = group.split('+').map(Number).reduce((acc,cur) => acc + cur,0);
        result -= sum;
    })
    
    console.log(result)
})