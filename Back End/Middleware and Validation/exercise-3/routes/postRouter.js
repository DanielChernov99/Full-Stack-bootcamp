const express = require("express");
const postModel = require("../models/postModel");
const validatePost = require("../validators/validatePost");

const router = express.Router();

router.get("/", function (req, res) {
  const posts = postModel.getPosts();

  res.success(posts);
});

router.post("/", validatePost, function (req, res) {
  const newPost = postModel.createPost(req.validatedBody);

  res.success(newPost, 201);
});

module.exports = router;
