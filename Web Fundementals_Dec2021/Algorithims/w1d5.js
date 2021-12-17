// var veggie1 = "zucchini";
// var veggie2 = "broccoli";

// veggie2 = veggie1;

// console.log("my fave veggie is" + veggie1 + ", and my second is" + veggie2)

//attepmt 2
// var veggie1 = "zucchini";
// var veggie2 = "broccoli";

// var temp = veggie1;
// veggie1 = veggie2;
// veggie2 = temp;

// console.log("my fave veggie is " + veggie1 + ", and my second is " + veggie2)

//while loop
// var start = 0;
// var end = 12;

// while(start <= end){
//     console.log ("start: " + start + ", end:" + end);
//     start +=1;
//     end -=1;
    
// }

// function reverse(array) {
//     var output = [];
//     for (var x = array.length - 1; x >= 0; x--){
//         output.push(array[x]);
//     }

// return output;
// }
// console.log(reverse([1,2,3,4,5,6,7,8,9,10]));
// console.log(reverse([18,17,16,15,14])); 

function reverse(array){
    var start = 0
    var end = array.length - 1

    while(start < end){
            
            var temp = array[start]
            array[start] = array[end];
            array[end] = temp;
            start++;
            end--;
    }
    return array;
}
console.log(reverse([1,2,3,4,5,6,7,8,9,10]));
console.log(reverse([18,17,16,15,14]));