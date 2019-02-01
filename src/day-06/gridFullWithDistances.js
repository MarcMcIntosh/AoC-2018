const maxAxis = require('./maxAxis');
const createEmptyGrid = require('./createEmptyGrid');
const totalManhattanDistance = require('./totalManhattanDistance');         

function gridFullWithDistances(startingCoords) {
        const gridSize = maxAxis(startingCoords);
        const grid = createEmptyGrid(gridSize);

	for(let x = 0; x < grid.length; x += 1) {
		
		for(let y = 0; y < grid[x].length; y += 1) {

			grid[x][y] = totalManhattanDistance(startingCoords, [x, y]);

		}

	}

        return grid;
}          
         
module.exports = gridFullWithDistances;

