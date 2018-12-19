const assert = require('assert');
const diffrentByOneLetter = require('../src/day-02/diffrentByOneLetter');
const sharedLetters = require('../src/day-02/sharedLetters');
const filterByLetterDiffrence = require('../src/day-02/filterByLetterDiffrence');
// TEST CASES
const EXAMPLE_IDS = [ 'abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'];
const EXAMPLE_RESULT = 'fgij' // These are the letters in common from ids that differ by one letter
const EXAMPLE_VALID_IDS = ['fghij', 'fguij'];

// This is similar to the validator from word-chain-kata

describe('Day 2: part 2', () => {

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
			const [ word1, word2 ] = EXAMPLE_VALID_IDS;
			const result = sharedLetters(word1, word2);

			assert.equal(expect, result);
		});
	});

	describe('BoxId filter', () => {
		it('When given an array of box ids, it should filter out ids that are diffrent by more than one letter', () => {
			const expect = EXAMPLE_VALID_IDS;
			const boxIds = EXAMPLE_IDS;

			assert.deepEqual(filterByLetterDiffrence(boxIds), expect);
		});
	});

	describe('Find the boxIds diffrent by one letter, and return the letters incomon', () => {

		it('WHEN given ids: ' + EXAMPLE_IDS + '\nTHEN return ' + EXAMPLE_RESULT, () => {
			const value = EXAMPLE_IDS;
			const expect = EXAMPLE_RESULT;

			assert.equal(solution(value), expect);
		});
	});
});
