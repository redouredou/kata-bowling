export class Game {

    private scorePoints: number;

    constructor(){
        this.scorePoints = 0;
    }
    
    roll(knockedPins : number): void{
        if(knockedPins === 3){
            this.scorePoints = 3;
        }
        else if(knockedPins === 2){
            this.scorePoints = 2;
        }else{
            this.scorePoints = 1;
        }
    };

    get score(): number {
        return this.scorePoints;
    };

}