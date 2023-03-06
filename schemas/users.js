const Joi = require('joi');

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5).max(30),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5).max(30),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().required(),
});

module.exports = {
  signupSchema,
  loginSchema,
  verifyEmailSchema
}