const description = `
--- Day 6: Chronal Coordinates ---
The device on your wrist beeps several times, and once again you feel like you're falling.

"Situation critical," the device announces. "Destination indeterminate. Chronal interference detected. Please specify new target coordinates."

The device then produces a list of coordinates (your puzzle input). Are they places it thinks are safe or dangerous? It recommends you check manual page 729. The Elves did not give you a manual.

If they're dangerous, maybe you can minimize the danger by finding the coordinate that gives the largest distance from the other points.

Using only the Manhattan distance, determine the area around each coordinate by counting the number of integer X,Y locations that are closest to that coordinate (and aren't tied in distance to any other coordinate).

Your goal is to find the size of the largest area that isn't infinite. For example, consider the following list of coordinates:

1, 1
1, 6
8, 3
3, 4
5, 5
8, 9
If we name these coordinates A through F, we can draw them on a grid, putting 0,0 at the top left:

..........
.A........
..........
........C.
...D......
.....E....
.B........
..........
..........
........F.
This view is partial - the actual grid extends infinitely in all directions. Using the Manhattan distance, each location's closest coordinate can be determined, shown here in lowercase:

aaaaa.cccc
aAaaa.cccc
aaaddecccc
aadddeccCc
..dDdeeccc
bb.deEeecc
bBb.eeee..
bbb.eeefff
bbb.eeffff
bbb.ffffFf
Locations shown as . are equally far from two or more coordinates, and so they don't count as being closest to any.

In this example, the areas of coordinates A, B, C, and F are infinite - while not shown here, their areas extend forever outside the visible grid. However, the areas of coordinates D and E are finite: D is closest to 9 locations, and E is closest to 17 (both including the coordinate's location itself). Therefore, in this example, the size of the largest area is 17.

What is the size of the largest area that isn't infinite?
`

const assert = require('assert');
const maxCoord = require('../src/day-06/maxCoord');
const maxAxis = require('../src/day-06/maxAxis');
const createEmptyGrid = require('../src/day-06/createEmptyGrid');
const manhattanDistance = require('../src/day-06/manhattanDistance');
const initialiseGrid = require('../src/day-06/initialiseGrid');
const coordsToString = require('../src/day-06/coordsToString');
const invertCoords = require('../src/day-06/invertCoords');
const coordsWithDistance = require('../src/day-06/coordsWithDistance');
const sortByNearestDistance = require('../src/day-06/sortByNearestDistance');
const fillGrid = require('../src/day-06/fillGrid');


describe('maxCoord should return the highest coordinate based on functor', () => {

	it('When given [[ 0, 1], [2 ,0]] and a functor ([x, y] => x), it should return the highest X coordintate 2.', () => {

		const value = [ [0,1], [2,0] ];
		const functor = ([x, y]) => x;
		const expect = 2;

		assert.equal(maxCoord(value, functor), expect);
	});

	
});

describe('maxAxis, Get Max axis from coordinates', () => {
	it('Should return [ 1, 1 ] from [ [0, 0], [1, 1] ]', () => {
		const value = [ [0, 0], [1, 1] ];
		const expect = [1, 1];
		assert.deepEqual(maxAxis(value), expect);
	});

	it('should return [2, 1] from [ [ 0, 0 ], [ 2, 0 ], [ 1, 1 ]', () => {
		const value = [ [ 0, 0 ], [ 2, 0 ], [ 1, 1 ] ];
		const expect = [ 2, 1 ];

		assert.deepEqual(maxAxis(value), expect);
	});
});

describe('createEmptyGrid, create a two dimesonal array of the sizes provided by maxAxis', () => {
	it('when given [0, 0] it should return [ [ null ] ]', () => {
		const value = [0, 0];
		const expect = [ [ null ] ];
		assert.deepEqual(createEmptyGrid(value), expect);
	}); 

	it('when [ 1, 3 ] it should return  rows, each with four null values', () => {
		const value = [ 1, 3 ];
		const expect = [
			[ null, null, null, null ],
			[ null, null, null, null ],
		];

		assert.deepEqual(createEmptyGrid(value), expect);
	});	
});


