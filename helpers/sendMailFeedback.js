require("dotenv").config();
const nodemailer = require('nodemailer');
const { FROM_EMAIL, PASSWORD } = process.env;
const transporter = nodemailer.createTransport({
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: FROM_EMAIL,
    pass: PASSWORD
  },
});

const sendMailFeedback = async mailOptions => await transporter.sendMail(mailOptions);
module.exports = {
  sendMailFeedback
};


// require("dotenv").config();
// const nodemailer = require('nodemailer');
// const { FROM_GMAIL_EMAIL, GMAIL_PASSWORD } = process.env;
// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   auth: {
//     user: FROM_GMAIL_EMAIL,
//     pass: GMAIL_PASSWORD
//   }
// });

// const sendMailFeedback = async mailOptions => await transporter.sendMail(mailOptions);
// module.exports = sendMailFeedback;




