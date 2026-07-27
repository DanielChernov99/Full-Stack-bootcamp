const express = require("express");
const wordModel = require("../models/wordModel");

const router = express.Router();

// Exercise 1
router.get("/sanity", function (req, res) {
  res.send("Server is up and running");
});

// Exercise 2
router.get("/word/:word");

// Exercise 3

// Exercise 4

// Exercise 5

// Extension 1

// Extension 2

// Extension 3

// Extension 4

module.exports = router;
