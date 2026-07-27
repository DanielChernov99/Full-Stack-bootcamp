const express = require("express");
const postModel = require("../models/postModel");
const validatePost = require("../validators/validatePost");

const router = express.Router();

router.get("/", function (req, res) {
  const posts = postModel.getPosts();

  res.status(200).json(posts);
});

router.post("/", validatePost, function (req, res) {
  const newPost = postModel.createPost(req.validatedBody);

  res.status(201).json(newPost);
});

module.exports = router;
