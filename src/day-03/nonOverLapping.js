const getAllCoords = require('./getAllCoords');
const parseInput = require('./parseInput');
const coordsHashMap = require('./coordsHashMap');

function findNonOverLapping(plans) {
	const allCoords = getAllCoords(plans);
			
	const hashMap = coordsHashMap(allCoords);
	const allPlans = plans.map(parseInput);

	const nonOverLapping = allPlans.filter((plan) => {
		
		let good = true;
		
		for(let i = 0; i < plan.coords.length && true; i+=1) {
			
			const coord = plan.coords[i];
			
			if (hashMap[coord] > 1) { 
				good = false;
			}
		}
		
		return good;
	});


	const [ bestPlan ] = nonOverLapping;
	return bestPlan.id;
}

module.exports = findNonOverLapping;
