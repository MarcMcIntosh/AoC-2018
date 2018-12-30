const highestValueKey = require('./highestValueKey');

function guardMostAsleepByMinute(hashMap) {
	const hashMapOfGuardsAndMostSleptMinute = Object.keys(hashMap).reduce((acc, guardId) => {
		const sleepFrequency = hashMap[guardId];
		const minuteMostSlept = highestValueKey(sleepFrequency);
		
		acc[guardId] = minuteMostSlept;
		
		return acc;
	}, {});
			
	const idOfGuard = highestValueKey(hashMapOfGuardsAndMostSleptMinute);
	const minute = hashMapOfGuardsAndMostSleptMinute[idOfGuard];

	return idOfGuard * minute;
}

module.exports = guardMostAsleepByMinute;
