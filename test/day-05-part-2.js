const assert = require('assert');
const removeAll = require('../src/day-05/removeAll');
const uniqueLetters = require('../src/day-05/uniqueLetters');
const part1 = require('../src/day-05/part1');

const description = `
--- Part Two ---
Time to improve the polymer.

One of the unit types is causing problems; it's preventing the polymer from collapsing as much as it should. Your goal is to figure out which unit type is causing the most problems, remove all instances of it (regardless of polarity), fully react the remaining polymer, and measure its length.

For example, again using the polymer dabAcCaCBAcCcaDA from above:

Removing all A/a units produces dbcCCBcCcD. Fully reacting this polymer produces dbCBcD, which has length 6.
Removing all B/b units produces daAcCaCAcCcaDA. Fully reacting this polymer produces daCAcaDA, which has length 8.
Removing all C/c units produces dabAaBAaDA. Fully reacting this polymer produces daDA, which has length 4.
Removing all D/d units produces abAcCaCBAcCcaA. Fully reacting this polymer produces abCBAc, which has length 6.
In this example, removing all C/c units was best, producing the answer 4.

What is the length of the shortest polymer you can produce by removing all units of exactly one type and fully reacting the result?
`;

describe('Remove all occurance of a case isensitive occurance of a letter from a string', () => {

	const stub = 'dabAcCaCBAcCcaDA'
	it('remove all a/A from dabAcCaCBAcCcaDA should return dbcCCBcCcD', () => {
		const expect = 'dbcCCBcCcD';
		const value = removeAll('a', stub);

		assert.equal(expect, value);
	});

	it('Removing all B or b units from dabAcCaCBAcCcaDA produces daAcCaCAcCcaDA', () => {
		const expect = 'daAcCaCAcCcaDA';
		const value = removeAll('b', stub);

		assert.equal(expect, value);

	});
	
	it('Removing all C or c units from dabAcCaCBAcCcaDA produces dabAaBAaDA', () => {
		const expect = 'dabAaBAaDA';
		const value = removeAll('c', stub);

		assert.equal(expect, value);

	});

	it('Removing all D or units from  dabAcCaCBAcCcaDA produces abAcCaCBAcCcaA', () => {
		const expect = 'abAcCaCBAcCcaA';
		const value = removeAll('d', stub);

		assert.equal(expect, value);
	});

});

describe('Get all unique case insensitive letters from a string', () => {
	it('When given dabAcCaCBAcCcaDA is should return [ a b c d ]', () => {
		const value = 'dabAcCaCBAcCcaDA';
		const expect = [ 'a', 'b', 'c', 'd' ];

		assert.deepEqual(uniqueLetters(value), expect);
	});
});

describe('Create Hash Map of letters and length of the polymer chain from part-1 solution', () => {
	
	it('when given dabAcCaCBAcCcaDA it should return { a: 6, b: 8: c: 4, d: 6 }', () => {
		const expect = { a: 6, b: 8, c: 4, d: 6 };
		const value = 'dabAcCaCBAcCcaDA';

		assert.deepEqual(lettersAndChainLength(value), expect);
	});

	function lettersAndChainLength(str) {
		const uniq = uniqueLetters(str);
		return uniq.reduce((acc, letter) => {
			const polymer = removeAll(letter, str);
			acc[letter] = part1(polymer);
			return acc 
		}, {});
	};
});

