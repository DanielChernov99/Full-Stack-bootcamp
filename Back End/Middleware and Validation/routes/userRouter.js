const express = require("express");
const userModel = require("../models/userModel");
const validateId = require("../middleware/validateId");
const checkResourceExists = require("../middleware/checkResourceExists");

const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).json(userModel.getAllUsers());
});

router.get("/:id", validateId, checkResourceExists, function (req, res) {
  res.status(200).json(req.user);
});

router.post("/", function (req, res) {
  const newUser = userModel.createUser(req.body.name);

  res.status(201).json(newUser);
});

module.exports = router;
