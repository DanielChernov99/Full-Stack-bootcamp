const wordCounter = { cat: 1 };

function getWordCount(word) {
  return wordCounter[word] || 0;
}

module.exports = {
  getWordCount,
};
