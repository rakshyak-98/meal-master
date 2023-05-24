const { Schema, model } = require("mongoose");
const uuid = require("uuid");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, rerquired: true },
  role: { type: String, required: false },
});

const profileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true },
  posts: Number,
  created: { type: Date, default: Date.now },
  updateOn: Date,
});

const user = model("user", userSchema);
const profile = model("profile", profileSchema);

exports.user = user;
exports.profile = profile;
