function highestValue(keysAndValues) {
	const finiate = Object.keys(keysAndValues).filter((d) => {
		  return keysAndValues[d] !== Infinity;
	}).reduce((a, b) => {
		a[b] = keysAndValues[b];
		return a;
	}, {});
	const vals = Object.values(finiate);
	return Math.max.apply(null, vals);
}

module.exports = highestValue;
