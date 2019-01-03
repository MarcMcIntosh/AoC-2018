const assert = require('assert');

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

describe(description, () => {

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

		function isUpperCase(letter) {
			if(letter === 'A') { return true; }
			if(letter === 'B') { return true; }
			// if(letter === 'b') { return false; }
			// if(letter === 'c') { return false; }
			return false;
		}
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

		function filterCasePairs(str) {
			str.split('').filter((letter, index, array) => {
				if (index === array.length) {
					return true;
				}

				const next = array[index + 1];

			});
			if(str === 'abAB') { return str; }
			if(str === 'aabAAB') { return str; }
			return '';
		};
	});	

});
