function createEmptyGrid([x, y]) {
	return Array.from({ length: x }, () => Array.from({ length: y }, () => null)); 
}

module.exports = createEmptyGrid;
