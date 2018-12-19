const diffrentByOneLetter = require('./diffrentByOneLetter');
const sharedLetters = require('./sharedLetters');
const filterByLetterDiffrence = require('./filterByLetterDiffrence');
const data = require('./data');

function solutionForDay2(boxIds) {
  const matchingIds = filterByLetterDiffrence(boxIds);
  const [word1, word2] = matchingIds;
  return sharedLetters(word1, word2);
}

console.log(solutionForDay2(data));
