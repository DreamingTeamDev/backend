
const fs = require("fs/promises");
const path = require("path");

const User = require("../../models/user");
const imageSize = require("../../helpers/imageSize");

const updateAvatar = async (req, res) => {

  if (!req.file)
    res.json({ message: 'Please upload a file' });

  const { _id } = req.user;
  const extension = req.file.originalname.split(".").pop();
  const fileName = `${_id}.${extension}`;

  const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

  const resultUpload = path.join(avatarsDir, fileName);

  await fs.rename(req.file.path, resultUpload);

  await imageSize(resultUpload);

  const avatarURL = path.join("avatars", fileName);

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = updateAvatar;
