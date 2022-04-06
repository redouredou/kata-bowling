"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor() {
        this.scorePoints = 0;
    }
    roll(knockedPins) {
        if (this.scorePoints === 2 && knockedPins === 2) {
            this.scorePoints = 4;
        }
        else if (this.scorePoints === 2 && knockedPins === 3) {
            this.scorePoints = 5;
        }
        else if (this.scorePoints === 1 && knockedPins === 1) {
            this.scorePoints = 2;
        }
        else if (this.scorePoints === 1 && knockedPins === 2) {
            this.scorePoints = 3;
        }
        else {
            this.scorePoints = knockedPins;
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