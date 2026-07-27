const users = require("../data/users");

function checkResourceExists(req, res, next) {
  const user = users.find((user) => user.id === req.userId);
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;

    throw error;
  }
  req.user = user;
  next();
}

module.exports = checkResourceExists;
