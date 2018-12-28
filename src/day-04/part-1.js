const sortByTime = require('./sortByTime');
const parseRecords = require('./parseRecords');
const guardsSleepingPattern = require('./guardsSleepingPattern');
const totalSleepForEach = require('./totalSleepForEach');
const mostSleptMinute = require('./mostSleptMinute');
const sortByTotalSleep = require('./sortByTotalSleep');

function part1(records) {
	const sortedRecords = sortByTime(records);
	const parsedRecords = parseRecords(sortedRecords);
	const sleepingPatternHashMap = guardsSleepingPattern(parsedRecords);
	const unsortedTotals = totalSleepForEach(sleepingPatternHashMap);
	const sortedTotals = sortByTotalSleep(unsortedTotals);
	const guard = sortedTotals[0];
	const { id } = guard;
	const minute = mostSleptMinute(sleepingPatternHashMap, id);
	return id * minute;
}

module.exports = part1;
