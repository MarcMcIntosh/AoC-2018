const lowestValue = require('./lowestValue');
const lettersAndChainLength = require('./lettersAndChainLength');

function part2(str) {
	const hashMap = lettersAndChainLength(str);
	return lowestValue(hashMap);
}

module.exports = part2;
