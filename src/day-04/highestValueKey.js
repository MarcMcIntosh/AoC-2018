function highestValueKey(objectOfKeyValuePairs) {
	const keys = Object.keys(objectOfKeyValuePairs);
	const sortedKeys = keys.sort((a, b) => {
		return objectOfKeyValuePairs[b] - objectOfKeyValuePairs[a];
	});

	return sortedKeys[0];
}

module.exports = highestValueKey;
