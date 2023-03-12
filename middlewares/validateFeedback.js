const { RequestError } = require("../helpers");

const validateFeedback = (schema) => {
  return (req, _, next) => {
    const validationResult = schema.validate(req.body);

    if (validationResult.error) {
      return next(
        RequestError(
          400,
          `missing required field — ${validationResult.error.message}`
        )
      );
    }

    return next();
  };
};

module.exports = validateFeedback;
