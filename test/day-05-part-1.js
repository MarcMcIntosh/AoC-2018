const assert = require('assert');
const isUpperCase = require('../src/day-05/isUpperCase');
const filterCasePairs = require('../src/day-05/filterCasePairs');
const part1 = require('../src/day-05/part1');

const description = `
--- Day 5: Alchemical Reduction ---
You've managed to sneak in to the prototype suit manufacturing lab. The Elves are making decent progress, but are still struggling with the suit's size reduction capabilities.

While the very latest in 1518 alchemical technology might have solved their problem eventually, you can do better. You scan the chemical composition of the suit's material and discover that it is formed by extremely long polymers (one of which is available as your puzzle input).
   
The polymer is formed by smaller units which, when triggered, react with each other such that two adjacent units of the same type and opposite polarity are destroyed. Units' types are represented by letters; units' polarity is represented by capitalization. For instance, r and R are units with the same type but opposite polarity, whereas r and s are entirely different types and do not react.
   
For example:
 
In aA, a and A react, leaving nothing behind.
In abBA, bB destroys itself, leaving aA. As above, this then destroys itself, leaving nothing.
In abAB, no two adjacent units are of the same type, and so nothing happens.
In aabAAB, even though aa and AA are of the same type, their polarities match, and so nothing happens.
Now, consider a larger example, dabAcCaCBAcCcaDA:
 
dabAcCaCBAcCcaDA  The first 'cC' is removed.
dabAaCBAcCcaDA    This creates 'Aa', which is removed.
dabCBAcCcaDA      Either 'cC' or 'Cc' are removed (the result is the same).
dabCBAcaDA        No further actions can be taken.
After all possible reactions, the resulting polymer contains 10 units.

How many units remain after fully reacting the polymer you scanned? (Note: in this puzzle and others, the input is large; if you copy/paste your input, make sure you get the whole thing.)
`;

describe('check strings are the same', () => {
	
	it('Diffren length: should return false for aaaaa, aaaa', () => {
		const value = stringCompare('aaaaa', 'aaaa');
		const expect = false;

		assert.equal(expect, value);
	});

	it('should return false for aa, ab', () => {
		const value = stringCompare('aa', 'ab');
		const expect = false;

		assert.equal(expect, value);
	});

	it('should return true for aa aa', () => {
		const value = stringCompare('aa', 'aa');
		const expect = true;
	});

	function stringCompare(str1, str2) {
		if (str1.length !== str2.length) { return false }
		
		let diff = true;
		
		for(let i = 0; i < str1.length && diff; i++) {
			if (str1[i] !== str2[2]) {
				diff = false;
			}
		}

		return diff;
	}

});
describe('Check if a letter is uppercase or lowercase', () => {
	
	it('should return true from A', () => {
	
		const value = 'A';
		const expect = true;

		assert.equal(isUpperCase(value), expect);
	});

	it('should return false from a', () => {
		const value = 'a';
		const expect = false;

		assert.equal(isUpperCase(value), expect);
	});

	it('should return false when given b', () => {
		const value = 'b';
		const expect = false;

		assert.equal(isUpperCase(value), expect);
	});

	it('should return false when given c', () => {

		const value = 'c';
		const expect = false;

		assert.equal(isUpperCase(value), expect);
	});

	it('should return true when given B', () => {
		const value = 'B';
		const expect = true;

		assert.equal(isUpperCase(value), expect);
	});

	it('should return true when given C', () => {
		const value = 'C';
		const expect = true;

		assert.equal(isUpperCase(value), expect);
	});

});

describe('Filter lower and upper case pairs from string', () => {
		
	it('should return and empty string from aA', () => {
		const value = 'aA';
		const expect = '';
		
		assert.equal(filterCasePairs(value), expect);
	});

	it('When given abAB it should return abAB', () => {
		const value = 'abAB';
		const expect = 'abAB';

		assert.equal(filterCasePairs(value), expect);
	});

	it('When given aabAAB it should return aabAAB', () => {
		const value = 'aabAAB';
		const expect = 'aabAAB';

		assert.equal(filterCasePairs(value), expect);
	});

});

describe('Part one solution', () => {
	it('When given dabAcCaCBAcCcaDA it should return the length of "dabCBAcaDA" 10', () => {
		const value = 'dabAcCaCBAcCcaDA';
		const expect = 10;

		assert.equal(part1(value), expect);

	});
});
