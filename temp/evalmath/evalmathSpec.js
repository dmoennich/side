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
});

