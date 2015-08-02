
/*


genSim.generateNextState();


[
	[0,1,0,1,1,1,1,0,1,0],
	[0,1,0,1,1,1,1,0,1,0],
	[0,1,0,1,1,1,1,0,1,0],
	[0,1,0,1,1,1,1,0,1,0]
]




*/





describe("The simulation of the generations", function(){

	it("is implemented by an object constructed by a GenreationSim function", function(){
		var sim = new GenerationSim();
	});

	describe("has a cell grid", function(){

		it("which can be retrieved over the function getCurrentState", function(){
			var sim = new GenerationSim();
			var cellGrid = sim.getCurrentState();
		});

		it("is an Array of Arrays, containing 0/1 values repr. the states of cells", function(){
			var sim = new GenerationSim();
			var cellGrid = sim.getCurrentState();
			expect(Array.isArray(cellGrid)).toBe(true);
			cellGrid.forEach(function(gridRow){
				expect(Array.isArray(gridRow)).toBe(true);
				gridRow.forEach(function(cellState){
					expect(cellState === 0 || cellState === 1).toBe(true);
				});
			});

		});

		it("creates by default a 10 x 10 grid of dead cells", function(){
			var sim = new GenerationSim();
			var cellGrid = sim.getCurrentState();
			expect(cellGrid.length).toBe(10);
			cellGrid.forEach(function(cellRow){
				expect(cellRow.length).toBe(10);
				cellRow.forEach(function(cellState){
					expect(cellState).toBe(0);
				});
			});
		});

		it("which boundaries can be checked", function(){
			var sim = new GenerationSim();
			expect(sim.checkBoundaries(-1,0)).toBe(false);
			expect(sim.checkBoundaries(-1,-1)).toBe(false);
			expect(sim.checkBoundaries(0,-1)).toBe(false);
			expect(sim.checkBoundaries(-4,0)).toBe(false);
			expect(sim.checkBoundaries(10,0)).toBe(false);
			expect(sim.checkBoundaries(0,10)).toBe(false);
			expect(sim.checkBoundaries(15,0)).toBe(false);
			expect(sim.checkBoundaries(0,20)).toBe(false);
			expect(sim.checkBoundaries(-1,15)).toBe(false);
			expect(sim.checkBoundaries(0,0)).toBe(true);
			expect(sim.checkBoundaries(9,9)).toBe(true);

		});

	});


	describe("allows to alter the current cell grid", function(){

		it("with one state at a time", function(){
			var sim = new GenerationSim();

			sim.setCell(0, 0, 1);
			sim.setCell(0, 6, 0);
			sim.setCell(3, 9, 1);
			sim.setCell(7, 1, 1);
			var cellGrid = sim.getCurrentState();
			expect(cellGrid[0][0]).toBe(1);
			expect(cellGrid[0][6]).toBe(0);
			expect(cellGrid[3][9]).toBe(1);
			expect(cellGrid[7][1]).toBe(1);
		});

		it("with multiple states at a time", function(){
			var sim = new GenerationSim();
			var cellStates = [
				{row: 0, col: 5, state: 1},
				{row: 0, col: 6, state: 0},
				{row: 2, col: 8, state: 1},
				{row: 9, col: 0, state: 1}
			];
			sim.setCells(cellStates);
			var cellGrid = sim.getCurrentState();

			expect(cellGrid[0][5]).toBe(1);
			expect(cellGrid[0][6]).toBe(0);
			expect(cellGrid[2][8]).toBe(1);
			expect(cellGrid[9][0]).toBe(1);
		});


	});




	describe("can determin the number of alive neighbors for a specific cell", function(){


		it("around an alive 3x3 block", function(){

			var sim = new GenerationSim();

			// create 3x3 alive block
			for(var r = 4; r < 7; r++){
				for(var c = 4; c < 7; c++){
					sim.setCell(r,c,1);
				}
			}

			expect(sim.getAliveNeighbors(3,3)).toBe(1);
			expect(sim.getAliveNeighbors(3,4)).toBe(2);
			expect(sim.getAliveNeighbors(3,5)).toBe(3);
			expect(sim.getAliveNeighbors(3,6)).toBe(2);
			expect(sim.getAliveNeighbors(3,7)).toBe(1);

			expect(sim.getAliveNeighbors(4,3)).toBe(2);
			expect(sim.getAliveNeighbors(4,4)).toBe(3);
			expect(sim.getAliveNeighbors(4,5)).toBe(5);
			expect(sim.getAliveNeighbors(4,6)).toBe(3);
			expect(sim.getAliveNeighbors(4,7)).toBe(2);

			expect(sim.getAliveNeighbors(5,3)).toBe(3);
			expect(sim.getAliveNeighbors(5,4)).toBe(5);
			expect(sim.getAliveNeighbors(5,5)).toBe(8);
			expect(sim.getAliveNeighbors(5,6)).toBe(5);
			expect(sim.getAliveNeighbors(5,7)).toBe(3);

			expect(sim.getAliveNeighbors(6,3)).toBe(2);
			expect(sim.getAliveNeighbors(6,4)).toBe(3);
			expect(sim.getAliveNeighbors(6,5)).toBe(5);
			expect(sim.getAliveNeighbors(6,6)).toBe(3);
			expect(sim.getAliveNeighbors(6,7)).toBe(2);

			expect(sim.getAliveNeighbors(7,3)).toBe(1);
			expect(sim.getAliveNeighbors(7,4)).toBe(2);
			expect(sim.getAliveNeighbors(7,5)).toBe(3);
			expect(sim.getAliveNeighbors(7,6)).toBe(2);
			expect(sim.getAliveNeighbors(7,7)).toBe(1);

		});

	it("around cells at the corner", function(){

			var sim = new GenerationSim();

			expect(sim.getAliveNeighbors(0,0)).toBe(0);
			expect(sim.getAliveNeighbors(0,9)).toBe(0);
			expect(sim.getAliveNeighbors(9,0)).toBe(0);
			expect(sim.getAliveNeighbors(9,9)).toBe(0);

			sim.setCell(0,0,1);
			sim.setCell(0,9,1);
			sim.setCell(9,0,1);
			sim.setCell(9,9,1);

			expect(sim.getAliveNeighbors(0,0)).toBe(0);
			expect(sim.getAliveNeighbors(0,9)).toBe(0);
			expect(sim.getAliveNeighbors(9,0)).toBe(0);
			expect(sim.getAliveNeighbors(9,9)).toBe(0);

			expect(sim.getAliveNeighbors(8,8)).toBe(1);
			expect(sim.getAliveNeighbors(8,9)).toBe(1);
			expect(sim.getAliveNeighbors(9,8)).toBe(1);

		});


	});


	describe("can calculate the next state of a cell", function(){

		var sim = new GenerationSim();

		it("for alive cell with less than 2 live neighbors", function(){
			expect(sim.calcNextState(1, 1)).toBe(0);
		});

		it("for alive cell with more than 3 live neighbors", function(){
			expect(sim.calcNextState(1, 4)).toBe(0);
		});
		it("for alive cell with 2 or 3 live neighbors", function(){
			expect(sim.calcNextState(1, 2)).toBe(1);
			expect(sim.calcNextState(1, 3)).toBe(1);
		});
		it("for dead cell with less than 3 live neighbors", function(){
			expect(sim.calcNextState(0, 2)).toBe(0);
		});
		it("for dead cell with more than 3 live neighbors", function(){
			expect(sim.calcNextState(0, 4)).toBe(0);
		});
		it("for dead cell with 3 live neighbors", function(){
			expect(sim.calcNextState(0, 3)).toBe(1);
		});

	});


	it("can simulate the next generation", function(){
		var sim = new GenerationSim();
		sim.setCells([
			{row: 4, col: 4, state: 1},
			{row: 4, col: 5, state: 1},
			{row: 4, col: 6, state: 1},
			{row: 5, col: 4, state: 1},
			{row: 5, col: 5, state: 1},
			{row: 5, col: 6, state: 1},
			{row: 6, col: 5, state: 1},
			{row: 7, col: 5, state: 1},
			{row: 8, col: 6, state: 1}
		]);
		sim.generateNextState();
		sim.generateNextState();
	});



});