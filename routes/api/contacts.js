const express = require('express');
const ctrl = require('../../controllers/contacts');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, validateStatus, authenticate } = require('../../middlewares');
const { addSchema, addSchemaStatus } = require('../../schemas/contacts');

const router = express.Router();

router.get('/', authenticate, ctrlWrapper(ctrl.getAllList));

router.get('/:contactId', authenticate, ctrlWrapper(ctrl.getById));

router.post('/', authenticate, validateBody(addSchema), ctrlWrapper(ctrl.add));

router.delete('/:contactId', authenticate, ctrlWrapper(ctrl.removeById));

router.put('/:contactId', authenticate, validateBody(addSchema), ctrlWrapper(ctrl.updateById));

router.patch("/:contactId/favorite", authenticate, validateStatus(addSchemaStatus), ctrlWrapper(ctrl.updateStatusContact));

module.exports = router;
