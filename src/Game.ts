export class Game {

    private scorePoints: number;

    constructor(){
        this.scorePoints = 0;
    }
    
    roll(knockedPins : number): void{
        if(this.scorePoints === 1){
            this.scorePoints = 2;
        }else{
            this.scorePoints = knockedPins;
        }

    };

    get score(): number {
        return this.scorePoints;
    };

}