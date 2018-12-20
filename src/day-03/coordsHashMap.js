
function coordsHashMap(coords) {
	return coords.reduce((hashMap, coord) => {
		const hasCoord = hashMap.hasOwnProperty(coord);
		
		if (hasCoord) {
			hashMap[coord] += 1;
		} else {
			hashMap[coord] = 1;
		}
		
		return hashMap;
	}, {});
}

module.exports = coordsHashMap;
