const validateBody = require('./validateBody');
const validateStatus = require('./validateStatus');
const authenticate = require('./authenticate');
const upload = require('./upload');

module.exports = {
  validateBody,
  validateStatus,
  authenticate,
  upload
};