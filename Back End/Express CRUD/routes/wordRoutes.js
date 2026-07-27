const express = require("express");
const wordModel = require("../models/wordModel");

const router = express.Router();

// Exercise 1
router.get("/sanity", function (req, res) {
  res.send("Server is up and running");
});

// Exercise 2
router.get("/word/:word", function (req, res) {
  const word = req.params.word;
  const wordCount = wordModel.getWordCount(word);

  res.send({ count: wordCount });
});

// Exercise 3
router.post("/word", function (req, res) {
  const word = req.body.word;
  if (!word) {
    return res.status(400).json({ error: "bad request " });
  }
  const wordCount = wordModel.addWord(word);
  res.status(201).json({
    text: `Added ${word}`,
    currentCount: wordCount,
  });
});

// Exercise 4
router.post("/sentence", function (req, res) {
  const sentence = req.body.sentence;
  if (!sentence) {
    return res.status(400).json({
      error: "Sentence is required",
    });
  }
  const result = wordModel.addSentence(sentence);
  res.status(201).json({
    text: `Added ${result.numNewWords} words, ${result.numOldWords} already existed`,
    currentCount: -1,
  });
});

// Exercise 5
router.delete("/word/:word", function (req, res) {
  const word = req.params.word;
  const wasDeleted = wordModel.deleteWord(word);

  if (!wasDeleted) {
    return res.status(404).json({
      error: `Word "${word}" was not found`,
    });
  }

  res.status(200).json({
    message: `Word "${word}" was deleted successfully`,
  });
});

// Extension 1

// Extension 2

// Extension 3

// Extension 4

module.exports = router;
