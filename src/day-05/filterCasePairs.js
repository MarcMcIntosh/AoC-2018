function filterCasePairs(str) {
	
	let letters = '';
	
	for(let i = 0; i < str.length; i++) {
		const currCharCode = str.charCodeAt(i);
		const nextCharCode = str.charCodeAt(i + 1);

		if (!isNaN(nextCharCode) && (Math.abs(currCharCode - nextCharCode) === 32)) {
			i++;
		} else {
			letters += str[i];
		}
	}

	return letters;
};

module.exports = filterCasePairs;
