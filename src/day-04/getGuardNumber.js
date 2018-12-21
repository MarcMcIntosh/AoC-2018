function getGuardNumber(input) {
	const regex = /#\d+/;
	const match = regex.exec(input);
	
	if (match === null) { return match; }
	
	const numberWithLeadingHash = match[0];
	const numberAsString = numberWithLeadingHash.substr(1);
	
	return parseInt(numberAsString);
}

module.exports = getGuardNumber;
