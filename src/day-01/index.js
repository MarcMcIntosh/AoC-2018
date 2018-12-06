// This generates the solutions
//
const data = require('./data');
const { frequencyCalculator } = require('./part-1')

const part_one_answer = frequencyCalculator(data);

console.log({
	part_one_answer,
});
