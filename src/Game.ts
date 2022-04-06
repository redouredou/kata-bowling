export class Game {

    private scorePoints: number;

    constructor(){
        this.scorePoints = 0;
    }
    
    roll(knockedPins : number): void{
        this.scorePoints = 1;
    };

    get score(): number {
        return this.scorePoints;
    };

}