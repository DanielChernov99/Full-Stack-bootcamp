function responseFormatter(req, res, next) {
  res.success = function (data, statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      data: data,
    });
  };

  next();
}

module.exports = responseFormatter;
