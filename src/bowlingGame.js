const NUMBER_OF_FRAMES = 10;
const MAX_SCORE = 10;
class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let rolls = this.rolls;
    let score = 0;
    let frameIndex = 0;

    for (let frame = 0; frame < NUMBER_OF_FRAMES; frame++) {
      if(isStrike(rolls, frameIndex))
      {
        score += MAX_SCORE + strikeBonus(rolls, frameIndex);
        frameIndex += 1;
      }
      else if (isSpare(rolls, frameIndex)) 
      {
        score += MAX_SCORE + spareBonus(rolls, frameIndex);
        frameIndex += 2;
      } 
      else 
      {
        score += sumScoreOfEachFrame(rolls, frameIndex);
        frameIndex += 2;
      }
    }

    return score;
  }
}

module.exports = BowlingGame;


function isStrike(rolls, frameIndex) {
  return rolls[frameIndex] === MAX_SCORE;
}

function isSpare(rolls, frameIndex) {
  return rolls[frameIndex] + rolls[frameIndex + 1] === MAX_SCORE;
}

function strikeBonus(rolls, frameIndex) {
  return rolls[frameIndex + 1] + rolls[frameIndex + 2];
}

function spareBonus(rolls, frameIndex) {
  return rolls[frameIndex + 2];
}

function sumScoreOfEachFrame(rolls, frameIndex) {
  return rolls[frameIndex] + rolls[frameIndex + 1];
}