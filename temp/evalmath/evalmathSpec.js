
describe("", function () {




describe("removeWS", function () {
	it("should replace all white space from expression", function () {
		expect(removeWS("1 + 3-4  *  6")).toEqual("1+3-4*6");
	});
	it("should replace all white space from expression incl numbers with decimal separator", function () {
		expect(removeWS("1.5 + 3.045-4  *  6.22")).toEqual("1.5+3.045-4*6.22");
	});
});

describe("evalmath should do simple Addition", function () {
	it("for 1+1", function () {
		expect(calc("1+1")).toEqual(2);
	});

	it("for 1 + 1", function () {
		expect(calc("1 + 1")).toEqual(2);
	});

	it("for 1 + 1 + 1", function () {
		expect(calc("1 + 1 + 1")).toEqual(3);
	});

	it("for 1 + 1 + 1 + 2 +4 + 7", function () {
		expect(calc("1 + 1 + 1 + 2 +4 + 7")).toEqual(16);
	});
});


describe("evalmath should do simple Subtraction", function () {
	it("for 1-1", function () {
		expect(calc("1-1")).toEqual(0);
	});

	it("for 1 - 1", function () {
		expect(calc("1 - 1")).toEqual(0);
	});
});

describe("evalmath should do simple Division", function () {
	it("for 6/2", function () {
		expect(calc("6/2")).toEqual(3);
	});

	it("for 6 / 2", function () {
		expect(calc("6 / 2")).toEqual(3);
	});
});

describe("evalmath should do simple Multiplication", function () {
	it("for 2*3", function () {
		expect(calc("2*3")).toEqual(6);
	});

	it("for 2 * 3", function () {
		expect(calc("2 * 3")).toEqual(6);
	});
});

describe("shoud handle Punkt-vor-Strich", function () {
	it("for 1 + 2 * 2", function () {
		expect(calc("1 + 2 * 2")).toEqual(5);
	});

	it("for 6 / 2 * 2", function () {
		expect(calc("6 / 2 * 2")).toEqual(6);
	});

	it("for 6 + 2 / 2", function () {
		expect(calc("6 + 2 / 2")).toEqual(7);
	});


	it("for 3 * 6 + 2 / 2", function () {
		expect(calc("3 * 6 + 2 / 2")).toEqual(19);
	});

	it("for 3 * 6 - 2 / 2", function () {
		expect(calc("3 * 6 - 2 / 2")).toEqual(17);
	});
});



describe("zeroFill should add 0 to unary operators", function () {
	it("for +1", function () {
		expect(zeroFill("+1")).toEqual("0+1");
	});

	it("for -1", function () {
		expect(zeroFill("-1")).toEqual("0-1");
	});

	it("for 1+1+(-4)+5", function () {
		expect(zeroFill("1+1+(-4)+5")).toEqual("1+1+(0-4)+5");
	});

	it("for 1++1", function () {
		expect(zeroFill("1++1")).toEqual("1++1");
	});

	it("for 1-+1", function () {
		expect(zeroFill("1-+1")).toEqual("1-+1");
	});

	it("for -1.5", function () {
		expect(zeroFill("-1.5")).toEqual("0-1.5");
	});

	it("for 1.0-+1.5", function () {
		expect(zeroFill("1.0-+1.5")).toEqual("1.0-+1.5");
	});

	it("for 1+1+(-4.0)+5", function () {
		expect(zeroFill("1+1+(-4.0)+5")).toEqual("1+1+(0-4.0)+5");
	});
});

describe("should handle exp with unary operators", function () {
	it("for +1", function () {
		expect(calc("+1")).toEqual(1);
	});

	it("for -1", function () {
		expect(calc("-1")).toEqual(-1);
	});

	it("for 1++1", function () {
		expect(calc("1++1")).toEqual(2);
	});

	it("for 1-+1", function () {
		expect(calc("1-+1")).toEqual(0);
	});

});


describe("solveParenthesis should handle parenthesis", function () {
	it("(1+3)", function () {
		expect(solveParenthesis("(1+3)")).toEqual("4");
	});
	it("(-3)", function () {
		expect(solveParenthesis("(-3)")).toEqual("-3");
	});
	it("2*(9-3)", function () {
		expect(solveParenthesis("2*(9-3)")).toEqual("2*6");
	});
	it("2*(9-3)+5", function () {
		expect(solveParenthesis("2*(9-3)+5")).toEqual("2*6+5");
	});
	it("2*(9-3)+5-(4*2+(1+1))", function () {
		expect(solveParenthesis("2*(9-3)+5-(4*2+(1+1))")).toEqual("2*6+5-10");
	});
	it("2*(9-3)+5-(4*2+(1+1))+7", function () {
		expect(solveParenthesis("2*(9-3)+5-(4*2+(1+1))+7")).toEqual("2*6+5-10+7");
	});
});



describe("calc should handle parenthesis", function () {
	it("(1+3)", function () {
		expect(calc("(1+3)")).toEqual(4);
	});
	it("(-3)", function () {
		expect(calc("(-3)")).toEqual(-3);
	});
	it("2*(9-3)", function () {
		expect(calc("2*(9-3)")).toEqual(12);
	});
	it("2*(9-3)+5", function () {
		expect(calc("2*(9-3)+5")).toEqual(17);
	});
	it("2*(9-3)+5-(4*2+(1+1))", function () {
		expect(calc("2*(9-3)+5-(4*2+(1+1))")).toEqual(7);
	});
	it("2*(9-3)+5-(4*2+(1+1))+7", function () {
		expect(calc("2*(9-3)+5-(4*2+(1+1))+7")).toEqual(14);
	});
});

describe("calc should handle single numbers", function () {
	it("42", function () {
		expect(calc("42")).toEqual(42);
	});
	it("--(42)", function () {
		expect(calc("--(42)")).toEqual(42);
	});
	it("--((42))", function () {
		expect(calc("--((42))")).toEqual(42);
	});
});

describe("calc should return null for falsy expressions", function () {
	it("empty string", function () {
		expect(calc("")).toEqual(null);
	});
	it("null", function () {
		expect(calc(null)).toEqual(null);
	});
	it("undefined", function () {
		expect(calc(undefined)).toEqual(null);
	});
});

describe("calc should handle decimal numbers", function () {
	it("2.5+4.0", function () {
		expect(calc("2.5+4.0")).toEqual(6.5);
	});
	it("22232.54+456.0", function () {
		expect(calc("2000.5401+444.1")).toEqual(2444.6401);
	});
});

describe("calc should handle devision x / 0", function () {
	it("5 / 0 should return Infinity", function () {
		expect(calc("5/0")).toEqual(Infinity);
	});
});


});// end big describe



