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

	const guardsSortedByMostSleptMinute = Object.keys(hashMapOfGuardsAndMostSleptMinute).sort((a, b) => {
		const a_most_slept_minute = hashMapOfGuardsAndMostSleptMinute[a];
		const b_most_slept_minute = hashMapOfGuardsAndMostSleptMinute[b];
		const a_value = hashMap[a][a_most_slept_minute];
		const b_value = hashMap[b][b_most_slept_minute];
		return b_value - a_value;
	});

	// const idOfGuard = highestValueKey(hashMapOfGuardsAndMostSleptMinute);
	const idOfGuard = guardsSortedByMostSleptMinute[0];
	const minute = hashMapOfGuardsAndMostSleptMinute[idOfGuard];
	console.log(hashMapOfGuardsAndMostSleptMinute);
	return idOfGuard * minute;
}

module.exports = guardMostAsleepByMinute;
