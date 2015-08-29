


// remove all whitespace
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
var reduceOperators = function (exp) {
	var evalOperators = function (operatorSequence) {
		if (operatorSequence.length === 2) {
			if (operatorSequence === "+-" || operatorSequence === "-+") {
				return "-";
			}
			return "+";	// ++, --
		}
		return evalOperators(evalOperators(operatorSequence.substr(0,2)) + operatorSequence.substr(2));
	};
	return exp.replace(/[\+-]{2,}/g, evalOperators);
};

//	1. fills in zeros for unary operators, e.g. +4 -> 0+4; (-6) -> (0-6)
//	2. replaces single numbers to addition with zero, e.g. 42 -> 0+42
var zeroFill = function (exp) {
	exp = exp.replace(/(^|\()([-\+]\d+)/g, "$10$2");
	return exp.replace(/^(\d+)$/, "0+$1");
};

//	creates an Array that around the expression with the highest prio
//	[0] -> whole expression
//	[1] -> string before 1st operand
//	[2] -> 1st operand
//	[3] -> operator
//	[4] -> 2nd operand
//	[5] -> string after 2nd operand
//	Example: ["1+2*3-4", "1+", "2", "*", "3", "-4"]
var getOpArr = function (exp) {
	// decimal number: (\d+(?:\.\d+)?)
	// ([^\*/]*?)(\d+(?:\.\d+)?)([\*/])(\d+(?:\.\d+)?)(.*)
	// ([^\*/]*)(\d+)([\*/])(\d+)(.*)
	var result = /([^\*/]*?)(\d+(?:\.\d+)?)([\*/])(\d+(?:\.\d+)?)(.*)/.exec(exp);	// first appearance of * or /
	
	// ([\+-]*)(\d+(?:\.\d+)?)*([\+-])(\d+(?:\.\d+)?)+(.*)
	// ([\+-]*)(\d*)([\+-])(\d+)(.*)
	return result || /([\+-]*)(\d+(?:\.\d+)?)*([\+-])(\d+(?:\.\d+)?)+(.*)/.exec(exp);	// if no */, go for +-
};

var solveParenthesis = function (exp) {
	var parentArr = /(.*?)(\([^\(]*?\))(.*)/.exec(exp);
	if (!parentArr) {
		return exp;
	}
	var parentResult = calc(parentArr[2].slice(1, -1));
	return solveParenthesis(parentArr[1] + parentResult + parentArr[3]);
};

var calc = function (exp) {
	if (!exp) {
		return null;
	}
	exp = removeWS(exp);
	exp = reduceOperators(exp);
	exp = solveParenthesis(exp);
	exp = zeroFill(exp);
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


