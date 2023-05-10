const mongoose = require("mongoose");

exports.connect = (username, password) => {
  try {
    mongoose.connect(
      `mongodb+srv://${username}:${password}@cluster0.iwvire8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
    );
  } catch (error) {
    return error.message;
  }
};
