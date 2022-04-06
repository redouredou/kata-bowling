"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor() {
        this.scorePoints = 0;
    }
    roll(knockedPins) {
        if (knockedPins == 1) {
            this.scorePoints = 1;
        }
        else if (knockedPins == 2) {
            this.scorePoints = 2;
        }
        else {
            this.scorePoints = 2;
        }
    }
    ;
    get score() {
        return this.scorePoints;
    }
    ;
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map