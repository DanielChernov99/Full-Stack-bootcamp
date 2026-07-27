const postModel = require("../models/postModel");

function checkPostExists(req, res, next) {
  const post = postModel.getPostById(req.postId);

  if (!post) {
    const error = new Error("Post not found");
    error.statusCode = 404;

    return next(error);
  }

  req.post = post;
  next();
}

module.exports = checkPostExists;
