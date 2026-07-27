const express = require("express");
const commentModel = require("../models/commentModel");
const validatePostId = require("../middleware/validatePostId");
const checkPostExists = require("../middleware/checkPostExists");
const {
  validateComment,
  handleValidationErrors,
} = require("../validators/commentValidators");

const router = express.Router();

router.post(
  "/:postId/comments",
  validatePostId,
  checkPostExists,
  validateComment,
  handleValidationErrors,
  function (req, res) {
    const newComment = commentModel.createComment({
      content: req.body.content,
      email: req.body.email,
      postId: req.postId,
    });

    res.success(newComment, 201);
  },
);

router.get("/:postId/comments", validatePostId, function (req, res) {
  const comments = commentModel.getCommentsByPostId(req.postId);

  res.success(comments);
});

module.exports = router;
