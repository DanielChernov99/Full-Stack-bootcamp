const express = require("express");
const path = require("path");

const server = express();
const PORT = 8080;

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

server.use("/store", express.static(path.join(__dirname, "dist")));

server.get("/", function (req, res) {
  res.send("Server is up and running");
});

server.get("/priceCheck/:name", function (req, res) {
  const name = req.params.name;
  const item = store.find((item) => item.name === name);
  if (!item) {
    return res.send({ price: null });
  }
  res.send({ price: item.price });
});

server.patch("/buy/:name", function (req, res) {
  const name = req.params.name;
  const item = store.find((item) => item.name === name);

  if (!item) {
    return res.send({ error: "Item not found" });
  }

  if (item.inventory <= 0) {
    return res.send({ error: "Item is out of stock" });
  }

  item.inventory -= 1;

  res.send(item);
});

server.get("/sale", function (req, res) {
  const admin = req.query.admin;
  if (admin === "true") {
    store.forEach((item) => {
      if (item.inventory > 10) {
        item.price *= 0.5;
      }
    });
  }
  res.send(store);
});

server.listen(PORT, function () {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(`Furniture store: http://localhost:${PORT}/store`);
});
