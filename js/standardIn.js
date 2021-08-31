/// JavaScript

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let currentName = 'robo'

function askName() {
    rl.question('Please input your name\n', (answer) => {
        console.log(`Hello ${answer}!`);
        currentName = answer
        rl.close();
    });
}

askName();

