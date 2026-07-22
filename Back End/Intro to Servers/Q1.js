const http = require("http");

const port = 3000;

const server = http.createServer(function (request, response) {
  console.log(request.method, request.url);

  if (request.method === "GET" && request.url === "/") {
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    response.statusCode = 200;
    response.end("Welcome to my server!");
  } else if (request.method === "GET" && request.url === "/about") {
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    response.statusCode = 200;
    response.end("This is the about page");
  } else if (request.method === "GET" && request.url === "/contact") {
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    response.statusCode = 200;
    response.end("Email: daniel@example.com");
  } else {
    response.statusCode = 404;
    response.end("404 - Page not found");
  }
});

server.listen(port, function () {
  console.log("Server is running on http://localhost:3000");
});
