const Rules = require('./rules')
const Key = require('./key')

class Game extends Key {
  constructor(moves) {
    super(moves)
    this.moves = moves;
  }

  displayMenu() {
    console.log(`HMAC: ${this.hmac}`);
    console.log('Available moves:');
    this.moves.forEach((move, index) => {
      console.log(`${index + 1} - ${move}`);
    });
    console.log('0 - Exit');
    console.log('Type the number of your move:');
  }

  play(userChoice) {
    if (isNaN(userChoice) || userChoice < 0 || userChoice > this.moves.length) {
      console.log('Invalid input. Please select a valid move.');
      return;
    }

    const userMove = this.moves[userChoice];

    const rules = new Rules(this.moves);
    const result = rules.getResult(userMove, this.randomMove);

    console.log(`Your move: ${userMove}`);
    console.log(`Computer's move: ${this.randomMove}`);
    console.log(`HMAC key: ${this.key}`);
    console.log(`Result: ${result}`);
  }
}

module.exports = Game