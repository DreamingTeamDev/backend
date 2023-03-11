const validateBody = require('./validateBody');
const validateStatus = require('./validateStatus');
const authenticate = require('./authenticate');
const upload = require('./upload');
const validateFeedback = require('./validateFeedback');

module.exports = {
  validateBody,
  validateStatus,
  authenticate,
  upload,
  validateFeedback
};