function getMostSleptMinute(hashMap, id) {
	
	const minutesSlept = hashMap[id];
	
	let mostSleptMinute = null;
	
	for (let minute in minutesSlept) {
		
		if(mostSleptMinute === null) {
			mostSleptMinute = minute;
			continue;
		}
		
		const numberOfTimesSleeping = minutesSlept[minute];
		const currentMost = minutesSlept[mostSleptMinute];

		if (numberOfTimesSleeping > currentMost) {
			mostSleptMinute = minute;
		}
	}
			
	return mostSleptMinute;
};

module.exports = getMostSleptMinute;
