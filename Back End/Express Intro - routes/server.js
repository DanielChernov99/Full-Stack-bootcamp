const express = require("express");
const path = require("path");

const users = {
  tilda: "You've done a wonderful job",
  riva: "You need to improve your form, but good perseverance",
  jeremy: "You're incredible",
};

const server = express();
const port = 3000;

server.use(express.static(path.join(__dirname, "dist")));

server.get("/maps", function (request, response) {
  response.send("Here's some stuff related to maps");
});

server.get("/shoobi", function (request, response) {
  response.send("This here is the shoobi *route*");
});

server.get("/life", function (request, response) {
  response.send("42");
});

server.get("/users/:username", function (request, response) {
  const username = request.params.username;

  if (!(username in users)) {
    response.send(`No such user as ${username}`);
  } else {
    response.send(users[username]);
  }
});

server.get("/details", function (request, response) {
  const params = request.query;

  console.log(params.city);
  response.send(params);
});

server.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
