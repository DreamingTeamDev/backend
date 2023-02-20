const Joi = require('joi');

const addSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const addSchemaStatus = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  addSchema,
  addSchemaStatus,
};
