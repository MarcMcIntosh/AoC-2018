function countArea(grid) {
	const results = {};

	for(let x = 0; x < grid.length; x += 1) {
			
		const row = grid[x];
		const endX = grid.length - 1;
		const endY = row.length - 1;

		for(let y = 0; y < row.length; y += 1) {
		
			const current = row[y];

			if(current === '.') {
			
				continue;
			} else if(x === 0 || x === endX || y === 0 || y === endY) {
				
				results[current] = Infinity;
	
			} else if(results[current]) {
				
				results[current] += 1;
			} else {
				results[current] = 1;
			}

		}
	}

	return results;
}

module.exports = countArea
