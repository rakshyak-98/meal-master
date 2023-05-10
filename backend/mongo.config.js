const mongoose = require("mongoose");

exports.connect = () => {
  try {
    mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.CLUSTER_STRING}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
    );
  } catch (error) {
    return error.message;
  }
};
