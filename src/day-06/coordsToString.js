function coordsToString(x, y) {

	if(Array.isArray(x)) {
		return x.join(':');
	}
	
	return `${x}:${y}`;
}

module.exports = coordsToString;
