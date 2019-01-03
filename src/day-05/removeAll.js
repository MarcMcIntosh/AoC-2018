function removeAll(letter, str) {
	const regex = new RegExp(letter, 'gi');
	return str.replace(regex, '');
};

module.exports = removeAll;
