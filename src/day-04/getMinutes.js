function getMinutes(record) {
	const arrayOrNull = /:\d+/.exec(record);
	
	if (arrayOrNull === null) {
		return;
	}
	
	const numberAsString = arrayOrNull[0].substr(1);
	return parseInt(numberAsString);
}

module.exports = getMinutes;
