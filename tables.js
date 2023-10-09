const Rules = require('./rules')

class Table {
  constructor(move) {
    this.move = move;
    this.table = this.generateTable()
  }

  generateTable() {
    const table = [['']];
    for (let move of this.moves) {
      table[0].push(move);
    }

    for (let i = 1; i <= this.moves.length; i++) {
      const row = [this.moves[i - 1]];
      for (let j = 1; j <= this.moves.length; j++) {
        const userMove = this.moves[i - 1];
        const computerMove = this.moves[j - 1];
        const rules = new Rules
        const result = rules.getResult(userMove, computerMove);
        row.push(result);
      }
      table.push(row);
    }
    return table;
  }
}