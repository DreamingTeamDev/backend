const {/*  FROM_EMAIL,  */TO_EMAIL } = process.env
const sendMailFeedback = require('../../helpers')
require('dotenv').config()

const sendFeedback = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body
    const mailOptions = {
      from: /* FROM_EMAIL */`${email}`,
      to: TO_EMAIL,
      subject: `New message from ${name}`,
      text: `${message} \n\n Sender name: ${name} \n Sender email: ${email} \n Sender phone: ${phone}`,
    }
    await sendMailFeedback(mailOptions)
    res.send('Message sent')
  } catch (error) {
    console.log(error)
    res.status(500).send('Error sending message')
  }
}
module.exports = sendFeedback
