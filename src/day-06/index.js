const data = require('./data');
const part1 = require('./part-1');
const part2 = require('./part-2')(10000);

console.log({
	part: 1,
	solution: part1(data)
});

console.log({
	part: 2,
	solution: part2(data),
});
