function createEmptyGrid([x, y]) {
	return Array.from({ length: x + 1}, () => Array.from({ length: y + 1 }, () => null)); 
}

module.exports = createEmptyGrid;
