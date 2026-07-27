const requestsByIp = new Map();

const MAX_REQUESTS = 10;
const WINDOW_MS = 60 * 1000;

function rateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  const requestData = requestsByIp.get(ip);

  if (!requestData || now - requestData.windowStart >= WINDOW_MS) {
    requestsByIp.set(ip, {
      count: 1,
      windowStart: now,
    });

    return next();
  }

  if (requestData.count >= MAX_REQUESTS) {
    const error = new Error("Too many requests, please try again later");
    error.statusCode = 429;

    return next(error);
  }

  requestData.count++;
  next();
}

module.exports = rateLimiter;
