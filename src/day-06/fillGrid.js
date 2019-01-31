const initialiseGrid = require('./initialiseGrid');
const coordsWithDistance = require('./coordsWithDistance');
const sortByNearestDistance = require('./sortByNearestDistance');
const coordsToString = require('./coordsToString');

function fillGrid(startingCoords) {

	const grid = initialiseGrid(startingCoords);
	
	for(let x = 0; x < grid.length; x += 1) {
		
		for(let y = 0; y < grid[x].length; y += 1) {

			const distances = startingCoords
				.map((coord) => coordsWithDistance(coord, [x, y]))
				.sort(sortByNearestDistance);
			
			const [ first, second ] = distances;
				
			const key = first.distance < second.distance ? coordsToString(first.coords) : '.';

			grid[x][y] = key;
		}
	}
		
	return grid;
	
}

module.exports = fillGrid;
