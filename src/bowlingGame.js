class BowlingGame {
  constructor() {
    this.scores = 0;
  }
  roll(pins) {
    this.scores += pins;
  }
  score() {
    return this.scores;
  }
}

module.exports = BowlingGame;
