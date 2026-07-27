const postSchema = require("./postSchema");

function validatePost(req, res, next) {
  const validationResult = postSchema.safeParse(req.body);

  if (!validationResult.success) {
    const error = new Error("Post validation failed");
    error.statusCode = 400;
    error.details = validationResult.error.issues;

    return next(error);
  }

  req.validatedBody = validationResult.data;

  next();
}

module.exports = validatePost;
