function totalSleepForEach(hashMap) {
	return Object.keys(hashMap).map((id) => {
		const minutes = Object.values(hashMap[id]);
		const total = minutes.reduce((a, b) => a + b, 0);
		
		return { id, total };
	});
}

module.exports = totalSleepForEach;
