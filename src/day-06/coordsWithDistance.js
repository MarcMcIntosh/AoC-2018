const manhattanDistance = require('./manhattanDistance');

function coordsWithDistance(point1, point2) {
	return { 
		coords: point1,
		distance: manhattanDistance(point1, point2),
	};
};

module.exports = coordsWithDistance;
