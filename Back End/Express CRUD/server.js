const express = require("express");
const wordRoutes = require("./routes/wordRoutes");

const app = express();

app.use(express.json());
app.use(wordRoutes);

const port = 1337;

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
