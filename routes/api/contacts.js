const express = require('express');
// const contacts = require('../../models/contacts');
const Contact = require('../../models/contact')
const Joi = require('joi');
const { RequestError } = require('../../helpers');

const addSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
})

const addSchemaFavorite = Joi.object({
  favorite: Joi.boolean().required(),
})

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const result = await Contact.find({});

    res.json(result);
  } catch (error) {
    next(error);
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId)
    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body)
    if (error) {
      throw RequestError(400, `missing required field — ${error.message}`);
    }
    const result = await Contact.create(req.body);
    res.status(201).json(result)
  } catch (error) {
    next(error);
  }
});

router.delete('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.json({ message: 'contact deleted' });

  } catch (error) {
    next(error)
  }
});

router.put('/:contactId', async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw RequestError(400, "missing fields");
    }
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.json(result)
  } catch (error) {
    next(error);
  }
});

router.patch("/:contactId/favorite", async (req, res, next) => {
  try {
    const { error } = addSchemaFavorite.validate(req.body);
    if (error) {
      throw RequestError(400, "missing field favorite");
    }
    const { contactId } = req.params;
    const updateStatusContact = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!updateStatusContact) {
      throw RequestError(404, "Not Found");
    }
    res.json(updateStatusContact);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
