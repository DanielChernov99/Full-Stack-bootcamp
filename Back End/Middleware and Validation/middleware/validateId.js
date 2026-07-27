function validateId(req, res, next) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    const error = new Error("Invalid ID format");
    error.statusCode = 400;
    throw error;
  }
  req.userId = id;

  next();
}

module.exports = validateId;
