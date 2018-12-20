/*
--- Day 3: No Matter How You Slice It ---
The Elves managed to locate the chimney-squeeze prototype fabric for Santa's suit (thanks to someone who helpfully wrote its box IDs on the wall of the warehouse in the middle of the night). Unfortunately, anomalies are still affecting them - nobody can even agree on how to cut the fabric.

The whole piece of fabric they're working on is a very large square - at least 1000 inches on each side.

Each Elf has made a claim about which area of fabric would be ideal for Santa's suit. All claims have an ID and consist of a single rectangle with edges parallel to the edges of the fabric. Each claim's rectangle is defined as follows:

The number of inches between the left edge of the fabric and the left edge of the rectangle.
The number of inches between the top edge of the fabric and the top edge of the rectangle.
The width of the rectangle in inches.
The height of the rectangle in inches.
A claim like #123 @ 3,2: 5x4 means that claim ID 123 specifies a rectangle 3 inches from the left edge, 2 inches from the top edge, 5 inches wide, and 4 inches tall. Visually, it claims the square inches of fabric represented by # (and ignores the square inches of fabric represented by .) in the diagram below:

...........
...........
...#####...
...#####...
...#####...
...#####...
...........
...........
...........
The problem is that many of the claims overlap, causing two or more claims to cover part of the same areas. For example, consider the following claims:

#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2
Visually, these claim the following areas:

........
...2222.
...2222.
.11XX22.
.11XX22.
.111133.
.111133.
........
The four square inches marked with X are claimed by both 1 and 2. (Claim 3, while adjacent to the others, does not overlap either of them.)

If the Elves all proceed with their own plans, none of them will have enough fabric.

How many square inches of fabric are within two or more claims?
*/
const assert = require('assert');
const parseInput = require('../src/day-03/parseInput');
const getAllCoords = require('../src/day-03/getAllCoords');

const EXAMPLE_INPUT = [ '#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
const EXECTED_OUTPUT = 2;

describe('Day 3 part 1: Parse an input string', () => {

	describe('Pasring id', () => {
		it('When given #1 @ 1,3: 4x4 the returned id should be 1', () => {
			const expect = 1;
			const value = '#1 @ 1,3: 4x4';

			assert.equal(parseInput(value).id, expect);
		});

		it('When given #2 @ 3,1: 4x4 the returned id should be 2', () => {
                	const expect = 2;
                	const value = '#2 @ 3,1: 4x4';

                	assert.equal(parseInput(value).id, expect);
        	});
	});

	describe('Parse starting coordantes', () => {
		it('When given an imput string #1 @ 1,3: 4x4 shoud return the starting coordantes of occupied spaces [1, 3]', () => {
			const expect = '1,3';
			const value = '#1 @ 1,3: 4x4';
			const result = parseInput(value).coords[0];

			assert.deepEqual(result, expect);
		});
	
		it('When given an imput string #2 @ 3,1: 4x4 shoud return the starting coordantes of occupied spaces [3,3]', () => {
			const expect = '3,1';
			const value = '#2 @ 3,1: 4x4';
			const result = parseInput(value).coords[0];

			assert.deepEqual(result, expect);
		});
	});

	describe('Parse all coordinates', () => {
		it('WHEN given "#1 @ 1,3: 4x4" THEN the cooradntes of all areas from 1,3 to 4,6', () => {
			const expect = [
				'1,3','1,4','1,5','1,6',
				'2,3','2,4','2,5','2,6',
				'3,3','3,4','3,5','3,6',
				'4,3','4,4','4,5','4,6',
			];

			const value = "#1 @ 1,3: 4x4";

			const result = parseInput(value).coords;

			assert.deepEqual(result, expect);
		});
		
		it('WHEN given "#1 @ 3,1: 4x4" THEN the cooradntes of all areas from 3,1 to 6,4', () => {
			const expect = [
				'3,1','3,2','3,3','3,4',
				'4,1','4,2','4,3','4,4',
				'5,1','5,2','5,3','5,4',
				'6,1','6,2','6,3','6,4',
			];

			const value = "#2 @ 3,1: 4x4";

			const result = parseInput(value).coords;

			assert.deepEqual(result, expect);
		});

	});

});

describe('Day 3 part 1: Finding the number of conflicting coordates', () => {

	describe('getAllCoords from input array', () => {
		it("When given  [ '#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4' ], it should return all of the occpided coordantes an an array", () => {
			const expect = [
				'1,3','1,4','1,5','1,6',
                                '2,3','2,4','2,5','2,6',
                                '3,3','3,4','3,5','3,6',
                                '4,3','4,4','4,5','4,6',
				'3,1','3,2','3,3','3,4',
                                '4,1','4,2','4,3','4,4',
                                '5,1','5,2','5,3','5,4',
                                '6,1','6,2','6,3','6,4',
			];

			const value =  [ '#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4' ];

			assert.deepEqual(getAllCoords(value), expect);
	
		}); 
	});

	describe('coordHashMap', () => {
		const value = [ 
			'1,3','1,4','1,5','1,6',
                        '2,3','2,4','2,5','2,6',
                        '3,3','3,4','3,5','3,6',
                        '4,3','4,4','4,5','4,6',
                        '3,1','3,2','3,3','3,4',
                        '4,1','4,2','4,3','4,4',
                        '5,1','5,2','5,3','5,4',
                        '6,1','6,2','6,3','6,4',
                ];

		it("WHEN given an array of coords: " + value + " it should return an object WHERE each coorate is a key, with a value of the number of times the coordante is in the array", () => {
			const expect = {
				'1,3': 1,
				'1,4': 1,
				'1,5': 1,
				'1,6': 1,
				'2,3': 1,
				'2,4': 1,
				'2,5': 1,
				'2,6': 1,
                        	'3,3': 2,
				'3,4': 2,
				'3,5': 1,
				'3,6': 1,
				'4,3': 2,
				'4,4': 2,
				'4,5': 1,
				'4,6': 1,
				'3,1': 1,
				'3,2': 1,
				'4,1': 1,
				'4,2': 1,
				'5,1': 1,
				'5,2': 1,
				'5,3': 1,
				'5,4': 1,
				'6,1': 1,
				'6,2': 1,
				'6,3': 1,
				'6,4': 1,
			}

			assert.deepEqual(coordsHashMap(value), expect);
		});
	});

	it("WHEN GIVEN [ '#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2 ]' the answer should be 4", () => {
		const expect = 4;
		const value = EXAMPLE_INPUT;

		assert.equal(numberOfConflicts(EXAMPLE_INPUT), expect);

		function numberOfConflicts(plan) {
			const allCoords = getAllCoords(plan);
			const occuranceHashMap = allCoords.reduce((acc, coord) => {
				const hasCoord = acc.hasOwnProperty(coord);
				
				acc[coord] = (hasCoord) ? (acc[coord] + 1) : 1;
					return acc;
			}, {});


			const duplcatedCoords = Object.keys(occuranceHashMap).filter(d => occuranceHashMap[d] !== 1);			
			return duplcatedCoords.length;
		}

	});

});
