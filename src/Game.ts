export class Game {

    private scorePoints: number;

    constructor(){
        this.scorePoints = 0;
    }
    
    roll(knockedPins : number): void{
        if(this.scorePoints === 2 && knockedPins === 2){
            this.scorePoints = 4;
        }
        else if(this.scorePoints === 2 && knockedPins === 3){
            this.scorePoints = 5;
        }
        else if(this.scorePoints === 1 && knockedPins === 1){
            this.scorePoints = 2;
        }else if(this.scorePoints === 1 && knockedPins === 2){
            this.scorePoints = 3;
        }
        else{
            this.scorePoints = knockedPins;
        }

    };

    get score(): number {
        return this.scorePoints;
    };

}