// schemas/feedback.js

const Joi = require('joi');

const feedbackSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(10).max(500).required(),
});

module.exports = feedbackSchema;
