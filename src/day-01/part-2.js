const { numberParser } = require('./part-1');

function frequencyRepeater(arrayOfStringedIntergers) {
	let current = 0;
	const cache = [].concat(current);
	const numbers = arrayOfStringedIntergers.map(numberParser);

	for(let i = 0; i < numbers.length; i++) {
		current += numbers[i];
		
		if (i === numbers.length - 1) {
			i = -1;
		}

		if (cache.indexOf(current) === -1) {
			cache.push(current);
			continue;
		}
	
		break;
	}

	return current;
}

module.exports = frequencyRepeater;
