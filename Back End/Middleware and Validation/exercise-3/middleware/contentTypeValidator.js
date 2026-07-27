function contentTypeValidator(req, res, next) {
  const requiresJson = req.method === "POST" || req.method === "PUT";

  if (requiresJson && !req.is("application/json")) {
    const error = new Error("Content-Type must be application/json");
    error.statusCode = 415;

    return next(error);
  }

  next();
}

module.exports = contentTypeValidator;
