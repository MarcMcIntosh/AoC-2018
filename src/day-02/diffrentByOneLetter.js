function diffrentByOneLetter(firstWord, secondWord) {
	let count = 0;
	for(let i = 0; i < firstWord.length; i += 1) {
		if(firstWord[i] !== secondWord[i]) {
			count += 1;
		}
	}
	return count === 1;
}

module.exports = diffrentByOneLetter;
