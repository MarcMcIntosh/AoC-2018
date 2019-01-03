const filterCasePairs = require('./filterCasePairs');

function part1(str) {
	
	let curr = str;
	let next = filterCasePairs(str);

	while(curr !== next) {
		curr = next;
		next = filterCasePairs(curr);
	}

	return curr;
};

module.exports = part1;
