/*--- Day 4: Repose Record ---
You've sneaked into another supply closet - this time, it's across from the prototype suit manufacturing lab. You need to sneak inside and fix the issues with the suit, but there's a guard stationed outside the lab, so this is as close as you can safely get.

As you search the closet for anything that might help, you discover that you're not the first person to want to sneak in. Covering the walls, someone has spent an hour starting every midnight for the past few months secretly observing this guard post! They've been writing down the ID of the one guard on duty that night - the Elves seem to have decided that one guard was enough for the overnight shift - as well as when they fall asleep or wake up while at their post (your puzzle input).

For example, consider the following records, which have already been organized into chronological order:

[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:05] falls asleep
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:45] falls asleep
[1518-11-05 00:55] wakes up
Timestamps are written using year-month-day hour:minute format. The guard falling asleep or waking up is always the one whose shift most recently started. Because all asleep/awake times are during the midnight hour (00:00 - 00:59), only the minute portion (00 - 59) is relevant for those events.

Visually, these records show that the guards are asleep at these times:

Date   ID   Minute
            000000000011111111112222222222333333333344444444445555555555
            012345678901234567890123456789012345678901234567890123456789
11-01  #10  .....####################.....#########################.....
11-02  #99  ........................................##########..........
11-03  #10  ........................#####...............................
11-04  #99  ....................................##########..............
11-05  #99  .............................................##########.....
The columns are Date, which shows the month-day portion of the relevant day; ID, which shows the guard on duty that day; and Minute, which shows the minutes during which the guard was asleep within the midnight hour. (The Minute column's header shows the minute's ten's digit in the first row and the one's digit in the second row.) Awake is shown as ., and asleep is shown as #.

Note that guards count as asleep on the minute they fall asleep, and they count as awake on the minute they wake up. For example, because Guard #10 wakes up at 00:25 on 1518-11-01, minute 25 is marked as awake.

If you can figure out the guard most likely to be asleep at a specific time, you might be able to trick that guard into working tonight so you can have the best chance of sneaking in. You have two strategies for choosing the best guard/minute combination.

Strategy 1: Find the guard that has the most minutes asleep. What minute does that guard spend asleep the most?

In the example above, Guard #10 spent the most minutes asleep, a total of 50 minutes (20+25+5), while Guard #99 only slept for a total of 30 minutes (10+10+10). Guard #10 was asleep most during minute 24 (on two days, whereas any other minute the guard was asleep was only seen on one day).

While this example listed the entries in chronological order, your entries are in the order you found them. You'll need to organize them before they can be analyzed.

What is the ID of the guard you chose multiplied by the minute you chose? (In the above example, the answer would be 10 * 24 = 240.)
*/

const assert = require('assert');
const getGuardNumber = require('../src/day-04/getGuardNumber');
const getRecordsWhere = require('../src/day-04/getRecordsWhere');
const sortByTime = require('../src/day-04/sortByTime');
const getMinutes = require('../src/day-04/getMinutes');
const parseRecords = require('../src/day-04/parseRecords');
const guardsSleepingPattern = require('../src/day-04/guardsSleepingPattern');
const totalSleepForEach = require('../src/day-04/totalSleepForEach');
const sortByTotalSleep = require('../src/day-04/sortByTotalSleep');
const getMostSleptMinute = require('../src/day-04/mostSleptMinute');
const part1 = require('../src/day-04/part-1');

const STUB_INPUT = [
	"[1518-11-01 00:00] Guard #10 begins shift",
	"[1518-11-01 00:05] falls asleep",
	"[1518-11-01 00:25] wakes up",
	"[1518-11-01 00:30] falls asleep",
	"[1518-11-01 00:55] wakes up",
	"[1518-11-01 23:58] Guard #99 begins shift",
	"[1518-11-02 00:40] falls asleep",
	"[1518-11-02 00:50] wakes up",
	"[1518-11-03 00:05] Guard #10 begins shift",
	"[1518-11-03 00:24] falls asleep",
	"[1518-11-03 00:29] wakes up",
	"[1518-11-04 00:02] Guard #99 begins shift",
	"[1518-11-04 00:36] falls asleep",
	"[1518-11-04 00:46] wakes up",
	"[1518-11-05 00:03] Guard #99 begins shift",
	"[1518-11-05 00:45] falls asleep",
	"[1518-11-05 00:55] wakes up",
];


