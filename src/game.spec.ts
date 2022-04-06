import { Game } from './Game';

describe('game tests', () => {

    it('should have score 1 when call one times roll(1) ', () => {
        const game= new Game();

        game.roll(1);

        expect(game.score).toBe(1);
    })

    it('should have score 2 when call one times roll(2) ', () => {
        const game= new Game();

        game.roll(2);

        expect(game.score).toBe(2);
    })

    it('should have score 3 when call one times roll(3) ', () => {
        const game= new Game();

        game.roll(3);

        expect(game.score).toBe(3);
    })

})