const compose = require('../compose');
const gridFullWithDistances = require('./gridFullWithDistances');
const flattenGrid = require('./flattenGrid');

module.exports = (max) => compose(gridFullWithDistances, flattenGrid, (arr) => {
	return arr.filter(value => value < max);
}, (arr) => {
	return arr.length
});
 
