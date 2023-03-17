const { FROM_EMAIL, TO_EMAIL,TO_EMAIL_1 } = process.env
const { sendMailFeedback } = require('../../helpers')
require('dotenv').config()

const sendFeedback = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body
    const mailOptions = {
      from: `${name} <${FROM_EMAIL}>`,
      to: [TO_EMAIL, TO_EMAIL_1],
      subject: `New message from ${name}`,
      html: `<p style="font-size:16px;">${message}</p><br/><p style="font-size:16px;">Sender name: ${name}</p><p style="font-size:16px;">Sender email: ${email}</p><p style="font-size:16px;">Sender phone: ${phone}</p>`,
      headers: {
        'Content-Type': 'text/html',
      },
    };
    await sendMailFeedback(mailOptions)
    res.send('Message sent')
  } catch (error) {
    console.log(error)
    res.status(500).send('Error sending message')
  }
}
module.exports = sendFeedback
