const userModel = require("../models/userModel");

function checkResourceExists(req, res, next) {
  const user = userModel.getUserById(req.userId);
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;

    throw error;
  }
  req.user = user;
  next();
}

module.exports = checkResourceExists;
