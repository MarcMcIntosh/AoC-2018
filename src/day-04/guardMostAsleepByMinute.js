const highestValueKey = require('./highestValueKey');

function guardMostAsleepByMinute(hashMap) {
	

	const hashMapOfGuardsAndMostSleptMinute = Object.keys(hashMap)
		.filter((guardId) => {
			return Object.keys(hashMap[guardId]).length;
		})
		.reduce((acc, guardId) => {
			const sleepFrequency = hashMap[guardId];
			const minuteMostSlept = highestValueKey(sleepFrequency);
		
			acc[guardId] = parseInt(minuteMostSlept);
		
			return acc;
		}, {});

	const idOfGuard = highestValueKey(hashMapOfGuardsAndMostSleptMinute);
	const minute = hashMapOfGuardsAndMostSleptMinute[idOfGuard];

	return idOfGuard * minute;
}

module.exports = guardMostAsleepByMinute;
