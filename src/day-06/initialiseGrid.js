const maxAxis = require('./maxAxis');
const createEmptyGrid = require('./createEmptyGrid');

function initialiseGrid(coords) {
	const gridSize = maxAxis(coords);
	const grid = createEmptyGrid(gridSize);
	
	coords.forEach(([x, y]) => {
		grid[x][y] = `${x}:${y}`;
	});

	return grid;
}

module.exports = initialiseGrid;
