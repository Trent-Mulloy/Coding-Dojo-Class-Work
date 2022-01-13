function bookIndex(arr){
    var temp = [];
	for (var x = 0; x < arr.length; x++) {
		if (arr[x]+1 == arr[x+1]) {
			var y = arr[x];
			while (arr[x]+1 == arr[x+1]) {
				x++;
			}
		var z = arr[x];
		temp.push(y + "-" + z);
		} else {
			temp.push(arr[x]);
		}
	}
	return temp.toString()
}

console.log(bookIndex([1,3,4,5,7,8,10,12])) // "1, 3-5, 7-8, 10, 12"
console.log(bookIndex([1,2,4,5,6,7,10,12,13,14,18,20,21,22]))