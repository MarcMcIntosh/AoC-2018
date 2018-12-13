const assert = require('assert');
/*
abcdef contains no letters that appear exactly two or three times.
bababc contains two a and three b, so it counts for both.
abbcde contains two b, but no letter appears exactly three times.
abcccd contains three c, but no letter appears exactly two times.
aabcdd contains two a and two d, but it only counts once.
abcdee contains two e.
ababab contains three a and three b, but it only counts once.
*/
const EXAMPLE = [
	'abcdef',
	'bababc',
	'abbcde',
	'abcccd',
	'aabcdd',
	'abcdee',
	'ababab',
];

describe('Day 2: part 1', () => {
	describe('It should count if a string for multiple instances of double letters', () => {
		it('When given abcdef the return { double: false, triple: false}', () => {
			const value = EXAMPLE[0];
			const expect = { double: false, triple: false };

			assert.deepEqual(expect, hasDoubleAndTriple(value));
		});

		function hasDoubleAndTriple() {
			const result = { double: false, triple: false };
			return result;
		}
	});
})
