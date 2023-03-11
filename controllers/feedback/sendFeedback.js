const { FROM_EMAIL } = process.env;
const { sendMailFeedback } = require('../../helpers');

const sendFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const mailOptions = {
      from: FROM_EMAIL,
      to: 'dreaming.team.dev@gmail.com',
      subject: `New message from ${name}`,
      text: `${message} \n\n Sender name: ${name} \n Sender email: ${email}`,
    };

    await sendMailFeedback(mailOptions);

    res.send('Message sent');

  } catch (error) {
    console.log(error);

    res.status(500).send('Error sending message');
  }
};

module.exports = sendFeedback; 