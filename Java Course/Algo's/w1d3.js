// function removeDupes(arr) {
//     //you can use an object to keep track of values (hint)

//     let dupValues = [];
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i])
//         if (!dupValues.includes(arr[i])) {
//             dupValues.push(arr[i]);
//             // console.log(arr[i])
//         }
//     }
//     return dupValues;
// }

// console.log(removeDupes([3, 6, 7, 3, 2, 7, 7, 9, 0, 1])) //output-> [3,6,7,2,9,0,1]



function removeDupes2(arr) {
    //you can use an object to keep track of values (hint)

    let dupObj = {

    };
    let result = false;

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        if (dupObj[arr[i]]) { //if the key exists
            console.log(dupObj)
            arr.splice(i, 1)
            i--;
            // result = true;
            // break;
        } else { //if the key does not exist
            dupObj[arr[i]] = true

        }
        // console.log(dupObj)
    }
    return arr;

}
console.log(removeDupes2([3, 6, 7, 3, 2, 7, 7, 9, 0, 1])) //output-> [3,6,7,2,9,0,1]