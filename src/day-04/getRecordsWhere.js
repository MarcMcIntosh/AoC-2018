function getRecordsWhere(sleepingPattern, where) {
	return sleepingPattern.filter((item) => item.includes(where));
}

module.exports = getRecordsWhere;
