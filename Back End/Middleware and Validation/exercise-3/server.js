const express = require("express");
const postRouter = require("./routes/postRouter");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).json({
    message: "Exercise 3 API is running",
  });
});

app.use("/posts", postRouter);

app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`Exercise 3 server is running on port ${PORT}`);
});
