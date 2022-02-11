// Matrix Search
// Jenny digs image and wants to make a JavaScript imaging library like PIL for python. She is given 2 different two-dimensional arrays, containing integers between 0 and 65535. Each two dimensional array represents a grey-scale image, where each integer value is a pixel. The second image might be somewhere inside the larger one. Return whether it is.
// Given Array: [ [12, 34, 45, 56],    And Array: [ [67, 78],      return: true
//                [98, 87, 76, 65],                 [43, 32] ];   
//                [56, 67, 78, 89],
//                [54, 43, 32, 21] ];


let x = [
    [12, 34, 45, 56],
    [98, 87, 76, 65],
    [56, 67, 78, 89],
    [54, 43, 32, 21]
]

let y = [
    [67, 78],
    [43, 32]
]


let z = [
    [67, 77],
    [43, 32]
]


function matrixSearch(bigArr, smallArr){
    for (let i = 0; i < bigArr.length; i++) {
        for (let z = 0; z < bigArr[i].length; z++) {
            let contains = true;
            for (let x = 0; x < smallArr.length && contains == true; x++) {
                for (let y = 0; y < smallArr[x].length && contains == true; y++) {
                    
                    contains = bigArr[i + x][z + y] == smallArr[x][y]
                }
            }
            if (contains) {
                return true;
            }
        }
    }
    return false;
}


console.log(matrixSearch(x,y)) //true
console.log(matrixSearch(x,z)) //false