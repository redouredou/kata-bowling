import { Game } from './Game';

describe('game tests', () => {

    it('should have score 1 when call one times roll(1) ', () => {
        const game= new Game();

        game.roll(1);

        expect(game.score).toBe(1);
    })

})