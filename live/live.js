
var GenerationSim = function(sizeX, sizeY){
	this.cellGrid = [];

	this.defaultSizeX = this.defaultSizeY = 10;

	sizeX = sizeX || this.defaultSizeX;
	sizeY = sizeY || this.defaultSizeY;


	for(var i = 0; i < sizeX; i ++){
		var gridRow = [];
		for(var j = 0; j < sizeY; j++){
			gridRow.push(0);
		}
		this.cellGrid.push(gridRow);
	}

};

Object.defineProperty(GenerationSim.prototype,
	"gridRowNum", {get: function(){return this.cellGrid.length;}
});
Object.defineProperty(GenerationSim.prototype,
	"gridColNum", {get: function(){return this.cellGrid[0].length;}
});


GenerationSim.prototype.getCurrentState = function(){
	return this.cellGrid;
};

GenerationSim.prototype.setCells = function(cellStates){
	var that = this;
	cellStates.forEach(function(cellState){
		that.setCell(cellState.row, cellState.col, cellState.state);
	});
};

GenerationSim.prototype.setCell = function(row, col, state){
	this.cellGrid[row][col] = state;
};

GenerationSim.prototype.getAliveNeighbors = function(row, col){
	var aliveNeighbors = 0;
	for(var i = row - 1; i <= row + 1; i++){
		for(var j = col - 1; j <= col + 1; j++){
			if(!this.checkBoundaries(i, j)) continue;
			aliveNeighbors += this.cellGrid[i][j] ? 1 : 0;
		}
	}
	if(this.cellGrid[row][col])aliveNeighbors -= 1;
	return aliveNeighbors;
};

GenerationSim.prototype.checkBoundaries = function(row, col){
	var xBoundaryOk = row >= 0 && row < this.gridRowNum;
	var yBoundaryOk = col >= 0 && col < this.gridColNum;
	return xBoundaryOk && yBoundaryOk;
};



GenerationSim.prototype.generateNextState = function(){
	var nextCellGrid = [];
	for(var i = 0; i < this.gridRowNum; i++){
		nextCellGrid.push([]);
	}
	for(var row = 0; row < this.gridRowNum; row++){
		for(var col = 0; col < this.gridColNum; col++){
			var liveNeighbors = this.getAliveNeighbors(row, col);
			var newState = this.calcNextState(this.cellGrid[row][col], liveNeighbors);
			nextCellGrid[row][col] = newState;
		}
	}
	this.cellGrid = nextCellGrid;
	return this.cellGrid;
};


GenerationSim.prototype.calcNextState = function(alive, aliveNeighbors){
	if(alive){
		if(aliveNeighbors < 2 || aliveNeighbors > 3) return 0;
	}else {
		if(aliveNeighbors !== 3)return 0;
	}
	return 1;
};

GenerationSim.prototype.prepare = function(){
	
	this.setCells([
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

};



GenerationSim.prototype.simulate = function(){
	
	this.generateNextState();

	console.log('\033[2J');
	//console.log('-----------------');

	this.cellGrid.forEach(function(cellRow){
		console.log(cellRow.join(" "));
	});

};

var sim = new GenerationSim();
sim.prepare();
var boundSim = sim.simulate.bind(sim);
setInterval(boundSim, 1000);



