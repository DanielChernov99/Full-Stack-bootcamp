const express = require("express");
const logger = require("./middleware/logger");
const requestCounter = require("./middleware/requestCounter");
const validateId = require("./middleware/validateId");
const checkResourceExists = require("./middleware/checkResourceExists");
const errorHandler = require("./middleware/errorHandler");

const users = require("./data/users");

const app = express();
const PORT = 3000;

app.use(logger);
app.use(requestCounter);

app.get("/", function (req, res) {
  res.status(200).json({
    message: "Welcome!",
    requestCount: req.requestCount,
  });
});

app.get("/about", function (req, res) {
  res.status(200).json({
    message: "About page",
    requestCount: req.requestCount,
  });
});

app.get("/users", function (req, res) {
  res.status(200).json(users);
});

app.get("/users/:id", validateId, checkResourceExists, function (req, res) {
  res.status(200).json(req.user);
});

app.post("/users", function (req, res) {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