// Strategy 1: Find the guard that has the most minutes asleep. What minute does that guard spend asleep the most?
// guard 10

describe('Day 04 Part 1', () => {

	describe('sortByTime: The input needs to be sorted', () => {

		it('Should sort the records chronologically', () => {
			const value = [
				"[1518-11-01 00:05] falls asleep",
				"[1518-11-01 00:00] Guard #10 begins shift",
				"[1518-11-01 00:25] wakes up",
			];

			const expect = [
				"[1518-11-01 00:00] Guard #10 begins shift",
        			"[1518-11-01 00:05] falls asleep",
        			"[1518-11-01 00:25] wakes up",
			];

			assert.deepEqual(sortByTime(value), expect);
			
		});


	});
	describe('Parse Input', () => {

		describe('Get minutes from input string', () => {
			it('should return 0 when given [1518-11-01 00:00]', () => {
				const value = '[1518-11-01 00:00]';
				const expect = 0;

				assert.equal(getMinutes(value), expect);
			});

			it('should return 5 when given "[1518-11-01 00:05] falls asleep"', () => {
				const value = '[1518-11-01 00:05] falls asleep';
				const expect = 5;

				assert.equal(getMinutes(value), expect);
			});

		});

		describe('getGuardNumber', () => {
			
			it('WHEN GIVEN "[1518-11-01 00:00] Guard #10 begins shift" RETURN 10', () => {
				const value = "[1518-11-01 00:00] Guard #10 begins shift";
				const expect = 10;

				assert.equal(getGuardNumber(value), expect);
			});

			it('WHEN GIVEN "[1518-11-01 23:58] Guard #99 begins shift" RETURN 99', () => {
				const value = "[1518-11-01 23:58] Guard #99 begins shift";
				const expect = 99;

				assert.equal(getGuardNumber(value), expect);
			
			});

			it('WHEN GIVEN "[1518-11-01 00:05] falls asleep" RETURN null', () => {
				const value = "[1518-11-01 00:05] falls asleep";
				const expect = null;
				
				assert.equal(getGuardNumber(value), expect);
			});
		});
		
		describe("getRecordsWhere: ", () => {
			
			const value = [
				"[1518-11-01 00:05] falls asleep",
				"[1518-11-01 00:25] wakes up",
				"[1518-11-01 00:30] falls asleep",
				"[1518-11-01 00:55] wakes up"
			];

 
			it('Should return an array of records in which the guard started sleeping at', () => {
				
				
				const expect = [
                                         "[1518-11-01 00:05] falls asleep",
                                         "[1518-11-01 00:30] falls asleep",
                                ];
				
				assert.deepEqual(getRecordsWhere(value, "falls"), expect);

			});

			it('Should return an array of record sin which the guard woke up', () => {
				const expect = [
                                        "[1518-11-01 00:25] wakes up",
                                        "[1518-11-01 00:55] wakes up",
				];

				assert.deepEqual(getRecordsWhere(value, "wakes"), expect);

			});
		});

		describe('get the guard shift pattern', () => {
			it('WHEN given a sorted array of shifts it should return the gurad id and an of records for each shift', () => {
				const value = [
					"[1518-11-01 00:00] Guard #10 begins shift",
					"[1518-11-01 00:05] falls asleep",
					"[1518-11-01 00:25] wakes up",
					"[1518-11-01 00:30] falls asleep",
					"[1518-11-01 00:55] wakes up",
					"[1518-11-01 23:58] Guard #99 begins shift",
					"[1518-11-02 00:40] falls asleep",
					"[1518-11-02 00:50] wakes up",
				];

				const expect = [{
					id: 10,
					sleeps: [ [ 5, 25 ], [ 30, 55 ] ],
				}, {
					id: 99,
					sleeps: [ [ 40, 50 ] ],
				}];

				assert.deepEqual(parseRecords(value), expect);
			});			

		});
		
	});

	describe("Generate a hash map of guards, and how offten they where alseep at what times", () => {
		const value = [{
			id: 1,
			sleeps: [[1, 3], [4, 6]],
		}, {
			id: 2,
			sleeps: [[1, 3]],
		}, {
			id: 1,
			sleeps: [[2, 3]], 
		}];

		const expect = {
			1: {1: 1, 2: 2, 4: 1, 5: 1 },
			2: { 1: 1, 2: 1 },
		};

		it('When given a parsed sleep pattern it should return an object of ids: with a hashMap of the minutes slept on shift for each elev', () => {

			assert.deepEqual(guardsSleepingPattern(value), expect);
		});

	});

	describe('get the total amoutn of time each guard slept', () => {
		const value = {
			1: {
				1: 1,
				2: 2,
				4: 1,
				5: 1,
			},
			2: {
				1: 1,
				2: 1,
			},
		};

		const expect = [ { id: 1, total: 5 }, { id: 2, total: 2 }];

		it('Should return and array of objects with an id and the total the guard has slept on shift', () => {

			assert.deepEqual(totalSleepForEach(value), expect);

		});
	});

	describe('Get the id of the guard that slept the most', () => {

		it('Should return [{ id: 1, total: 5 }, { id: 2, total: 2 }] when given an unsorted array of [ { id: 2, total: 2 }, { id: 1, total: 5 }]', () => {
			const value = [ { id: 2, total: 2 }, { id: 1, total: 5 } ];
			const expect = [ { id: 1, total: 5 }, { id: 2, total: 2 } ];

			assert.deepEqual(sortByTotalSleep(value), expect);
		}); 
	});

	describe('get most slept minute for hash Map', () => {

		const stubHashMap = {
			1: {
				1: 1,
				2: 1,
				3: 2,
				4: 1,
			},
			2: {
				1: 1,
				2: 2,
				3: 1,
				4: 1,
			}
		};

		it("When given id: 1, and the hashMap: " + JSON.stringify(stubHashMap) + " it should return 3.", () => {
			const value = 1;
			const expect = 3;

			assert.equal(getMostSleptMinute(stubHashMap, value), expect)
		});

		it("When given id 2, and the hashMap: " + JSON.stringify(stubHashMap) + " return 2", () => {

			const value = 2;
			const expect = 2;

			assert.equal(getMostSleptMinute(stubHashMap, value), expect);
		});

	});

	describe('From the example input. Times the id of the guard who slept the most by the minute they slept the most', () => {

		const expect = 240;
		const value = STUB_INPUT;
		it(`WHEN given ${STUB_INPUT} return ${expect}`, () => {
			assert.equal(part1(value), expect)
		});


	});

});


const description = `
Day 4
--- Part Two ---
Strategy 2: Of all guards, which guard is most frequently asleep on the same minute?

In the example above, Guard #99 spent minute 45 asleep more than any other guard or minute - three times in total. (In all other cases, any guard spent any minute asleep at most twice.)

What is the ID of the guard you chose multiplied by the minute you chose? (In the above example, the answer would be 99 * 45 = 4455.)
`

describe(description, () => {

	describe('Which guard is most frequently asleep on the same minute', () => {

		const stubInput1 = {
			1: { 1: 1, 2: 1, 3: 3, 4: 1 },  
                        2: { 1: 1, 2: 2, 3: 1, 4: 1 },
                };
		
		it('When given the input: ' + JSON.stringify(stubInput1, undefined, '\t') + '\n\t it should return 1', () => {
		const value = 1;
			assert.equal(guardMostAsleepByMinute(stubInput1), value);
		});

		function guardMostAsleepByMinute(hashMap) {
			return 1;
		}

	});

});
