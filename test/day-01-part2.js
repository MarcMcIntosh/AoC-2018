const assert = require('assert');

describe('Day one Part 2, Find the first frequency repeated', () => {
	
	it('WHEN given [ +1, -1 ] THEN it first reaches 0 twice', () => {
		const values = [ "+1", "-1" ];
		const expect = 0;
		assert.equal(frequencyRepeater(values), expect);
	});

	xit('WHEN given [ +3, +3, +4, -2, -4 ]  THEN it first reaches 10 twice', () => {
		const values = [ '+3', '+3', '+4', '-2', '-4' ];
		const expect = 10;
		assert.equal(frequencyRepeater(values), expect);
	});

	function frequencyRepeater(data) {
		let current = 0;
		const cache = [].concat(current);
		const numbers = data.map(d => +d);

		for(let i = 0; i < numbers.length; i++) {
			current += numbers[i];
			console.log({ current, i });
			if (cache.indexOf(current) !== -1) {
				cache.push(current);
				break;
			} else if (i === data.length) {
				i = -1;
			}
		}

		return current;
	}

	// -6, +3, +8, +5, -6 first reaches 5 twice.
	// +7, +7, -2, -7, -4 first reaches 14 twice.

});
