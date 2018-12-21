function guardsSleepingPattern(arrayOfShifts) {
	const hashMap = {};

	for(let shiftIndex = 0; shiftIndex < arrayOfShifts.length; shiftIndex += 1) {
		const { id, sleeps } = arrayOfShifts[shiftIndex];

		if(!hashMap[id]) {
			hashMap[id] = {}
		}
		
		for(let slept = 0; slept < sleeps.length; slept += 1) {
			const [ start, end ] = sleeps[slept];
			
			for(let minute = start; minute < end; minute += 1) {
				if(hashMap[id][minute]) {
					hashMap[id][minute] += 1;
				} else {
					hashMap[id][minute] = 1;
				}
			}
		}
	}

	return hashMap;
}

module.exports = guardsSleepingPattern;
