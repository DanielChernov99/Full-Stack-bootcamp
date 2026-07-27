const express = require("express");
const logger = require("./middleware/logger");
const requestCounter = require("./middleware/requestCounter");
const errorHandler = require("./middleware/errorHandler");
const userRouter = require("./routes/userRouter");

const app = express();
const PORT = 3000;

app.use(express.json());
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

app.use("/users", userRouter);

app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
