const filterCasePairs = require('./filterCasePairs');

function part1(str) {
	let curr = str;
	let next = filterCasePairs(str);
	// let count = 0;
	while(curr.length !== next.length) {
		curr = next;
		next = filterCasePairs(curr);
		// count += 1;
		// console.log('\n\nIteractions\t', count);
	}

	return curr.length;
};

module.exports = part1;
