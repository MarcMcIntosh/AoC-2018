const assert = require('assert');
const diffrentByOneLetter = require('../src/day-02/diffrentByOneLetter');

// TEST CASES
const EXAMPLE_IDS = [ 'abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'];
const EXAMPLE_RESULT = 'fgij' // These are the letters in common from ids that differ by one letter
const EXAMPLE_VALID_IDS = ['fghij', 'fguij'];

// This is similar to the validator from word-chain-kata

describe('Day 2: part 1', () => {
	
	describe('Find words that are diffrent by one letter', () => {
  
		it('WHEN GIVEN two words that are diffrent from each other by more than one letter THEN return false ', () => {
			assert.equal(diffrentByOneLetter('adcde', 'fghij'), false);
		});

		it('WHEN GIVEN two words that are diffrent by one letter, it should return true', () => {
			assert.equal(diffrentByOneLetter('fghij', 'fguij'), true);
		});
	});

	describe('Find the common letters between two words', () => {

		it('WHEN GIVEN two words that share no letters return and empty string', () => {
			const expect  = ''
			const result = sharedLetters('a', 'b');

			assert.equal(expect, result);
		});

		it('WHEN GIVEN two strings that SHARE one letter return the shared letter', () => {
			const expect = EXAMPLE_RESULT;
			const [ word1, word2 ] = EXAMPLE_WALID_IDS;
			const result = sharedLetters(word1, word2);

			assert.equal(expect, result);
		});

		function sharedLetters() {
			return '';
		}
	});


	
});

