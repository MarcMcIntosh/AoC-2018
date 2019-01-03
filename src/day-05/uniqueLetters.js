function uniqueLetters(str) {
	const uniq = [];
	
	for(let i = 0; i < str.length; i++) {
		const letter = str[i];
		const regexp = new RegExp(letter, 'i');

		if(str.search(regexp) === i) {
				uniq.push(letter.toLowerCase());
		}
	}

	return uniq.sort();
}

module.exports = uniqueLetters;
