const readline = require('readline');
const Game = require('./game')


const moves = process.argv.slice(2);

if (moves.length < 3 || moves.length % 2 === 0 || new Set(moves).size !== moves.length) {
  console.log('Error: Please provide an odd number of unique moves (>= 3) as command-line arguments.');
} else {
  const game = new Game(moves);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  game.displayMenu();
  rl.on('line', (input) => {
    if (input === '0') {
      rl.close();
    } else {
      game.play(parseInt(input)-1);
    }
  });
}



