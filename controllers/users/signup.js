const bcrypt = require("bcryptjs");
const User = require("../../models/user");
const { Conflict } = require('http-errors');
const gravatar = require('gravatar');
const { sendMail } = require('../../helpers')
const { nanoid } = require('nanoid');

const { BASE_URL } = process.env;

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Conflict(`Email ${email} in use`)
  }
  const avatarURL = gravatar.url(email);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const verificationToken = nanoid()
  const result = await User.create({ email, password: hashPassword, subscription, avatarURL, verificationToken });
  const mail = {
    to: email,
    subject: "Site registration confirmation",
    html: `<a href="${BASE_URL}/api/users/verify/${verificationToken}" target="_blank">Click to confirm registration</a>`
  };
  await sendMail(mail);
  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
      verificationToken: result.verificationToken,
    }
  })
}

module.exports = signup;