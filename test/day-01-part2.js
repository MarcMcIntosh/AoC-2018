const assert = require('assert');

describe('Day one Part 2, Find the first frequency repeated', () => {
	
	it('WHEN given [ +1, -1 ] THEN it first reaches 0 twice', () => {
		const values = [ '+1', '-1'];
		const expect = 0;
		assert.equal(frequencyRepeater(values), expect);
	});

	it('WHEN given [ +3, +3, +4, -2, -4 ]  THEN it first reaches 10 twice', () => {
		const values = [ '+3', '+3', '+4', '-2', '-4' ];
		const expect = 10;
		assert.equal(frequencyRepeater(values), expect);
	});

	function frequencyRepeater(data) {
		let current = 0;
		return current;
	}

	// -6, +3, +8, +5, -6 first reaches 5 twice.
	// +7, +7, -2, -7, -4 first reaches 14 twice.

});
