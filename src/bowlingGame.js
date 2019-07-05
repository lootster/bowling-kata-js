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

    for (let frame = 0; frame < 10; frame++) {
      if(isStrike(rolls, frameIndex))
      {
        score += 10 + strikeBonus(rolls, frameIndex);
        frameIndex += 1;
      }
      else if (isSpare(rolls, frameIndex)) 
      {
        score += 10 + spareBonus(rolls, frameIndex);
        frameIndex += 2;
      } 
      else 
      {
        score += SumScoreOfEachFrame(rolls, frameIndex);
        frameIndex += 2;
      }
    }

    return score;
  }
}

module.exports = BowlingGame;


function isStrike(rolls, frameIndex) {
  return rolls[frameIndex] === 10;
}

function isSpare(rolls, frameIndex) {
  return rolls[frameIndex] + rolls[frameIndex + 1] === 10;
}


function strikeBonus(rolls, frameIndex) {
  return rolls[frameIndex + 1] + rolls[frameIndex + 2];
}

function spareBonus(rolls, frameIndex) {
  return rolls[frameIndex + 2];
}

function SumScoreOfEachFrame(rolls, frameIndex) {
  return rolls[frameIndex] + rolls[frameIndex + 1];
}