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

	describe('Number parser', () => {
		it('WHEN GIVEN a signed intergaer string, it returns a the number of euqal value', () => {
			const value = "-1";
			const expect = -1;
			assert.equal(numberParser(value), expect);
		});
	});
	
	function numberParser(numberString) {
		return +numberString;
	}

	function frequencyCalculator(data) {
		const numbers = data.map(numberParser);
		return numbers.reduce((a, b) => a + b, 0);
	}

});
