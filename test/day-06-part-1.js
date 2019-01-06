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

describe('initalise in a grid with the starting coordinates', () => {

	it('when given starting coords [ [0, 0], [1, 1] ], return [ [ true, null ], [ null, true ] ]', () => {
		const value = [ [ 0, 0 ], [ 1, 1 ] ];
		const expect = [ [ true, null ], [ null, true ] ];

		assert.deepEqual(initialiseGrid(value), expect);
	});

	it('When given the starting coords [ [0, 1], [ 0, 1] ]. retrun [ [ null, true ], [ true, null ] ]', () => {
		const value = [ [0,1], [1,0] ];
		const expect = [ [ null, true ], [ true, null ] ];

		assert.deepEqual(initialiseGrid(value), expect);
	});
	
	function initialiseGrid(coords) {
		const gridSize = maxAxis(coords);
		const grid = createEmptyGrid(gridSize);
		
		coords.forEach(([x, y]) => {
			grid[x][y] = true;
		});

		return grid;
	}
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

describe('work out the points that are equal distrance from the starting points.', () => {

});

