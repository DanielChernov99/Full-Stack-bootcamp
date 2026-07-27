function logger(req, res, next) {
  const startTime = Date.now();

  res.on("finish", function () {
    const timestamp = new Date().toISOString();
    const executionTime = Date.now() - startTime;

    console.log(
      `[${timestamp}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${executionTime}ms`,
    );
  });

  next();
}

module.exports = logger;
