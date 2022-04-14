const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function(line) {
    input = line.split(' ').map((el) => parseInt(el));
}).on("close", function() {
    let dice1 = input[0];
    let dice2 = input[1];
    let dice3 = input[2];
    let maxDice = Math.max(...input);
    if(dice1 === dice2 && dice1 === dice3) {
        console.log(10000 + dice1 * 1000);
    } else if(dice1 === dice2 || dice1 === dice3) {
        console.log(1000 + dice1 * 100);
    } else if(dice2 === dice3) {
        console.log(1000 + dice2 * 100);
    } else {
        console.log(maxDice * 100);
    }
    process.exit();
});