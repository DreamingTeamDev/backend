const express = require('express');
const ctrl = require('../../controllers/contacts');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, validateStatus } = require('../../middlewares');
const { addSchema, addSchemaStatus } = require('../../schemas/contacts');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAllList));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', validateBody(addSchema), ctrlWrapper(ctrl.add));

router.delete('/:contactId', ctrlWrapper(ctrl.removeById));

router.put('/:contactId', validateBody(addSchema), ctrlWrapper(ctrl.updateById));

router.patch("/:contactId/favorite", validateStatus(addSchemaStatus), ctrlWrapper(ctrl.updateStatusContact));

module.exports = router;
