const Rules = require('./rules')
const chalk = require('chalk')
const Table = require('cli-table')

class Help {
  constructor(moves) {
    this.moves = moves;
    this.table = this.generateTable()
  }

  generateTable() {
    const table_new = new Table()
    const title = 'v PC/User >'
    table_new.options.head.push(chalk.blue(title))
     for (let move of this.moves) {
      table_new.options.head.push(move)
    }

    for (let i = 1; i <= this.moves.length; i++) {
      const row = [chalk.yellow(this.moves[i - 1])];
      for (let j = 1; j <= this.moves.length; j++) {
        const userMove = this.moves[i - 1];
        const computerMove = this.moves[j - 1];
        const rules = new Rules(this.moves)
        const result = rules.getResult(userMove, computerMove);
        row.push(result);
      }
      table_new.push(row);
    }
    return table_new.toString()
    // return table;
  }

  displayTable() {
    console.log(this.table)
  }
}

module.exports = Help