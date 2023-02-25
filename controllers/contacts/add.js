const Contact = require('../../models/contact');

const add = async (req, res) => {
  const contactData = { ...req.body, owner: req.user._id };
  const result = await Contact.create(contactData);

  res.status(201).json(result);
};

module.exports = add;