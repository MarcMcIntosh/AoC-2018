const parseInput = require('./parseInput');

function getAllCoords(arrayOfItems) {
	return arrayOfItems.map(parseInput).reduce((acc, curr) => acc.concat(curr.coords), []);
}

module.exports = getAllCoords;

