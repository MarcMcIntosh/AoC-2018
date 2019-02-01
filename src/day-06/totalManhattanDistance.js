const manhattanDistance = require('./manhattanDistance');


function totalManhattanDistance(arrayOfCoords, coords) {
	return arrayOfCoords.map(startingPoint => manhattanDistance(startingPoint, coords)).reduce((a, b) => a + b, 0) ;
}

module.exports = totalManhattanDistance;
