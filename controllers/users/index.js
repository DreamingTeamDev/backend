const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const current = require('./current');
const updateUserSubscription = require('./updateUserSubscription');
const updateAvatar = require('./updateAvatar');
const resendVerifyEmail = require('./resendVerifyEmail');
const verifyEmail = require('./verifyEmail');

module.exports = {
  signup,
  login,
  logout,
  current,
  updateUserSubscription,
  updateAvatar,
  resendVerifyEmail,
  verifyEmail,
}