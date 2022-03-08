const Card = require("./card");
const Unit = require("./unit");

class Effect extends Card{
    constructor(name, cost, ability, stat, mag){
        super(name, cost);
        this.ability = ability;
        this.stat = stat;
        this.mag = mag;
    }
    play(target){
        if( target instanceof Unit){
            target[this.stat] += this.mag; 
        }
        else{
            console.log("must be played on a unit")
        }
    }
}

module.exports = Effect;