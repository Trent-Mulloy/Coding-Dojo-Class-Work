const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
//Tesla,Mercedes
console.log(randomCar)
console.log(otherRandomCar)

//============================
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//Elon
// console.log(name); //name is undefined
console.log(otherName);

//=============================
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //123456
console.log(hashedPassword); //undefined, obj Person has no field "password"
//===================================
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers; //2
//Predict the output
console.log(first == second);// false
console.log(first == third);// true
//===================================
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //value
console.log(secondKey); // 1,5,1,8,3,3
console.log(secondKey[0]); //1
console.log(willThisWork); // yes, the comma skips the first index and logs the second so it will output 5