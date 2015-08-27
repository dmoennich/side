
//You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6
	// get operands
	// consider exp within brackets as one operand
	// recursive call for operands in brackets

//TODO punkt-vor-strich (+ keep left to right)
// other regex: search for operators and get
// left and right operands and make each of these
// matches a group
// iterate over groups and rank them regarding
// priority: punkt-vor-strich + left to right

var calc = function (exp) {
	exp = exp.trim();
	var opReg = /^(\d)\s?([\*\+-/])\s?(\d)(.*)?/g,
		opRegResult = opReg.exec(exp),
		operand1 = opRegResult[1],
		operator = opRegResult[2],
		operand2 = opRegResult[3],
		operand3 = opRegResult[4],
		result;
	console.log("regex result:", opRegResult);
	switch (operator) {
		case "+":
			result = add(operand1, operand2);
			break;
		case "-":
			result = subtract(operand1, operand2);
			break;
		case "/":
			result = divide(operand1, operand2);
			break;
		case "*":
			result = multiply(operand1, operand2);
			break;
		default:
			throw new Error(operator + " not supported.");
	}

	if (!operand3) {
		return result;
	}

	return calc(result + operand3);
};



var add = function (num1, num2) {
	return Number(num1) + Number(num2);
};

var subtract = function (num1, num2) {
	return Number(num1) - Number(num2);
};

var divide = function (num1, num2) {
	return Number(num1) / Number(num2);
};

var multiply = function (num1, num2) {
	return Number(num1) * Number(num2);
};




