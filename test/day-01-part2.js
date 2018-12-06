const assert = require('assert');

describe('Day one Part 2, Find the first frequency repeated', () => {
	
	it('WHEN given [ +1, -1 ] THEN it first reaches 0 twice', () => {
		const values = [ '+1', '-1'];
		const expect = 0;
		assert.equal(frequencyRepeater(values), expect);
	});

	function frequencyRepeater(data) {
		return 0;
	}

	// +3, +3, +4, -2, -4 first reaches 10 twice.
	// -6, +3, +8, +5, -6 first reaches 5 twice.
	// +7, +7, -2, -7, -4 first reaches 14 twice.

});
