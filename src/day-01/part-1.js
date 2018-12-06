// Reipliment solutions from test hert e


module.exports = {
	numberParser,
	frequencyCalculator,
};

function numberParser(signedIntAsString) {
	return +signedIntAsString;
}

function frequencyCalculator(arrayOfIntsAsStrings) {
	
	if(Array.isArray(arrayOfIntsAsStrings) === false) { return 0; }
		
	const numbers = arrayOfIntsAsStrings.map(numberParser);

	return numbers.reduce((sum, currentNumber) => {
		return sum + currentNumber;
	}, 0);
}


