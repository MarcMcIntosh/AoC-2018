function sharedLetters(word1, word2) {
  let letters = '';
  for(let i = 0; i < word1.length; i+=1) {
    if(word1[i] === word2[i]) {
      letters += word1[i];
    }
  }
  return letters;
}

module.exports = sharedLetters;
