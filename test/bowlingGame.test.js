const BowlingGame = require("../src/bowlingGame");

describe("Bowling Game Test", () => {

  let game = new BowlingGame();

  function rollMany(nTimesOfRoll, pins) {
    for (let i = 0; i < nTimesOfRoll; i++) {
      game.roll(pins)
    }
  }

  it("should test for gutter game", () => {
    rollMany(20, 0)
    expect(game.score()).toEqual(0);
  });
  
  it("should return 20 score after a game", () => {
    rollMany(20, 1)
    expect(game.score()).toEqual(20);
  });
});
