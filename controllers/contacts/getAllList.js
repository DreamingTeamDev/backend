const Contact = require('../../models/contact');

const getAllList = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skipAmount = (page - 1) * limit;

  const queryObject = { owner: req.user._id };
  if (req.query.favorite) {
    queryObject.favorite = req.query.favorite === 'true';
  }
  const contacts = await Contact.find(queryObject)
    .skip(skipAmount)
    .limit(limit)
    .populate('owner', 'email');

  res.json(contacts);
};

module.exports = getAllList;
