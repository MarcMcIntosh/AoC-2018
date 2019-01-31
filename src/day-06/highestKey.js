function highestKey(values) {
	return Object.keys(values)
		.filter(d => values[d] !== Infinity)
		.reduce((a, b) => values[a] > values[b] ? a : b);
}

module.exports = highestKey;
