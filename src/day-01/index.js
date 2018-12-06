// This generates the solutions
//
const data = require('./data');
const { frequencyCalculator } = require('./part-1')
const frequencyRepeater = require('./part-2');
const part_one_answer = frequencyCalculator(data);
const part_two_answer = frequencyRepeater(data);

console.log({
	part_one_answer,
	part_two_answer,
});
