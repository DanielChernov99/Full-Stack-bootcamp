const http = require("http");

const port = 3000;

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

const server = http.createServer(function (request, response) {
  console.log(request.method, request.url);

  response.setHeader("Content-Type", "application/json; charset=utf-8");

  if (request.method === "GET" && request.url === "/api/users") {
    response.statusCode = 200;
    response.end(JSON.stringify(users));
  } else if (
    request.method === "GET" &&
    request.url.startsWith("/api/users/")
  ) {
    const id = Number(request.url.replace("/api/users/", ""));
    const user = users.find((u) => u.id === id);

    if (user) {
      response.statusCode = 200;
      response.end(JSON.stringify(user));
    } else {
      response.statusCode = 404;
      response.end(JSON.stringify({ error: "User not found" }));
    }
  } else if (request.method === "POST" && request.url === "/api/users") {
    let body = "";
    request.on("data", function (chunk) {
      body += chunk;
    });

    request.on("end", function () {
      try {
        const userData = JSON.parse(body);
        if (!userData.name || !userData.email) {
          response.statusCode = 400;
          response.end(
            JSON.stringify({
              error: "Name and email are required",
            }),
          );
          return;
        }
        const newUser = {
          id: users.length + 1,
          name: userData.name,
          email: userData.email,
        };
        users.push(newUser);

        response.statusCode = 201;
        response.end(JSON.stringify(newUser));
      } catch (error) {
        response.statusCode = 400;
        response.end(
          JSON.stringify({
            error: "Invalid JSON",
          }),
        );
      }
    });
  } else {
    response.statusCode = 404;
    response.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(port, function () {
  console.log(`Server is running on http://localhost:${port}`);
});
