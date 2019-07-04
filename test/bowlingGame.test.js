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

  function rollSpare() {
    game.roll(5);
    game.roll(5); 
  }

  function rollStrike(game) {
    game.roll(10);
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
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).toEqual(16);
  });

  it("should handle one Strike in a game", () => {
    rollStrike(game);
    game.roll(3);
    game.roll(4);
    rollMany(17, 0);
    expect(game.score()).toEqual(24);
  });
});


