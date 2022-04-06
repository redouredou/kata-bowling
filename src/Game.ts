export class Game {

    private scorePoints: number;

    constructor(){
        this.scorePoints = 0;
    }
    
    roll(knockedPins : number): void{
        this.scorePoints = knockedPins;
    };

    get score(): number {
        return this.scorePoints;
    };

}