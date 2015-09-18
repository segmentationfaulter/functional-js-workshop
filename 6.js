function countWords(inputWords) {
  'use strict';
  let output = inputWords.reduce((obj, word) => {
    let objKeys = Object.keys(obj);
    if (objKeys.indexOf(word) === -1) {
      obj[word] = 1;
    } else {
      obj[word]++;
    }
    return obj;
  }, {});
  return output;
}

module.exports = countWords;
