const express = require('express');
const ctrl = require('../../controllers/feedback');
const { ctrlWrapper } = require('../../helpers');
const { validateFeedback } = require('../../middlewares');
const feedbackSchema = require('../../schemas/feedback');

const router = express.Router();

router.post("/", validateFeedback(feedbackSchema), ctrlWrapper(ctrl.sendFeedback));

module.exports = router;
