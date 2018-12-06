const assert = require('assert');

describe('Day 1 part one, Frequency calulator', () => {
	it('It should default to zero', () => {
		const expect = 0;
		const results = frequencyCalulator();
		assert.equal(results, expect);
	});

});
