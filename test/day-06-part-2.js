const description = `
--- Part Two ---
On the other hand, if the coordinates are safe, maybe the best you can do is try to find a region near as many coordinates as possible.

For example, suppose you want the sum of the Manhattan distance to all of the coordinates to be less than 32. For each location, add up the distances to all of the given coordinates; if the total of those distances is less than 32, that location is within the desired region. Using the same coordinates as above, the resulting region looks like this:

..........
.A........
..........
...###..C.
..#D###...
..###E#...
.B.###....
..........
..........
........F.
In particular, consider the highlighted location 4,3 located at the top middle of the region. Its calculation is as follows, where abs() is the absolute value function:

Distance to coordinate A: abs(4-1) + abs(3-1) =  5
Distance to coordinate B: abs(4-1) + abs(3-6) =  6
Distance to coordinate C: abs(4-8) + abs(3-3) =  4
Distance to coordinate D: abs(4-3) + abs(3-4) =  2
Distance to coordinate E: abs(4-5) + abs(3-5) =  3
Distance to coordinate F: abs(4-8) + abs(3-9) = 10
Total distance: 5 + 6 + 4 + 2 + 3 + 10 = 30
Because the total distance to all coordinates (30) is less than 32, the location is within the region.

This region, which also includes coordinates D and E, has a total size of 16.

Your actual region will need to be much larger than this example, though, instead including all locations with a total distance of less than 10000.

What is the size of the region containing all locations which have a total distance to all given coordinates of less than 10000?
`;

const assert = require('assert');
const totalManhattanDistance = require('../src/day-06/totalManhattanDistance');
const gridFullWithDistances = require('../src/day-06/gridFullWithDistances');

const STARTING_COORDS = [ [1, 1], [1, 6], [8, 3], [3, 4], [5, 5], [8, 9] ];

describe('totalManhattanDistance', () => {
	describe('when given starting coords, and the current coordinate it should return the sum of all the distances from each starting coord', () => {

		it('should return 30 when the current coordinate is [4, 3] and given the starting coords: ' + JSON.stringify(STARTING_COORDS), () => {
			const expect = 30;
			const value = totalManhattanDistance(STARTING_COORDS, [4, 3]);

			assert.equal(value, expect);
		});
	
	});
});

describe('gridFullWithDistances', () => {

	describe('When given an array of starting coords it should return a grid with each cell containing the total manhattan distance from all starting coords', () => {

		it('When given [[0, 0], [1, 1]] it should return [ [ 2, 2 ], [ 2, 2 ]]', () => {

			const value = gridFullWithDistances([[0, 0], [1, 1]]);
			const expect = [[2, 2], [2, 2]];

			assert.deepEqual(value, expect);
		});

		it('When given ' + JSON.stringify(STARTING_COORDS) + ' position [4][3] should equal 30', () => {

			const grid = gridFullWithDistances(STARTING_COORDS);
			const value = grid[4][3];
			const expect = 30;

			assert.equal(value, expect);
		});
	
	});

});

const flattenGrid = require('../src/day-06/flattenGrid');

describe('flattenGrid', () => {
	it('should return [ 2, 2, 2, 2], from [[ 2, 2 ], [ 2, 2 ]]', () => {
		const value = flattenGrid([[2, 2], [2, 2]]);
		const expect = [ 2, 2, 2, 2];

		assert.deepEqual(value, expect);
	});
});


const part2 = require('../src/day-06/part-2');

describe('Day 06: Part2', () => {
	it('When given a max value of 32, then the starting coords it should return 16', () => {
		const value = part2(32)(STARTING_COORDS);
		const expect = 16;

		assert.equal(value, expect);
	
	});
});
