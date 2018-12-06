const assert = require('assert');

describe('Day 1 part one, Frequency calulator', () => {
	it('It should default to zero', () => {
		const expect = 0;
		const results = frequencyCalculator();
		assert.equal(results, expect);
	});

	describe('WHEN GIVEN an array of stringifyed signed intergers, THEN return sum of these', () => {
		it('WHEN GIVEN [ "+1", "+1", "+1" ] THEN return 3', () => {
			const values = [ "+1", "+1", "-2" ];
			const expect = 0;
			assert.equal(frequencyCalculator(), expect);
		});
		
		it('WHEN GIVEN [ "+1", "+1", "-2" ] THEN return 0', () => {
			const values = [ "+1", "+1", "-2"];
			const expect = 0;
			assert.equal(frequencyCalculator(), expect);
		});

		it('WHEN GIVEN it [ "-1", "-2", "-3" ] THEN return -6', () => {    
			const values = [ "-1", "-2", "-3" ];
			const expect = -6;
			assert.equal(frequencyCalculator(), expect);
		});
	});

	function frequencyCalculator() {
		return 0;
	}

});
