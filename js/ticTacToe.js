/*

OOP Project - Tic Tac Toe
Prompt: "Build a working game of Tic Tac Toe from the command line."

WIN STATE
if row is all X or O
if col is all X or O
if diag is all X or O 

DRAW STATE
if 9 rounds and no win state TIE
first player 5
second player 4

Validation for inputs
 


MATRIX
boardGame = [
  [ , , ],
  [ , , ],
  [ , , ]
]
    0 1 2
   0
   1
   2


X | 0 | O
----------
 x |0  | O
----------
 x |  X | X 


 Game Class:
   counter
   Instance of Board Class
   Instance of Player (Player 1)
   Instance of Player (Player 2)
 


 Board Class
    printing board function
    
*/


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function checkValidRange(input) {
//   // if valid
//   if (input <= 2 ) {
//     return true
//   } else {
//     return false
//   }  
// }
class Game {
  constructor(){
    this.counter = 0;
    this.gameover = false;
    this.currentPlayer = 'X';
    // this is to determine if they input row and col
    this.inputCount = 2;
    this.inputRow = null;
    this.inputCol = null;
    this.switchTurn = false
  }
  //counter
  async checkInput()
  {
    ///User 1 input : 1,2 Your input between 0 - 2
    while(!this.switchTurn)
    {
      console.log('********')
      console.log(this.inputCount)
      console.log('********')

      await this.askCoords();
      
    }
    // this.printInputs()

  }
  printInputs()
  {
    console.log("Row : ",this.inputRow);
    console.log("Col : ",this.inputCol);
  }
  async askCoords() {
    let colOrRow;
    if (this.inputCount === 2) {
       colOrRow = 'row';
    } else if (this.inputCount === 1) {
      colOrRow = 'col';
    } else {
      this.switchTurn = true
      return 
    }
    await rl.question(`Input ${colOrRow}: 0-top, 1-middle, or 2-bottom\n`, (a) => {
        console.log(`Your ${colOrRow} is ${a}`);
        if(colOrRow === "row")
        {
          this.inputRow = a
        } else {
          this.inputCol = a
        }
        // increment the inputCount
        this.inputCount -= 1
         console.log("Row : ",this.inputRow);
         console.log("Col : ",this.inputCol);
         console.log("Inputcount",this.inputCount);
        rl.close();        
    });
  }
  //choose round

  //checkGame win
  
  // 
}

// player class
let playerCount = 2;

// game instance
let game = new Game();
game.checkInput();
//game.askCoords();
// game.printInputs();

// function askCoords(playerCount) {
//   let colOrRow;
//     if (playerCount === 2) {
//        colOrRow = 'row'
//     } else {
//       colOrRow = 'col'
//     }
//     rl.question(`Input ${colOrRow}: 0-top, 1-middle, or 2-bottom\n`, (a) => {
//         console.log(`Your ${colOrRow} is ${a}`);
//         if(colOrRow === "row")
//         {
//           this
//         }
//         rl.close();        
//     });
// }

// TODO: Figure out how to wait for input before moving on
// TODO: Implement game

