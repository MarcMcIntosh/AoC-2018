function stringCompare(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
		
	let diff = true;
		
	for(let i = 0; i < str1.length && diff; i++) {
		if (str1[i] !== str2[2]) {
			diff = false;
		}
	}

	return diff;
}