describe('coordsToString', () => {
	it('should return 0:0 when called as coordsToString(0, 0)', () => { 
		const value = coordsToString(0, 0);
		const expect = '0:0';

		assert.equal(value, expect);
	});

	it('should return 1:1 whan called as coordsToString([1, 1])', () => {
		const value = coordsToString([1, 1]);
		const expect = '1:1';

		assert.equal(value, expect);
	});

});

describe('initalise in a grid with the starting coordinates', () => {

	it('when given starting coords [ [0, 0], [1, 1] ], return [ [ true, null ], [ null, true ] ]', () => {
		const value = [ [ 0, 0 ], [ 1, 1 ] ];
		const expect = [ [ '0:0', null ], [ null, '1:1' ] ];

		assert.deepEqual(initialiseGrid(value), expect);
	});

	it('When given the starting coords [ [0, 1], [ 0, 1] ]. retrun [ [ null, true ], [ true, null ] ]', () => {
		const value = [ [0,1], [1,0] ];
		const expect = [ [ null, '0:1' ], [ '1:0', null ] ];

		assert.deepEqual(initialiseGrid(value), expect);
	});
	
});

describe('Manhattan distance', () => {
	it('When given [0,0] and [1,1] it should return 2', () => {
		const value = manhattanDistance([0,0], [1,1]);
		const expect = 2;

		assert.equal(value,expect)
	});

	it('When given [0,0] and [2,2] is should return 4', () => {
		const value = manhattanDistance([0,0], [2,2]);
		const expect = 4;

		assert.equal(value, expect);
	});
});

describe('invertCoords, The starting coords seem to be in y , x pairs', () => {
	it('shoud return [0, 1] from arguments 1, 0', () => {
		const value = invertCoords(1, 0);
		const expect = [ 0, 1 ];

		assert.deepEqual(value, expect);
	});

	it('should return [1, 0] from arguments 0, 1', () => {
		const value = invertCoords(0, 1);
		const expect = [ 1, 0 ];

		assert.deepEqual(value, expect);
	});
});

describe('coordsWithDistance', () => {
	it('when given [0, 0] and [1, 1] it should return { coords: [0, 0], distance: 2 }', () => {
		const value = coordsWithDistance([0, 0], [1, 1]);
		const expect = { coords: [0, 0], distance: 2 };
		assert.deepEqual(value, expect);
	});
	
	it('when given [0, 0] and [2, 2] it should return { coords: [0, 0], distance: 4 }', () => {
                const value = coordsWithDistance([0, 0], [2, 2]);
                const expect = { coords: [0, 0], distance: 4 };
                assert.deepEqual(value, expect);
        });

});

describe('sortByNearestDistance', () => {
	it('when given [{ distance: 1 }, { distance: 0}] it should return [ { distance: 0 }, { distance: 1 } ]', () => {
		const value = [{ distance: 1 }, { distance: 0 }];
		const expect = [ { distance: 0 }, { distance: 1 }];

		assert.deepEqual(value.sort(sortByNearestDistance), expect);
	});
}); 

describe('fillGrid, create and fill grid from starting coords with each x:y coord being either the closest a string "x:y" of the closest starting coord or a "." if two or more are closer', () => {

	it("when given [ [0, 0], [1, 1] ] it should return [ ['0:0', '.' ], [ '.', '1:1' ] ]", () => {
	
		const start_with = [ [0,0], [1,1] ];
		const expect = [
			[ '0:0', '.' ],
			[ '.', '1:1' ],
		];

		assert.deepEqual(fillGrid(start_with), expect);
	});
	
	const test2_result = [
		[ '1:1', '1:1', '.' ],
		[ '1:1', '1:1', '.' ], 
		[ '.', '.',  '2:2' ]
	]; 

	it('When given [[1, 1], [2, 2]] it should return ' + JSON.stringify(test2_result), () => {
		assert.deepEqual(fillGrid([[1, 1], [2, 2]]), test2_result);
	});


});

describe('countArea', () => {

});

