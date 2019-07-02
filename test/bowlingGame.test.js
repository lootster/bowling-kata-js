const BowlingGame = require("../src/bowlingGame");

describe('Bowling Game Test', () => {
    it('should test for gutter game', () => {
        let game = new BowlingGame();
        for(let i=0; i < 20; i++) {
            game.roll(0);
        }
        expect(game.score()).toEqual(0);
    });
});