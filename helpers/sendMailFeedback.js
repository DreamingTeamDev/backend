require("dotenv").config();
const { FROM_EMAIL, PASSWORD } = process.env;
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: FROM_EMAIL,
    pass: PASSWORD,
  },
});

const sendMailFeedback = (mailOptions) => {
  return transporter.sendMail(mailOptions);
};

module.exports = sendMailFeedback;
