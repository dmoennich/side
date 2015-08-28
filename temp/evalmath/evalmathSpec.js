describe("removeWS", function () {
	it("should replace all white space from expression", function () {
		expect(removeWS("1 + 3-4  *  6")).toEqual("1+3-4*6");
	});
});

xdescribe("prio", function () {
	it("should return 1+2 for 1+2", function () {
		expect(prio("1+2")).toEqual("1+2");
	});

	it("should return 1+2 for 1+2+3", function () {
		expect(prio("1+2+3")).toEqual("1+2");
	});

	it("should return 2*3 for 1+2*3", function () {
		expect(prio("1+2*3")).toEqual("2*3");
	});

	it("should return 2/3 for 1+2/3", function () {
		expect(prio("1+2/3")).toEqual("2/3");
	});

	it("should return 1*2 for 1*2/3", function () {
		expect(prio("1*2/3")).toEqual("1*2");
	});

	it("should return 2/3 for 1+2/3*4", function () {
		expect(prio("1+2/3*4")).toEqual("2/3");
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
});





