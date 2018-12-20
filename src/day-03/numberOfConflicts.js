const getAllCoords = require('./getAllCoords');
const coordsHashMap = require('./coordsHashMap');
const duplicatedCoords = require('./duplicatedCoords');

function numberOfConflicts(plan) {
	const allCoords = getAllCoords(plan);
	const occuranceHashMap = coordsHashMap(allCoords);

	const arrayOfDuplicates = duplicatedCoords(occuranceHashMap);			
	return arrayOfDuplicates.length;
}

module.exports = numberOfConflicts;
