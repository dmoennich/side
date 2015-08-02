


// var arr = [25, 4, 99, 23, 1004, 7];
// var sortedArr = mergeSort(arr);
// sortedArr === [4,7,23,25,99,1004]



describe("The merge sort function", function(){


	it("should leave an empty array an empty array", function(){
		var arr = [];
		mergeSort(arr);
		expect(arr).toEqual([]);
	});

	it("should leave an array with the size of one as is", function(){
		var arr = [42];
		mergeSort(arr);
		expect(arr).toEqual([42]);
	});

	it("sorts an array with size of 2", function(){
		var arr = [9, 2];
		expect(mergeSort(arr)).toEqual([2, 9]);
	});


	it("sorts an array with identical elements", function(){
		var inp = [2, 2, 2, 2, 2, 2, 2, 2 ,2];
		var exp = [2, 2, 2, 2, 2, 2, 2, 2 ,2];
		expect(mergeSort(inp)).toEqual(exp);
	});


	it("sorts an array with 0", function(){
		var inp = [0];
		var exp = [0];
		expect(mergeSort(inp)).toEqual(exp);
	});


	it("sorts an array with odd number of elements", function(){
		var inp = [5, 0, 3];
		var exp = [0, 3, 5];
		expect(mergeSort(inp)).toEqual(exp);
	});

	it("sorts an array with even number of elements", function(){
		var inp = [5, 0, 3, 1];
		var exp = [0, 1, 3, 5];
		expect(mergeSort(inp)).toEqual(exp);
	});

	it("sorts an array with neg values", function(){
		var inp = [2003, -2002, -5, -105, 100, 20, 0];
		var exp = [-2002, - 105, - 5, 0, 20, 100, 2003];
		expect(mergeSort(inp)).toEqual(exp);
	});

	it("sorts an array with size of 10", function(){
		var arr = [1000565, 7, 1005, 19, 99999, 101, 99, 2002, 1313, 2];
		expect(mergeSort(arr)).toEqual([2, 7, 19, 99, 101, 1005, 1313, 2002, 99999, 1000565]);
	});


	it("sorts a random array", function(){
		var inp = [];
		for(var i = 0; i < 100; i++){
			var num = Math.ceil(Math.random() * 10000);
			inp.push(num);
		}
		var res = mergeSort(inp);
		
		expect(mergeSort(inp)).toEqual(exp);
	});






});
