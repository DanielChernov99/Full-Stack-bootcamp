const wordCounter = {};

function getWordCount(word) {
  const cleanWord = word.toLowerCase();
  return wordCounter[cleanWord] || 0;
}

function addWord(word) {
  const cleanWord = word.toLowerCase();
  wordCounter[cleanWord] = (wordCounter[cleanWord] || 0) + 1;
  return wordCounter[cleanWord];
}

function addSentence(sentence) {
  let numNewWords = 0;
  let numOldWords = 0;
  const words = sentence.toLowerCase().split(" ");
  for (const word of words) {
    const countBeforeAdding = getWordCount(word);
    countBeforeAdding === 0 ? numNewWords++ : numOldWords++;
    addWord(word);
  }

  return {
    numNewWords,
    numOldWords,
  };
}

function deleteWord(word) {
  const cleanWord = word.toLowerCase();

  if (!Object.hasOwn(wordCounter, cleanWord)) {
    return false;
  }

  delete wordCounter[cleanWord];
  return true;
}

module.exports = {
  getWordCount,
  addWord,
  addSentence,
  deleteWord,
};
