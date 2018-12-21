const getGuardNumber = require('./getGuardNumber');
const getRecordsWhere = require('./getRecordsWhere');
const getMinutes = require('./getMinutes');
const sortByTime = require('./sortByTime');


function sortAndArrangeShifts(records) {
	return sortByTime(records).join('\n').split('Guard').slice(1);
}

function createShiftObject(guardsShift) {
	const id = getGuardNumber(guardsShift);
	const shifts = guardsShift.split('\n');
	const wakes = getRecordsWhere(shifts, 'wakes').map(getMinutes);
	const asleep = getRecordsWhere(shifts, 'asleep').map(getMinutes);

	const sleeps = pairArrays(asleep, wakes);

	return { id, sleeps };
}

function pairArrays(arr1, arr2) {
	const result = [];
	const maxLength = Math.min(arr1.length, arr2.length);
	
	for(let i = 0; i < maxLength; i+=1) {
		const pair = [ arr1[i], arr2[i] ];
		result.push(pair);
	}
	return result;
}

function parseRecords(records) {
	
	const shifts = sortAndArrangeShifts(records);

	const shiftObjects = shifts.map(createShiftObject);

	return shiftObjects;
}

module.exports = parseRecords;
