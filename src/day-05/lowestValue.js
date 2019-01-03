function lowestValue(obj) {
	const values = Object.values(obj);
	return Math.min.apply(null, values);
}

module.exports = lowestValue;
