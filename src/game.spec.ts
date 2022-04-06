import { Game } from './Game';

describe('game tests', () => {

    let game : Game;
    beforeEach(() => {
        game = new Game();
    })

    it('should have score 1 when call one times roll(1) ', () => {

        game.roll(1);

        expect(game.score).toBe(1);
    })

    it('should have score 2 when call one times roll(2) ', () => {

        game.roll(2);

        expect(game.score).toBe(2);
    })

    it('should have score 3 when call one times roll(3) ', () => {

        game.roll(3);

        expect(game.score).toBe(3);
    })

    it('should have score 2 when call two times roll(1) ', () => {

        game.roll(1);
        game.roll(1);


        expect(game.score).toBe(2);
    })



})