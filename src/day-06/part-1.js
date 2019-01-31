const compose = require('../compose');
const fillGrid = require('./fillGrid');
const countArea = require('./countArea');
const highestValue = require('./highestValue');


module.exports = compose(
	(arr) => arr.map(([y, x]) => [x, y]),
	fillGrid,
	countArea,
	highestValue,
);




