const nodemailer = require("nodemailer");
const { BadRequest } = require('http-errors');
require("dotenv").config();

const { META_EMAIL, META_PASSWORD } = process.env;
const transporter = nodemailer.createTransport({
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: META_EMAIL,
    pass: META_PASSWORD
  },
});

const sendEmail = async (data) => {
  try {
    await transporter.sendMail({
      ...data, from: META_EMAIL
    });
  } catch (error) {
    throw new BadRequest(error.message);
  }
};

module.exports = sendEmail;