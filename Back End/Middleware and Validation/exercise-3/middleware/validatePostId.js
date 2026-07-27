function validatePostId(req, res, next) {
  const postId = Number(req.params.postId);

  if (!Number.isInteger(postId) || postId <= 0) {
    const error = new Error("Invalid post ID format");
    error.statusCode = 400;

    return next(error);
  }

  req.postId = postId;
  next();
}

module.exports = validatePostId;
