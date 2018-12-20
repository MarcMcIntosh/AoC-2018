function duplicatedCoords(hashMap) {
	return Object.keys(hashMap).filter(coord => hashMap[coord] !== 1);
}

module.exports = duplicatedCoords;
