const express = require("express");

const server = express();
const PORT = 8080;

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

server.get("/", function (req, res) {
  res.send("Server is up and running");
});

server.listen(PORT, function () {
  console.log(`Server is running at http://localhost:${PORT}`);
});
