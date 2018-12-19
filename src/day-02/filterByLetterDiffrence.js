const diffrentByOneLetter = require('./diffrentByOneLetter');

function filterByLetterDiffrence(arrayOfIds) {
  return arrayOfIds.filter((boxId, index, arr) => {
    let found = false;
    for(let i = 0; i < arr.length && !found; i++) {
      if(diffrentByOneLetter(boxId, arr[i])) { found = true; }
    }
    return found;
  });
}

module.exports = filterByLetterDiffrence;
