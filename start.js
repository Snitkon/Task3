const readline = require('readline');
const Game = require('./game');
const Help = require('./tables');


const moves = process.argv.slice(2);
if (moves.length < 3 || moves.length % 2 === 0 || new Set(moves).size !== moves.length) {
  console.log('Error: Please provide an odd number of unique moves (>= 3) as command-line arguments.');
} else {
  const game = new Game(moves);
  const table = new Help(moves)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  game.displayMenu();
  rl.on('line', (input) => {
    if (input === '0') {
      rl.close();
    }
    else if (input !== '?') {
      game.play(parseInt(input)-1);
    }
    if (input === '?') {
      table.generateTable()
      table.displayTable()
    }
  });
}



