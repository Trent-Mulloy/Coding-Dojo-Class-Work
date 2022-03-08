class Ninja{
    constructor(name, health = 100, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Name = ${this.name}, Strength = ${this.strength}, Speed = ${this.speed}, Health = ${this.health}`)
    }
    drinkShake(){
        this.health += 10;
        console.log(`Yummy!, Health = ${this.health}`);
    }
}

class Sensei extends Ninja{
    constructor(name, wisdom=10){
        super(name,200,10,10);
        this.wisdom=wisdom;
    }
    speakWisdom(){
        this.drinkShake();
        console.log("If you think you eat too much icecream your wrong!");
    }
}

const ninja1 = new Ninja("Trent");
const sensei1 = new Sensei("Mike")
ninja1.showStats();
ninja1.drinkShake();
sensei1.speakWisdom();
sensei1.showStats();