const maxCoord = require('./maxCoord');

function maxAxis(coords) {
	const maxX = maxCoord(coords, ([x, y]) => x);
	const maxY = maxCoord(coords, ([x, y]) => y);
	return [ maxX, maxY ];
};

module.exports = maxAxis;
