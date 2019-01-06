function maxCoord(coords, func) {
	return Math.max.apply(null, coords.map(func));
};

module.exports = maxCoord;

