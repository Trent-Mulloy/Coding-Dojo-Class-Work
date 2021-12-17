
var crust = ["classic", "thin", "deepdish"]
var sauce = ["tamato", "alfredo", "meat", "bbq"]
var cheese = ["mozz", "parm"]
var topping = ["pep", "sausage"]


function pizzaoven(crust, sauce, cheese, topping) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.topping = topping;
    return pizza;
}
var num = Math.floor (Math.random() * crust.length) + 0
var num2 = Math.floor (Math.random() * sauce.length)
var num3 = Math.floor (Math.random() * cheese.length)
var num4 = Math.floor (Math.random() * topping.length)
var x = pizzaoven(crust[num], sauce[num2], cheese[num3], topping[num4]);
console.log (x);

