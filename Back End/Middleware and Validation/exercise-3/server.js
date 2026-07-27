const express = require("express");
const postRouter = require("./routes/postRouter");
const commentRouter = require("./routes/commentRouter");
const logger = require("./middleware/logger");
const rateLimiter = require("./middleware/rateLimiter");
const contentTypeValidator = require("./middleware/contentTypeValidator");
const responseFormatter = require("./middleware/responseFormatter");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = 3000;

app.use(logger);
app.use(rateLimiter);
app.use(contentTypeValidator);
app.use(express.json());
app.use(responseFormatter);

app.get("/", function (req, res) {
  res.success({
    message: "Exercise 3 API is running",
  });
});

app.use("/posts", postRouter);
app.use("/posts", commentRouter);

app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`Exercise 3 server is running on port ${PORT}`);
});
