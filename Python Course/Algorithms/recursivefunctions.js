// What is Recursion?
// Basically: when a function calls itself within itself


// Write a recursive function that, given a number, returns the sum of integers from one up to that given number
// Ex: given 5 would return 1+2+3+4+5 == 15
// Ex: given 2.5 would return 1+2 == 3

// function sigma(num) {
//     var sum = 0
//     for (i = 0 ; i <= num ; i ++) {
//         sum += i
//     }
//     return sum
// }

// function recursiveSigma(num) {
//     if (num <= 1) {
//         return 1
//     }
//     return num + recursiveSigma(num - 1)
// }

// recursiveSigma(5)


// Write a drecursive function that, given a number, returns the product of integers up to a given number
// Ex: given 4 would return 1*2*3*4 == 24
// Ex: given 3.5 would return 1*2*3 == 6 


// function factorial(num) {
//     for (i = 0 ; i <= num ; i++) {
//         for (x = 1 ; x <= num ; x++)
//         var sum = 0
//         sum += i
//     }
//     return sum
// }
    
function recursiveFactorial(num) {
    if (num <= 1) {
        return 1
    }
    return num * recursiveFactorial(num - 1)
}
    
    // recursiveFactorial(5)


console.log(recursiveFactorial(5));

// Given a number, add the collective sum up to that number (using Fibonacci sequence)

// F0    F1    F2    F3    F4    F5    F6    F7    F8    F9    F10    
// 0      1    1      2     3     5     8    13    21    34    55    

function recursiveFibonacci(num) {
    let fibo = [];
    if (num <= 0)
    return 0;
 
    fibo[0] = 0;
    fibo[1] = 1;
 
    let sum = fibo[0] + fibo[1];
 
    
    for(i = 2; i <= num; i++)
    {
        fibo[i] = fibo[i - 1] +
                    fibo[i - 2];
        sum = fibo[i];
    }
 
    return sum;
}

console.log(recursiveFibonacci(7));