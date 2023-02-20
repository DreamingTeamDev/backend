const Contact = require('../../models/contact');

const getAllList = async (_, res) => {
  const result = await Contact.find({});
  res.json(result);
};

module.exports = getAllList;