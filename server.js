const mongoose = require("mongoose");
const app = require("./app");
const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set('strictQuery', false)

const startServer = async () => {
  try {
    await mongoose.connect(DB_HOST);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}`)
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

startServer();
