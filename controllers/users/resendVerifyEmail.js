const User = require("../../models/user");
const { NotFound, BadRequest } = require('http-errors');
const { sendMail } = require("../../helpers")

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw new NotFound("Not found")
    }
    if (user.verify) {
        throw new BadRequest("Verification has already been passed")
    }
    const mail = {
        to: email,
        subject: "Site registration confirmation",
        html: `<a href="${BASE_URL}/api/users/verify/${user.verificationToken}" target="_blank">Click to confirm registration</a>`
    };
    await sendMail(mail);
    res.json({
        "message": "Verification email sent"
    })
}

module.exports = resendVerifyEmail;