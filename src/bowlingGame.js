class BowlingGame {
  constructor() {
    this.rolls = [];
  }
  roll(pins) {
    this.rolls.push(pins);
  }
  score() {
    let score = 0;
    let i = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[i] + this.rolls[i + 1] === 10) {
        score += 10 + this.rolls[i + 2];
        i += 2;
      } else {
        score += this.rolls[i] + this.rolls[i + 1];
        i += 2;
      }
    }
    return score;
  }
}

module.exports = BowlingGame;
