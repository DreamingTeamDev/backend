const mongoose = require('mongoose');
const app = require('./app');

mongoose.set('strictQuery', true);

const { DB_HOST } = process.env;
const port = process.env.PORT || 3000;

mongoose.connect(DB_HOST)
  .then(() => app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  }))
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
