const assert = require('assert');

// TEST CASES
const EXAMPLE_IDS = [ 'abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'];
const EXAMPLE_RESULT = 'fgij' // These are the letters in common from ids that differ by one letter
const EXAMPLE_VALID_IDS = ['fghij', 'fguij'];

// This is similar to the validator from word-chain-kata

describe('Find words that are diffrent by one letter', () => {
  
  it('WHEN GIVEN two words that are diffrent from each other by more than one letter THEN return false ', () => {
    assert.equal(diffrentByOneLetter('adcde', 'fghij'), false);
  });
  
  it('WHEN GIVEN two words that are diffrent by one letter, it should return true', () => {
    assert.equal(diffrentByOneLetter('fghij', 'fguij'), true);
  });
  
  
  function diffrentByOneLetter(str1, str2) {
    let count = 0;
    for(let i = 0;  i < str1.length; i+=1) {
      if(str1[i] !== str2[i]) { count += 1; }
    }
    
    // return false;
    return count === 1;
  }
});

