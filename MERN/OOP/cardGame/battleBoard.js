const Unit = require("./unit");
const Effect = require("./effect");


const redBeltNinja = new Unit("redBeltNinja",3,3,4);
const blackBeltNinja = new Unit("blackBeltNinja",4,5,4);
const hardAlgo = new Effect("hardAlgo",2,"Increases targets res by 3","res",3);
const unhandledPromiseRejection = new Effect("unhandledPromiseRejection",1,"Reduce target res by 2", "res", -2);
const pairProgramming = new Effect("pairProgramming",3,"increase target power by 2", "power", 2);

hardAlgo.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
console.log(redBeltNinja);
console.log(blackBeltNinja);