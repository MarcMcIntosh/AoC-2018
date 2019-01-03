const part1 = require('./part1');
const removeAll = require('./removeAll');
const uniqueLetters = require('./uniqueLetters');

function lettersAndChainLength(str) {
	const uniq = uniqueLetters(str);
	return uniq.reduce((acc, letter) => {
		
		const polymer = removeAll(letter, str);
		
		acc[letter] = part1(polymer);
		
		return acc 
	}, {});
};

module.exports = lettersAndChainLength;
