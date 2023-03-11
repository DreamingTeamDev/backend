const { RequestError } = require('../helpers');

const validateFeedback = (schema) => (req, _, next) => {
  const { error } = schema.validate(req.body);
  if (error)
    return next(RequestError(400, `missing required field — ${error.message}`));

  return next();
};

module.exports = validateFeedback;
