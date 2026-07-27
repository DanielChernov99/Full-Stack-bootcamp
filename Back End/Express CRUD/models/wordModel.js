const wordCounter = {};

function normalizeWord(word) {
  return word.toLowerCase().replace(/[^a-z]/g, "");
}

function getWordCount(word) {
  const cleanWord = normalizeWord(word);

  if (!cleanWord) {
    return 0;
  }

  return wordCounter[cleanWord] || 0;
}

function addWord(word) {
  const cleanWord = normalizeWord(word);

  if (!cleanWord) {
    return null;
  }

  wordCounter[cleanWord] = (wordCounter[cleanWord] || 0) + 1;

  return wordCounter[cleanWord];
}

function addSentence(sentence) {
  let numNewWords = 0;
  let numOldWords = 0;

  const words = sentence.trim().split(/\s+/).map(normalizeWord).filter(Boolean);

  for (const word of words) {
    const countBeforeAdding = getWordCount(word);

    if (countBeforeAdding === 0) {
      numNewWords++;
    } else {
      numOldWords++;
    }

    addWord(word);
  }

  return {
    numNewWords,
    numOldWords,
  };
}

function deleteWord(word) {
  const cleanWord = normalizeWord(word);

  if (!cleanWord || !Object.hasOwn(wordCounter, cleanWord)) {
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
