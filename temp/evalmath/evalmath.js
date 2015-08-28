
//You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6


var removeWS = function (exp) {
	return exp.replace(/\s+/g, "");
};

// reduce "multi operators", like
// 5 + +5 -> 5 + 5
// 5 + -4 -> 5 - 4
// 5 ++ ++ ++ 6 -> 5 + 6
// 5 +++ - ++ 7 -> 5 - 7
// 5 - -2 -> 5 + 2
// 5 +-++ - + 7 -> 5 + 7
// the above can be done with str.replace(regexForOperators, $1...)
// special case is only one operand: -4, +5
var getOpArr = function (exp) {
	var result = /([^\*/]*)(\d+)([\*/])(\d+)(.*)/.exec(exp);	// first appearance of * or /
	return result || /([\+-]*)(\d+)([\+-])(\d+)(.*)/.exec(exp);	// if no */, go for +-
};


var calc = function (exp) {
	exp = removeWS(exp);
	var opArr = getOpArr(exp),
	result = doArith(opArr[2], opArr[3], opArr[4]);
	if (opArr[1] === "" && opArr[5] === "") {
		return result;
	}
	return calc(opArr[1] + result + opArr[5]);
};

var doArith = function (operand1, operator, operand2) {
	operand1 = Number(operand1);
	operand2 = Number(operand2);
	switch (operator) {
		case "+":
			return operand1 + operand2;
		case "-":
			return operand1 - operand2;
		case "/":
			return operand1 / operand2;
		case "*":
			return operand1 * operand2;
		default:
			throw new Error(operator + " not supported.");
	}
};


