const { body, validationResult } = require("express-validator");

const validateComment = [
  body("content")
    .isString()
    .withMessage("Content must be a string")
    .bail()
    .trim()
    .isLength({ min: 5, max: 500 })
    .withMessage("Content must be between 5 and 500 characters"),

  body("email").isEmail().withMessage("Email must be valid").normalizeEmail(),
];

function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Comment validation failed");
    error.statusCode = 400;
    error.details = errors.array();

    return next(error);
  }

  next();
}

module.exports = {
  validateComment,
  handleValidationErrors,
};
