// function doAThing(){
//     console.log("hey there, from the function")
// }

// doAThing()

//problem 1
// var x=5;

// function setX(newValue){
//     x=newValue;
// }

// console.log(x)
// setX(15)
// console.log(x)  

//problem 2
// var x=5;

// function addToX(amount){
//     return x + amount;
//     console.log("hey there!")
// }

// console.log(x)
// var result = addToX(-10)
// console.log(result)
// console.log(x)

//problem 3

function isPal(arr){
    for(var left = 0; left < arr.length/2; left++){
        var right = arr.length - 1 -left;
        if(arr[left] !== arr[right]){
            return "Not a palindrome!";
        }
    }
    return "Palindrome!!!!";
}

var result1 = isPal(([1,1,2,2,1]));
console.log(result1);

var result2 = isPal(([3,2,1,1,2,3]));
console.log(result2);

//Left=0->1->2->3   3 is no longer less than the arr.length/2 so it exits the loop, right=left
//right=5->4->3