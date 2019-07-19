const BowlingGame = require("../src/bowlingGame");

describe("Bowling Game Test", () => {
  let game;

  beforeEach(() => {
    game = new BowlingGame();
  });

  function rollsWithFramesAndScore(nTimesOfRoll, pins) {
    for (let i = 0; i < nTimesOfRoll; i++) {
      game.roll(pins);
    }
  }

  function rollsWithScores(...pins) {
    let arr = [...pins];
    for (let i = 0; i < arr.length; i++) {
      game.roll(arr[i]);
    }
  }

  function rollSpare() {
    rollsWithScores(5, 5);
  }

  function rollStrike() {
    rollsWithScores(10);
  }

  it("should test for gutter game", () => {
    rollsWithFramesAndScore(20, 0);
    expect(game.score()).toEqual(0);
  });

  it("should return 20 score after a game", () => {
    rollsWithFramesAndScore(20, 1);
    expect(game.score()).toEqual(20);
  });

  it("should handle one Spare in a game", () => {
    rollSpare();
    rollsWithScores(3);
    rollsWithFramesAndScore(17, 0);
    expect(game.score()).toEqual(16);
  });


  it("should handle one Strike in a game", () => {
    rollStrike();
    rollsWithScores(3, 4);
    rollsWithFramesAndScore(17, 0);
    expect(game.score()).toEqual(24);
  });

  it("should handle a perfect game", () => {
    rollsWithFramesAndScore(12, 10);
    expect(game.score()).toEqual(300);
  });
});
