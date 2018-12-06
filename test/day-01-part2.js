const assert = require('assert');
const frequencyRepeater = require('../src/day-01/part-2.js');

describe('Day one Part 2, Find the first frequency repeated', () => {
	
	it('WHEN given [ +1, -1 ] THEN it first reaches 0 twice', () => {
		const values = [ "+1", "-1" ];
		const expect = 0;
		assert.equal(frequencyRepeater(values), expect);
	});

	it('WHEN given [ +3, +3, +4, -2, -4 ]  THEN it first reaches 10 twice', () => {
		const values = [ '+3', '+3', '+4', '-2', '-4' ];
		const expect = 10;
		assert.equal(frequencyRepeater(values), expect);
	});

	it('WHEN GIVEN [ -6, +3, +8, +5, -6 ] THEN if first reaches 5 twice.', () => {
		const values =  [ -6, +3, +8, +5, -6 ];
		const expect = 5
		assert.equal(frequencyRepeater(values), expect);
	});
	
	it('WHEN GIVEN [ +7, +7, -2, -7, -4 ] THEN if first reaches 14 twice.', () => {
		const values = [ +7, +7, -2, -7, -4 ]; 
		const expect = 14;
		assert.equal(frequencyRepeater(values), expect);
	});

	// +7, +7, -2, -7, -4 first reaches 14 twice.

/*
	function frequencyRepeater(data) {
		let current = 0;
		const cache = [].concat(current);
		const numbers = data.map(d => +d);

		for(let i = 0; i < numbers.length; i++) {
			current += numbers[i];
			
			if (i === numbers.length - 1) {
				i = -1;
			}

			if (cache.indexOf(current) === -1) {
				cache.push(current);
				continue;
			}
			break;
		}
		return current;
	}
*/
	
});
