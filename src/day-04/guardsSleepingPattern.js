function guardsSleepingPattern(arrayOfShifts) {
	const hashMap = {};

	for(let shiftIndex = 0; i < arrayOfShifts.length; i += 1) {
		const { id, sleeps: [ start, end ] } = arrayOfShifts[i];
		
		if(!hashMap[id]) {
			hashMap[id] = {}
		}

		for(let minute = start; minute < end; minute += 1) {
			if(hashMap[id][minute]) {
				hashMap[id][i] += 1;
			} else {
				hashMap[id][i] = 1;
			}
		}
	}

	return hashMap;
}

module.exports = guardsSleepingPattern;
