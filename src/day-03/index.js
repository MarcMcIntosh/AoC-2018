const data = require('./data');
const numberOfConflicts = require('./numberOfConflicts');
const nonOverLapping = require('./nonOverLapping');

const partOneAnswer = numberOfConflicts(data);
const partTwoAnswer = nonOverLapping(data);


console.log('Day three');
console.log('Part 1, number of conflicts: ', partOneAnswer); 
console.log('Part 2, non overlapping: ', partTwoAnswer);