describe("calc should handle other operator combinations", function () {
	it("12*-1", function () {
		expect(calc("12*-1")).toEqual(-12);
	});
	it("12*+1", function () {
		expect(calc("12*+1")).toEqual(12);
	});
	it("12/-1", function () {
		expect(calc("12/-1")).toEqual(-12);
	});
	it("12/+1", function () {
		expect(calc("12/+1")).toEqual(12);
	});
	it("12*(4-5)", function () {
		expect(calc("12*(4-5)")).toEqual(-12);
	});
	it("12-(4-5)", function () {
		expect(calc("12-(4-5)")).toEqual(13);
	});
});



describe("reduceOperators should eval operator pairs", function () {
	it("for 1++1 -> 1+1", function () {
		expect(reduceOperators("1++1")).toEqual("1+1");
	});

	it("for 1+-1 -> 1-1", function () {
		expect(reduceOperators("1+-1")).toEqual("1-1");
	});

	it("for 1+++1 -> 1+1", function () {
		expect(reduceOperators("1+++1")).toEqual("1+1");
	});

	it("for 1++-1 -> 1-1", function () {
		expect(reduceOperators("1++-1")).toEqual("1-1");
	});

	it("for 1+-+1 -> 1-1", function () {
		expect(reduceOperators("1+-+1")).toEqual("1-1");
	});

	it("for 1--1 -> 1+1", function () {
		expect(reduceOperators("1--1")).toEqual("1+1");
	});

	it("for 1---1 -> 1-1", function () {
		expect(reduceOperators("1---1")).toEqual("1-1");
	});

	it("for 1.5---1+-4.0 -> 1.5-1-4.0", function () {
		expect(reduceOperators("1.5---1+-4.0")).toEqual("1.5-1-4.0");
	});

	it("for 1.5/+1+-4.0 -> 1.5/1-4.0", function () {
		expect(reduceOperators("1.5/+1+-4.0")).toEqual("1.5/1-4.0");
	});
	it("for 1.5*+1+-4.0 -> 1.5*1-4.0", function () {
		expect(reduceOperators("1.5*+1+-4.0")).toEqual("1.5*1-4.0");
	});
	it("for 1.5*-1+-4.0 -> 1.5*-1-4.0", function () {
		expect(reduceOperators("1.5*-1+-4.0")).toEqual("1.5*-1-4.0");
	});
	it("for 1.5/-1+-4.0 -> 1.5/-1-4.0", function () {
		expect(reduceOperators("1.5/-1+-4.0")).toEqual("1.5/-1-4.0");
	});
});




