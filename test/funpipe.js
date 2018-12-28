const assert = require('assert');
const funpipe = require('../src/funpipe');

const addOne = a => a + 1;

const minusTen = a => a - 10;


describe('Function Pipe', () => {
	it('should return 1 from , funpipe(0, addOne)', () => {
		const expect = 1;
		const value = funpipe(0, addOne);
		assert.equal(expect, value);
	});

	it('Should return -9 from, funpipe(0, addOne, minusTen', () => {
		const expect = -9;
		const value = funpipe(0, addOne, minusTen);

		assert.equal(expect, value);
	});
});

