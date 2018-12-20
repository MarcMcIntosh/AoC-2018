function parseInput(plan) {

	const idWithHash = /#\d+/.exec(plan)[0];
	const id = +idWithHash.replace('#','');
	const startCoords = /\d+,\d+/.exec(plan)[0].split(',').map(d => +d);

	const [ startX, startY ] = startCoords;
	const coords = [];

	// repitition here
	const [ endX, endY ] = /\d+x\d+/.exec(plan)[0].split('x').map(d => +d);

	for (let x = 0; x < endX; x+=1) {
		
		const currentX = startX + x;

		for(let y = 0; y < endY; y+=1) {
				
			const currentY = startY + y;
			const XYstring = currentX + ',' + currentY;
				
			coords.push(XYstring);
		}
	}

	return { id, coords };
};

module.exports = parseInput;
