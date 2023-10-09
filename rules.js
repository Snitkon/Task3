class Rules {
  constructor(moves) {
    this.moves = moves;
  }

  getResult(userMove, computerMove) {
    const indexUser = this.moves.indexOf(userMove);
    const indexComputer = this.moves.indexOf(computerMove);

    if (indexUser === indexComputer) {
      return 'Draw';
    }

    const halfMoves = Math.floor(this.moves.length / 2);
    const movesToBeat = this.moves.slice(indexUser + 1, indexUser + 1 + halfMoves);
    if (movesToBeat.includes(computerMove)) {
      return 'Win';
    }

    return 'Lose';
  }
}

module.exports = Rules