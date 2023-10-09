const crypto = require('crypto');

class Key {
  constructor(moves) {
    this.moves = moves
    this.key = this.generateKey();
    this.randomMove = this.generateRandomMove();
    this.hmac = this.calculateHMAC(this.randomMove);
  }
  generateKey() {
    const keyLength = 32;
    return crypto.randomBytes(keyLength).toString('hex');
  }

  generateRandomMove() {
    const randomIndex = Math.floor(Math.random() * this.moves.length);
    return this.moves[randomIndex];
  }

  calculateHMAC(move) {
    const hmac = crypto.createHmac('sha3-256', this.key);
    hmac.update(move);
    return hmac.digest('hex');
  }
}

module.exports = Key