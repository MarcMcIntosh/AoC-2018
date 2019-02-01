function flattenGrid(grid) {
	return Array.prototype.concat.apply([], grid);
}

module.exports = flattenGrid
