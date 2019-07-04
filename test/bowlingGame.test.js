const BowlingGame = require("../src/bowlingGame");

describe("Bowling Game Test", () => {
  let game;

  beforeEach(() => {
    game = new BowlingGame();
  });

  function rollMany(nTimesOfRoll, pins) {
    for (let i = 0; i < nTimesOfRoll; i++) {
      game.roll(pins);
    }
  }

  it("should test for gutter game", () => {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  it("should return 20 score after a game", () => {
    rollMany(20, 1);
    expect(game.score()).toEqual(20);
  });
  
  it("should handle one Spare in a game", () => {
    game.roll(5);
    game.roll(5); // Spare
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).toEqual(16);
  });
});
