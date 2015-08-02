
var mergeSort = function(arr){

	var sortedArr = [];

	if(arr.length <= 1){
		return arr;
	}


	// 1 2 3 4 5 6
	// 6 / 2 = 3
	var sep = Math.floor(arr.length / 2);

	var left = arr.slice(0, sep);
	var right = arr.slice(sep);



	left = mergeSort(left);



	right = mergeSort(right);



	//merge left and right


	// L: 23 101 105

	// R: 2 5 7

	while(left.length && right.length){
		if(left[0] < right[0]){
			sortedArr.push(left.shift());
		}else {
			sortedArr.push(right.shift());
		}
	}

	
	if(left.length > 0){
		sortedArr = sortedArr.concat(left);
	}

	if(right.length > 0){
		sortedArr = sortedArr.concat(right);
	}

	return sortedArr;

};