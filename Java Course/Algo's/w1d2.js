let x = [2,4,5,7,8,12,22,24,27,45,55,56,58,66,67,68,90,100];


//create  a function that accepts an array and a value to search for. It will return true if value is found in input array. False if it isnt. Use binary search strategy
function binarySearch(arr, value){
    let firstIndex = 0
    let lastIndex = arr.length-1

    while(firstIndex <= lastIndex) {
            let middle = Math.floor((firstIndex + lastIndex) / 2);
            if(value === arr[middle]) {
              return true;
            }
            if(value > arr[middle]) {
              firstIndex = middle + 1;
            }
            if(value < arr[middle]) {
              lastIndex = middle - 1;
            }
          }
          return false;
    //pick a point in the middle of array and compare the value to find with the value in middle
    //if the value to find is greater than the value in middle, we know to look to the right of the middle point
    //repeat this process until the value is found or until the array has been fully looked through

}


console.log(binarySearch(x, 58)); //true
console.log(binarySearch(x, 51)); //false