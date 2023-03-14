const Joi = require("joi");

const feedbackSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(9).max(19),
  message: Joi.string().min(10).max(500).trim().required()
});

module.exports = feedbackSchema;
